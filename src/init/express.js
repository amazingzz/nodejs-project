import express from 'express';
import serverStatic from 'serve-static';
import bodyParse from 'body-parser';
import multiparty from 'multiparty';

module.exports = function (done) {

  const app = express();

  app.use(bodyParse.json());
  app.use(bodyParse.urlencoded({extend:false}));

  const router = express.Router();
  $.router = router;

  app.use(router);
  app.use('/static', serverStatic(path.resove(__dirname, '../../static')));

  app.listen($.config.get('web.port'), (err) => {
    done(err);
  });

}
