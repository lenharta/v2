import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Text, Title, IconButton, Transition, DURATION, EASING } from '@/core';

export type ToastFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ToastProps;
  element: 'div';
}>;

const Toast = Component<ToastFactory>(
  (
    {
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
      ...props
    },
    ref
  ) => {
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
            {...props}
            className={clsx('v2-toast', className)}
            style={{
              ...style,
              ...transitionStyles,
              top: offset?.x || 32,
              bottom: offset?.y || 32,
              zIndex,
            }}
            ref={ref}
          >
            <div className="v2-toast-header">
              {icon}

              <Title className="v2-toast-title" h3>
                {title}
              </Title>

              <IconButton
                icon={{ name: 'close-x-lg' }}
                className="v2-toast-close"
                onClick={onClose}
              />
            </div>
            <Text className="v2-toast-text">{text}</Text>
          </div>
        )}
      </Transition>
    );
  }
);

Toast.displayName = '@v2/Toast';
export { Toast };
