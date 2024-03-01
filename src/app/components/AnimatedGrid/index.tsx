interface AnimatedGridAnimationPropss {
  animating?: boolean;
  shouldExit?: boolean;
}

const AnimatedGridRow = () => {
  return (
    <div className="animated-grid-row">
      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />

      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />

      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />

      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />
      <div className="animated-grid-cell" />
    </div>
  );
};

export const AnimatedGrid = ({ animating }: AnimatedGridAnimationPropss) => (
  <div
    className="animated-grid"
    {...(animating === false ? { 'data-animation-exit': true } : {})}
    {...(animating === true ? { 'data-animation-enter': true } : {})}
    {...(animating === undefined && {})}
  >
    <AnimatedGridRow />
    <AnimatedGridRow />
    <AnimatedGridRow />

    <AnimatedGridRow />
    <AnimatedGridRow />
    <AnimatedGridRow />

    <AnimatedGridRow />
    <AnimatedGridRow />
    <AnimatedGridRow />

    <AnimatedGridRow />
    <AnimatedGridRow />
    <AnimatedGridRow />
  </div>
);

const Splash = () => {};

// const exit = { 'data-animation-exit': true };
// const enter = { 'data-animation-enter': true };

// const [animating, setAnimating] = React.useState(false);

// const handleAnimation = () => {
//   const phase = animating ? 'enter' : 'exit';
//   return { [`data-animation-${phase}`]: true };
// };

// React.useEffect(() => {
//   setAnimating(true);
//   const timeout = window.setTimeout(() => setAnimating(false), 2000);
//   return () => window.clearTimeout(timeout);
// }, []);

// console.log(animating);
