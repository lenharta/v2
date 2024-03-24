import * as React from 'react';
import { LinkContextValue } from './types';

export const LinkContext = React.createContext({} as LinkContextValue);
export const LinkProvider = LinkContext.Provider;
export const useLinkCTX = () => React.useContext(LinkContext);
