import clsx from 'clsx';
import { Factory } from '@/types';
import { ToastProps } from './Toast.types';
import { createFactory } from '@/factory';
import { DURATION, EASING, IconButton, Text, Title, Transition } from '@/core';

type ToastFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ToastProps;
}>;

const Toast = createFactory<ToastFactory>((props, ref) => {
  const {
    mounted,
    icon,
    text,
    title,
    style,
    zIndex,
    offset,
    variant,
    duration,
    transition,
    timingFunction,
    exitDuration,
    keepMounted,
    onEntered,
    onExited,
    onEnter,
    onExit,
    onClose,
    ...forwardedProps
  } = props;

  const toastStyles: React.CSSProperties = {
    ...style,
    bottom: offset?.y || 32,
    right: offset?.x || 32,
    zIndex,
  };

  return (
    <Transition
      mounted={mounted}
      duration={duration || DURATION['moderate-02']}
      timingFunction={timingFunction || EASING['expressive']}
      exitDuration={exitDuration}
      keepMounted={keepMounted}
      onEntered={onEntered}
      onExited={onExited}
      onEnter={onEnter}
      onExit={onExit}
      transition={{
        transitionProperty: transition?.transitionProperty || 'opacity, transform',
        common: transition?.common || { transformOrigin: 'right' },
        out: transition?.out || { opacity: 0, transform: 'scaleX(0)' },
        in: transition?.in || { opacity: 1, transform: 'scaleX(1)' },
      }}
    >
      {(transitionStyles) => (
        <div
          ref={ref}
          className={clsx('v2-toast', `v2-toast--${variant || 'default'}`)}
          style={{ ...toastStyles, ...transitionStyles }}
          {...forwardedProps}
        >
          <div className="v2-toast-header">
            {icon}

            <Title className="v2-toast-title" h3>
              {title}
            </Title>

            <IconButton
              size="xxs"
              variant="accent"
              onClick={onClose}
              icon="close-x-large"
              className="v2-toast-close"
            />
          </div>
          <Text className="v2-toast-text">{text}</Text>
        </div>
      )}
    </Transition>
  );
});

Toast.displayName = '@v2/Toast';
export { Toast };
