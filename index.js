/**
 * Compile 阶段插件接口
 * @param  {string} content     文件内容
 * @param  {File}   file        fis 的 File 对象 [fis3/lib/file.js]
 * @param  {object} settings    插件配置属性
 * @return {string}             处理后的文件内容
 */
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');

module.exports = function (content, file, settings) {
    var processor = postcss([autoprefixer]);
    ret = processor.process(content).css;
    console.log(ret);
    return ret;
};