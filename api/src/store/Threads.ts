import Schema from 'common/Schema';

export default class Threads extends Schema {
  constructor(params: any = {}) {
    super();
    return this.create(params);
  }

  static getMergedThreads(baseThreads: any, mergeThread: any) {
    baseThreads[mergeThread.ch] = { ...mergeThread };
    return baseThreads;
  }
}
