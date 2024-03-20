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

export interface ContactAddress {
  street?: string;
  state?: string;
  city?: string;
  zip?: string;
}

export interface ContactName {
  lastName?: string;
  firstName?: string;
  middleName?: string;
}

export interface ContactData extends ContactName, ContactAddress {
  email?: string;
  phone?: string;
}
