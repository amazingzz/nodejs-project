
/**
*pratice node.js
*@author zhengz
**/
import path from 'path';
import ProjectCore from 'project-core';

const $ = global.$ =  new ProjectCore();

//创建debug函数

$.createDebug = function (name) {
  return createDebug('my:' + name);
};

const debug = $.createDebug('server');

//加载配置文件
$.init.add((done)=>{
  $.config.load(path.resove(__dirname, 'config.js'));
  const env = process.env.NODE_ENVN || null;
  if(env) {
      debug('load env:'+env);
      $.config.load(path.resove(__dirname, '../config', env + '.js'));
  }
  $.env = env;
  done();
});


//初始化mongodb

$.init.load(path.resove(__dirname, 'init', 'mongodb.js'));
//加载model
$.init.load(path.resove(__dirname, 'models'));

//初始化express
$.init.load(path.resove(__dirname, 'init', 'express.js'));
//加载路由
$.init.load(path.resove(__dirname, 'routes'));

//初始化
$.init((err) => {
   if(err){
     console.error(err);
     process.exit(-1);
   }else{
     console.log('inited');
   }

   $.model.User.save({
     name:'User${$.utils.date('Ymd')}',
     password : '测试用户'
   });
});
