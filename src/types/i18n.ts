import {
  I18N_LANGUAGE_CODE,
  I18N_LANGUAGE_NAME,
  I18N_UNITED_STATES_MAP,
  I18N_UNITED_STATES_REGION_CODE,
  I18N_UNITED_STATES_REGION_NAME,
} from '@/data';

export declare namespace I18N {
  export type LanguageCode = keyof typeof I18N_LANGUAGE_CODE;
  export type LanguageName = keyof typeof I18N_LANGUAGE_NAME;
  export type LanguageProps = { code: LanguageCode; name: LanguageName };

  export type UnitedStatesRegionCode = keyof typeof I18N_UNITED_STATES_REGION_CODE;
  export type UnitedStatesRegionName = keyof typeof I18N_UNITED_STATES_REGION_NAME;
  export type UnitedStatesRegion = { name: UnitedStatesRegionName; code: UnitedStatesRegionCode };
  export type UnitedStatesMap = typeof I18N_UNITED_STATES_MAP;
}
