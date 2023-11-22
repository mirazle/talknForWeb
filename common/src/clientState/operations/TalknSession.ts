import define from 'common/define';

let storage: { [key: string]: any } = {};

export default class TalknSession {
  static getBaseKey(ch: string) {
    return `${define.storageKey.baseKey}${ch}`;
  }

  static setStorage(rootCh: string, key: string, value: any) {
    if (key) {
      const baseKey = TalknSession.getBaseKey(rootCh) as string;
      if (typeof localStorage !== 'undefined') {
        const itemStr = localStorage.getItem(baseKey);
        let items = JSON.parse(localStorage.getItem(baseKey) as string);
        items = JSON.stringify({ ...items, [key]: value });
        localStorage.setItem(baseKey, items);
      }
      let items = storage[baseKey] ? storage[baseKey] : {};
      items = { ...items, [key]: value };
      storage[baseKey] = items;
      return true;
    } else {
      return false;
    }
  }

  static getStorage(rootCh: string, key: string) {
    const baseKey = TalknSession.getBaseKey(rootCh) as string;
    if (typeof localStorage !== 'undefined') {
      const itemStr = localStorage.getItem(baseKey);
      if (itemStr !== null) {
        const item = JSON.parse(itemStr);
        return item[key];
      } else {
        return {};
      }
    } else {
      let items = storage[baseKey] ? storage[baseKey] : {};
      return items[key] ? items[key] : {};
    }
  }

  static getCaches(rootCh: string) {
    const menuLogs = TalknSession.getStorage(rootCh, define.storageKey.menuLogs);
    const app = TalknSession.getStorage(rootCh, define.storageKey.app);
    const thread = TalknSession.getStorage(rootCh, define.storageKey.thread);
    const setting = TalknSession.getStorage(rootCh, define.storageKey.setting);
    return { menuLogs, app, thread, setting };
  }
}
