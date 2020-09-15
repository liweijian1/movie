module.exports = {
   lintOnSave:false,
   outputDir:'./dist/biz/movieFront',//输出打包文件
   publicPath: process.env.NODE_ENV === 'production'
   ? '/movie'   // /movie/ 对应后面`nginx`路径，这里添加的目的是其他静态资源文件统一前缀路径
   : '/',
   devServer:{
      port:8083,  //端口
   }
} 