import cluster from 'cluster';
import os from 'os'

import Express from 'server/listens/express';

const numCPUs = os.cpus().length

export default {
  setUp: async () => {
    if (cluster.isPrimary) {
      // マスタープロセスの場合、ワーカーをフォークする
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
      });
    } else {

      const express = new Express();
      express.createHttpServer();
      express.createHttpsServer();
    }
  },
};
