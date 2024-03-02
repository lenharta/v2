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
