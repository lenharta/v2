import * as React from 'react';
import { Store } from '@types';
import { getNextIndex, getPrevIndex } from '@utils';
import { Action, Floating, IconProps } from '@core';

interface SideSelectProps {
  group: { value: string; label: string; icon: Partial<IconProps> };
  items: { value: string; label: string; icon: Partial<IconProps> }[];
  name: keyof Store.Context['state'];
  store: Store.Context['state'];
  dispatch: Store.Context['dispatch'];
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

type SideSelectFactory = React.FC<SideSelectProps>;

const SideSelect: SideSelectFactory = (props) => {
  const { group, items, name, onOpen, onClose, dispatch } = props;

  const [isOpen, setOpen] = React.useState(false);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    dispatch({ sideOpen: true });
    onOpen?.();
  };

  const handleClose = () => {
    dispatch({ sideOpen: undefined });
    targetRef.current?.focus();
    onClose?.();
  };

  const handleOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ [name]: event.currentTarget.value });
    handleClose();
    setOpen(false);
  };

  return (
    <Floating
      isOpen={isOpen}
      placement="right-start"
      onChange={setOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      offset={{ crossAxis: -2 }}
    >
      <Floating.Target>
        <Action
          ref={targetRef}
          icon={group.icon}
          aria-label={group.label}
          selected={isOpen || undefined}
        />
      </Floating.Target>

      <Floating.Box>
        <div className="v2-side-select-drawer">
          <div ref={drawerRef} className="v2-side-select-drawer-layout" data-v2-side-select-drawer>
            {(items ?? []).map((item) => (
              <Action
                key={item.value}
                icon={item.icon}
                value={item.value}
                onClick={handleOptionClick}
                selected={group.value === item.value || undefined}
                aria-label={item.label}
                data-v2-side-select-option
                onKeyDown={(event) => {
                  event.stopPropagation();

                  const parentScope = drawerRef.current!;
                  const childNodes = parentScope.childNodes;
                  const elements = Array.from(childNodes) as HTMLButtonElement[];

                  const currentIndex = elements.findIndex((node) => node === event.target);
                  const nextIndex = getNextIndex(currentIndex, elements, true);
                  const prevIndex = getPrevIndex(currentIndex, elements, true);

                  const moveFocusToNextIndex = () => elements[nextIndex]?.focus();
                  const moveFocusToPrevIndex = () => elements[prevIndex]?.focus();
                  const moveFocusToLastIndex = () => elements[elements.length - 1]?.focus();
                  const moveFocusToFirstIndex = () => elements[0]?.focus();

                  const fireEvents = {
                    Tab: () => {
                      if (nextIndex === 0) {
                        event.preventDefault();
                        handleClose();
                        setOpen(false);
                      }
                    },
                    ArrowUp: () => {
                      event.preventDefault();
                      moveFocusToFirstIndex?.();
                    },
                    ArrowLeft: () => {
                      event.preventDefault();
                      moveFocusToPrevIndex?.();
                    },
                    ArrowRight: () => {
                      event.preventDefault();
                      moveFocusToNextIndex?.();
                    },
                    ArrowDown: () => {
                      event.preventDefault();
                      moveFocusToLastIndex?.();
                    },
                    PageUp: () => {
                      event.preventDefault();
                      moveFocusToFirstIndex?.();
                    },
                    PageDown: () => {
                      event.preventDefault();
                      moveFocusToLastIndex?.();
                    },
                    Home: () => {
                      event.preventDefault();
                      moveFocusToFirstIndex?.();
                    },
                    End: () => {
                      event.preventDefault();
                      moveFocusToLastIndex?.();
                    },
                  }[event.code];

                  fireEvents?.();
                }}
              />
            ))}
          </div>
        </div>
      </Floating.Box>
    </Floating>
  );
};

SideSelect.displayName = '@v2/Side.Select';
export { SideSelect, type SideSelectProps };
