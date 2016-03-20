
import mongoose from 'mongoose';
module.exports = function (done) {
  const debug = $.createDebug('init:mongodb');
  const  conn = mongoose.createConnection($.config.get('db.mongode'));
  $.mongodb = conn;
  $.module = {};
  done();
}
