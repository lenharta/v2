import { objectKeys } from '@/utils';
import { TextProps } from '@/common/Text/types';
import { TitleProps } from '@/common/Title/types';
import { DividerProps } from '@/common/Divider/types';
import { SubtitleProps } from '@/common/Subtitle/types';
import { ElementProps, ExoticComponent, ExoticRender, Language, SecScheme } from '@/types';

export interface SecMatter {
  id: string;
  tags?: Partial<Record<Language, string[]>> | undefined;
  title?: Partial<Record<Language, string>> | undefined;
  subtitle?: Partial<Record<Language, string>> | undefined;
  description?: Partial<Record<Language, string>> | undefined;
}

export interface SecLayoutProps {
  children?: React.ReactNode | undefined;
  lang?: Language | undefined;
}

type SecOmitProps = 'children' | 'lang';
type SecBaseProps<T extends React.ElementType> = Omit<ElementProps<T>, SecOmitProps>;

export interface SecProps extends SecBaseProps<'section'>, SecLayoutProps {
  cols?: number | undefined;
  scheme?: SecScheme | undefined;
}

export interface SecHeaderProps extends SecBaseProps<'header'>, SecLayoutProps {
  id?: string | undefined;
  title?: string | undefined;
  scheme?: SecScheme | undefined;
  subtitle?: string | undefined;
  description?: string | undefined;
  withDivider?: boolean | undefined;
  titleProps?: TitleProps | undefined;
  subtitleProps?: SubtitleProps | undefined;
  descriptionProps?: TextProps | undefined;
  dividerProps?: DividerProps | undefined;
}

export interface SecContentProps extends SecBaseProps<'div'>, SecLayoutProps {
  cols?: number | undefined;
}

export type SecContentRenderType = ExoticRender<HTMLDivElement, SecContentProps>;
export type SecContentComponentType = ExoticComponent<HTMLDivElement, SecContentProps>;

export type SecHeaderRenderType = ExoticRender<HTMLElement, SecHeaderProps>;
export type SecHeaderComponentType = ExoticComponent<HTMLElement, SecHeaderProps>;

export type SecRenderType = ExoticRender<HTMLDivElement, SecProps>;
export type SecComponentType = ExoticComponent<HTMLDivElement, SecProps> & {
  Header: SecHeaderComponentType;
  Content: SecContentComponentType;
};

export interface SecMatterFactory<
  T extends SecMatter = SecMatter,
  K extends keyof T = keyof T,
  L extends Language = Language,
> {
  getMatterId(): string;
  getMatterKeys(): K[];
  getMatterByKey(key: K): T[K];
  getMatterTags(): Partial<Record<L, string[]>>;
  getMatterTitles(): Partial<Record<L, string>>;
  getMatterSubtitles(): Partial<Record<L, string>>;
  getMatterDescriptions(): Partial<Record<L, string>>;
  getMatterTagsByLang(lang: L): string[] | undefined;
  getMatterTitleByLang(lang: L): string | undefined;
  getMatterSubtitleByLang(lang: L): string | undefined;
  getMatterDescriptionByLang(lang: L): string | undefined;
}

export function createSectionMatterFactory<
  T extends SecMatter = SecMatter,
  K extends keyof T = keyof T,
  L extends Language = Language,
>(data: T): SecMatterFactory<T, K, L> {
  return {
    getMatterId() {
      return data.id;
    },
    getMatterKeys() {
      return objectKeys(data);
    },
    getMatterByKey(key) {
      return data[key];
    },
    getMatterTags() {
      return data.tags ? data.tags : {};
    },
    getMatterTitles() {
      return data.title ? data.title : {};
    },
    getMatterSubtitles() {
      return data.subtitle ? data.subtitle : {};
    },
    getMatterDescriptions() {
      return data.description ? data.description : {};
    },
    getMatterTagsByLang(lang) {
      return data.tags && data.tags[lang] ? data.tags[lang] : [];
    },
    getMatterTitleByLang(lang) {
      return data.title && data.title[lang] ? data.title[lang] : undefined;
    },
    getMatterSubtitleByLang(lang) {
      return data.subtitle && data.subtitle[lang] ? data.subtitle[lang] : undefined;
    },
    getMatterDescriptionByLang(lang) {
      return data.description && data.description[lang] ? data.description[lang] : undefined;
    },
  };
}

export const DATA_SAMPLE_SECTION_METADATA: SecMatter = {
  id: 'sample-sec-id',
  tags: {
    english: ['Overview', 'Technology', 'Stack'],
    arabic: ['ملخص', 'تكنولوجيا', 'كومة'],
    french: ['Aperçu', 'Technologie', 'Empiler'],
    german: ['Überblick', 'Technologie', 'Stapel'],
    japanese: ['概要', 'テクノロジー', 'スタック'],
    spanish: ['Descripción General', 'Tecnología', 'Pila'],
  },
  title: {
    english: `Section Title`,
    arabic: `عنوان القسم`,
    french: `Section titre`,
    german: `Abschnittsüberschrift`,
    japanese: `セクションのタイトル`,
    spanish: `Sección de título`,
  },
  subtitle: {
    english: `Section Subtitle`,
    arabic: `عنوان القسم الفرعي`,
    french: `Sous-titre de la section`,
    german: `Untertitel des Abschnitts`,
    japanese: `セクションのサブタイトル`,
    spanish: `Subtítulo de la sección`,
  },
  description: {
    english: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem laborum in, officia distinctio sint voluptate? Ex aliquam magnam, consectetur officia, libero quae placeat, modi voluptates eaque veniam magni facere!`,
    arabic: `الشركة نفسها هي شركة ناجحة جدا. ولكن في هذه الحالة هل يجب أن يكون هناك تمييز بين الواجبات والمتعة؟ من واجب عظيم، فليفعل الأحرار ما يشاء، ونعيم الطريق، والعفو العظيم`,
    french: `L'entreprise elle-même est une entreprise très prospère. Mais faut-il alors faire une distinction entre devoirs et plaisir ? De quelque grand devoir, le libre arbitre pourra faire ce qu'il veut, les plaisirs et les grands plaisirs.`,
    german: `Das Unternehmen selbst ist ein sehr erfolgreiches Unternehmen. Aber sollte es in diesem Fall einen Unterschied zwischen Pflichten und Vergnügen geben? Aus einer großen Pflicht heraus wird der Freie in der Lage sein, das zu tun, was ihm gefällt, Vergnügen und große Freuden`,
    japanese: `会社自体は非常に成功している会社です。しかしその場合、義務と楽しみは区別されるべきなのでしょうか？ある大きな義務から、自由な人は自分の好きなこと、喜び、そして大きな喜びを行うことができる`,
    spanish: `La empresa en sí es una empresa muy exitosa. Pero en ese caso, ¿debería haber una distinción entre deberes y placer? Por algún gran deber, el libre albedrío podrá hacer lo que le plazca, placeres y grandes placeres.`,
  },
};
