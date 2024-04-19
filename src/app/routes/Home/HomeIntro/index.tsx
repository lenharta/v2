import gsap from 'gsap';
import * as React from 'react';
import { Store } from '@/types';
import { Box, Text } from '@/core';
import { useGSAP } from '@gsap/react';
import { Section } from '@/app/common';
import { motionSelector } from '@/motion';
import { DATA_HOME_INTRO_CARD_COPY, DATA_HOME_INTRO_HEADLINE_COPY } from '@/data';

interface IntroCoffeeCountProps {
  initialValue?: number;
  timeout?: number;
}

const IntroCoffeeCount = ({ initialValue = 1858, timeout = 3000 }: IntroCoffeeCountProps) => {
  const [count, setCoffeeCount] = React.useState(initialValue);
  const intervalRef = React.useRef<NodeJS.Timeout>();
  const scope = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => setCoffeeCount((c) => c + 1), timeout);
    return () => clearInterval(intervalRef.current);
  }, [count]);

  const [thousands, hundreds, tens, ones] = count.toString().split('')!;

  const common: gsap.TweenVars = { x: 0, ease: 'power1.in', yoyo: true };
  const commonTo: gsap.TweenVars = { ...common, y: 0, opacity: 1 };
  const commonFrom: gsap.TweenVars = { ...common, y: '-100%', opacity: 0 };

  const css = {
    container: 'coffee-integer-container',
    integer: 'accent-text coffee-integer',
    thousands: 'coffee-integer-thousands',
    hundreds: 'coffee-integer-hundreds',
    tens: 'coffee-integer-tens',
    ones: 'coffee-integer-ones',
  };

  useGSAP(
    () => {
      gsap.from(motionSelector(css.ones), commonFrom);
      gsap.to(motionSelector(css.ones), commonTo);
    },
    { scope, dependencies: [ones] }
  );

  useGSAP(
    () => {
      gsap.from(motionSelector(css.tens), commonFrom);
      gsap.to(motionSelector(css.tens), commonTo);
    },
    { scope, dependencies: [tens] }
  );

  useGSAP(
    () => {
      gsap.from(motionSelector(css.hundreds), commonFrom);
      gsap.to(motionSelector(css.hundreds), commonTo);
    },
    { scope, dependencies: [hundreds] }
  );

  useGSAP(
    () => {
      gsap.from(motionSelector(css.thousands), commonFrom);
      gsap.to(motionSelector(css.thousands), commonTo);
    },
    { scope, dependencies: [thousands] }
  );

  return (
    <div ref={scope} className={css.container}>
      <div className={css.thousands} children={<span className={css.integer}>{thousands}</span>} />
      <div className={css.hundreds} children={<span className={css.integer}>{hundreds}</span>} />
      <div className={css.tens} children={<span className={css.integer}>{tens}</span>} />
      <div className={css.ones} children={<span className={css.integer}>{ones}</span>} />
    </div>
  );
};

const HomeIntroCard = (props: Store.CopyItem & { isCoffee?: boolean }) => {
  const { title, text, isCoffee } = props;
  const [value, unit] = title?.split('/')!;
  const coffeeValue = isCoffee ? Number(value.replace(',', '')) : 2363;

  return (
    <div className="sec-home-intro-card">
      <div className="sec-home-intro-card-stat">
        {value && (
          <React.Fragment>
            {isCoffee ? (
              <IntroCoffeeCount initialValue={coffeeValue} />
            ) : (
              <span className="sec-home-intro-card-value accent-text">{value}</span>
            )}
          </React.Fragment>
        )}
        {unit && <span className="sec-home-intro-card-unit">{unit}</span>}
      </div>
      <Text>{text}</Text>
    </div>
  );
};

export const HomeIntroSection = ({ lang = 'english' }: { lang?: Store.LanguageName }) => {
  const headline = DATA_HOME_INTRO_HEADLINE_COPY[lang][0];
  const cards = DATA_HOME_INTRO_CARD_COPY[lang];
  return (
    <Section className="sec-home-intro">
      <Box className="sec-home-intro-box" scheme="secondary">
        <Text>{headline.text}</Text>
      </Box>
      <Box className="sec-home-intro-box">
        {cards.map((copy, index) => (
          <HomeIntroCard {...copy} isCoffee={index === cards.length - 1} />
        ))}
      </Box>
    </Section>
  );
};
