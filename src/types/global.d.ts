import * as React from 'react';

export type Promisable<T> = T | Promise<T>;

export type ElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

export type ExoticProps<T extends React.ElementType> = React.RefAttributes<T>;

export type ExoticRender<
  T extends Element,
  P extends Record<string, any> = {},
> = React.ForwardRefRenderFunction<T, P>;

export type ExoticComponent<
  T extends Element,
  P extends Record<string, any> = {},
  C extends Record<string, any> = {},
> = React.ForwardRefExoticComponent<P & React.RefAttributes<T>> & C;

export type AnimationConfigKey = 'to' | 'from';
export type AnimationConfigObject = Record<AnimationConfigKey, gsap.TweenVars>;

export interface InlineStylesMediaQuery {
  query: string;
  styles: React.CSSProperties;
}

export interface InlineStylesInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: InlineStylesMediaQuery[];
}

export type ContactInfoKey = 'email' | 'phone' | 'url';
export type ContactNameKey = 'last' | 'first' | 'middle';
export type ContactAddressKey = 'street' | 'city' | 'state' | 'zip';

export type ContactInfoObj = Record<ContactInfoKey, string>;
export type ContactNameObj = Record<ContactNameKey, string>;
export type ContactAddressObj = Record<ContactAddressKey, string>;

export interface ContactDataProps {
  name: Partial<ContactNameObj>;
  info: Partial<ContactInfoObj>;
  address: Partial<ContactAddressObj>;
}

export interface ItemObject {
  value: string | number;
  label: string | number;
  disabled?: boolean;
}

export interface ItemObjectParsed {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ItemObjectGroup {
  group: string;
  items: (string | ItemObject)[];
}

export interface ItemObjectGroupParsed {
  group: string;
  items: (ItemObjectParsed | ItemObjectGroupParsed)[];
}

export type ItemInput = string | number | ItemObject | ItemObjectGroup;
export type ItemOutput = ItemObjectParsed | ItemObjectGroupParsed;
