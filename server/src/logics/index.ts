//import Passport from 'server/logics/Passport';
import MongoDB from 'server/listens/db/MongoDB';
import SocketIo from 'server/listens/io/SocketIo';
import Favicon from 'server/logics/Favicon';
import Fs from 'server/logics/Fs';
import Html from 'server/logics/Html';
import Io from 'server/logics/Io';
import Collections from 'server/logics/db/collections';
import express from 'server/logics/express';
import sns from 'server/logics/sns';

const mongoDB = new MongoDB();
const socketIo = new SocketIo();

export default {
  express: express,
  sns: new sns(),
  db: new Collections(mongoDB),
  io: new Io(socketIo),
  html: new Html(),
  favicon: new Favicon(),
  fs: new Fs(),
  //  passport: new Passport(),
};
