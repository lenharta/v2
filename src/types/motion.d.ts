import gsap from 'gsap';

export declare namespace Motion {
  export interface Config {
    type: 'to' | 'from';
    value: gsap.TweenVars;
  }
}
