# add-author-loader

为所有 js 文件添加一段 author 字符串

# 快速使用

开始前，你需要先下载它

```console
npm install --save-dev css-loader
```

or

```console
yarn add -D css-loader
```

or

```console
pnpm add -D css-loader
```

```

```

然后，在 webpack 配置中添加 add-aloader


````javascript
//webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
	  {
            loader: 'add-author-loader',
            options: {
	      description: 'this is a description',
              author: 'coder',
            },
          },
	],
      },
    ],
  },
};
````
