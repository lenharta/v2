import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Text, Title, IconButton, Transition, DURATION, EASING } from '@/core';
import { ToastProps } from './types';

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
    duration,
    className,
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
          className={clsx('v2-toast', className)}
          style={{ ...toastStyles, ...transitionStyles }}
          {...forwardedProps}
        >
          <div className="v2-toast-header">
            {icon}

            <Title className="v2-toast-title" h3>
              {title}
            </Title>

            <IconButton onClick={onClose} icon="close-x-large" className="v2-toast-close" />
          </div>
          <Text className="v2-toast-text">{text}</Text>
        </div>
      )}
    </Transition>
  );
});

Toast.displayName = '@v2/Toast';
export { Toast };
