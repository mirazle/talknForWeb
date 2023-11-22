import embeds from './embeds';
import forms from './forms';
import groups from './groups';
import heads from './heads';
import interactive from './interactive';
import sections from './sections';
import tables from './tables';
import texts from './texts';

export type StyledComponentsType = {
  [category: string]: {
    [tagName: string]: any;
  };
};

export type StyledComponentsKeys = keyof typeof output;

export * from './embeds';
export * from './forms';
export * from './groups';
export * from './heads';
export * from './interactive';
export * from './sections';
export * from './tables';
export * from './texts';

const output = {
  embeds,
  forms,
  groups,
  heads,
  interactive,
  sections,
  tables,
  texts,
};

export default {
  embeds,
  forms,
  groups,
  heads,
  interactive,
  sections,
  tables,
  texts,
};
