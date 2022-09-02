const dayjs = require('dayjs');
var SourceNode = require('source-map').SourceNode;
var SourceMapConsumer = require('source-map').SourceMapConsumer;

// 启用缓存
module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  // 获取options
  var options = this.query || {};
  const { author = 'yejiwei', description = '' } = options;
  const date = ` ${dayjs().format('YYYY-MM-DD HH:MM:ss')};`;
  var useStrictPrefix = `
  /**
    * @description: ${description} 
    * @author ${author}
    * @date ${date}
  */\n\n`;

  // 不支持sourceMap的情况
  return useStrictPrefix + source;
};
