import * as React from 'react';

export type Promisable<T> = T | Promise<T>;

export type ElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
export type RefProps<T extends React.ElementType> = React.RefAttributes<T>;

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
