export const isValidKey = <T extends object>(key: string | number | symbol, obj: T): key is keyof typeof obj => {
  return key in obj;
};
