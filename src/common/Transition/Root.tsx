import React from 'react';

// const timeline = new ViewTimeline({
//   subject: img,
//   axis: "block",
// });

// img.animate(
//   {
//     opacity: [0, 1],
//     transform: ["scaleX(0)", "scaleX(1)"],
//   },
//   {
//     fill: "both",
//     duration: 1,
//     timeline,
//     rangeStart: "cover 0%",
//     rangeEnd: "cover 100%",
//   },
// );

// const transitionConfig = {
//   steps: [{ transform: 'rotate(0) scale(1)' }, { transform: 'rotate(360deg) scale(0)' }],
//   timing: {
//     duration: 2000,
//     iterations: 1,
//   },
// };

// type FrameOptions = {
//   translate: number[];
//   rotate: number[];
//   scale: number[];
// };

// type FrameTimeline = {};

// type FrameTimingOptions = {
//   iterations?: number | undefined;
//   duration?: number | undefined;
// };

// const newspaperSpinning = [
//   { transform: "rotate(0) scale(1)" },
//   { transform: "rotate(360deg) scale(0)" },
// ];

// const newspaperTiming = {
//   duration: 2000,
//   iterations: 1,
// };

// const newspaper = document.querySelector(".newspaper");

// newspaper.addEventListener("click", () => {
//   newspaper.animate(newspaperSpinning, newspaperTiming);
// });

// export type CSSUnit = 'px' | 'em' | 'rem' | 'percent' | 'deg';

// export type CSSUnitMiddleware = {
//   percent(v: number): CSSUnitValue;
//   number(v: number): CSSUnitValue;
//   rem(v: number): CSSUnitValue;
//   deg(v: number): CSSUnitValue;
//   em(v: number): CSSUnitValue;
//   px(v: number): CSSUnitValue;
// };

// export type CSSTransitionMiddleware = {
//   rotate(v: number): string;
//   scaleX(v: number, unit?: Extract<CSSUnit, 'percent'>): string;
//   scaleY(v: number, unit?: Extract<CSSUnit, 'percent'>): string;
//   translateX(v: number, unit?: CSSUnit): string;
//   translateY(v: number, unit?: CSSUnit): string;
// };

// export const mergeUnit = (v: CSSUnitValue): string => {
//   return v.unit === 'number' ? String(v.value) : String(v.value + v.unit);
// };

// const CSSUnitMiddlewares = (): CSSUnitMiddleware => ({
//   percent: (v) => CSS.percent(v),
//   number: (v) => CSS.number(v),
//   rem: (v) => CSS.rem(v),
//   deg: (v) => CSS.deg(v),
//   em: (v) => CSS.em(v),
//   px: (v) => CSS.px(v),
// });

// const CSSTransitionMiddlewares = (): CSSTransitionMiddleware => {
//   const middlewares = CSSUnitMiddlewares();
//   return {
//     rotate: (v) => `rotate(${mergeUnit(middlewares['deg'](v))})`,
//     scaleX: (v) => `scaleX(${mergeUnit(middlewares['number'](v))})`,
//     scaleY: (v) => `scaleY(${mergeUnit(middlewares['number'](v))})`,
//     translateX: (v, unit = 'px') => `translateX(${mergeUnit(middlewares[unit](v))})`,
//     translateY: (v, unit = 'px') => `translateX(${mergeUnit(middlewares[unit](v))})`,
//   };
// };

export type TransitionRootProps = {
  options?: KeyframeAnimationOptions;
  mounted?: boolean;
  duration?: number;
  keyframes?: { [property: string]: string | number | null | undefined }[];
  iterations?: number;
  component?: 'div';
  onEnter?: () => void;
  onExit?: () => void;
};

export type TransitionBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & TransitionRootProps;
};

export type TransitionRefProps = {
  Root: TransitionBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type TransitionComponents = {
  Root: React.ForwardRefExoticComponent<TransitionRefProps['Root']>;
};

export type TransitionRootComponent = TransitionComponents['Root'];

export const Transition = (props: TransitionBaseProps['Root']) => {
  const {
    options,
    mounted,
    children,
    duration = 2000,
    keyframes,
    iterations = 1,
    component: Component = 'div',
    ...otherProps
  } = props;

  const transitionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log('STATE-CHANGED');
    const node = transitionRef.current!;
    node.animate(keyframes ?? [], { duration, iterations });
  }, [mounted, transitionRef]);

  return (
    <Component {...otherProps} ref={transitionRef}>
      {children}
    </Component>
  );
};

// type AnimateKeyFrame = {
//   easing?: 'ease-in' | 'ease-out';
//   opactiy?: number;
//   transform?: string;
// };

// export const TransitionDemoComponent = () => {
//   const middlewares = CSSTransitionMiddlewares();
//   const [mounted, setMounted] = React.useState(false);
//   const fireAnimation = () => setMounted((current) => !current);

//   return (
//     <>
//       <Transition
//         mounted={mounted}
//         duration={1000}
//         iterations={1}
//         keyframes={[
//           { transform: 'translateY(100px) scaleY(0)' },
//           { transform: 'translateY(0) scaleY(1)' },
//           { transform: 'translateX(-100%)' },
//         ]}
//       >
//         <div
//           style={{ width: 600, padding: 16, outline: 'solid 2px dodgerblue' }}
//           children={<Title>Transition Demo</Title>}
//         />
//       </Transition>
//       <div
//         style={{ width: 600, paddingInline: 16, paddingBlock: 16, outline: 'solid 2px dodgerblue' }}
//         children={<Button onClick={fireAnimation}>Animate Button</Button>}
//       />
//     </>
//   );
// };
