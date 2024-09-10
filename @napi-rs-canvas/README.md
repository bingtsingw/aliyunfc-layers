# @aliyunfc-layers/napi-rs-canvas

1. 在根目录执行`bun run build.ts --project=@napi-rs-canvas`, 会在`./out/@napi-rs-canvas`目录生成`layer.zip`文件.
2. 在函数计算控制台中选择`层管理` -> `创建层` -> `上传zip包` -> 选择`./out/@napi-rs-canvas/layer.zip`, 兼容运行时可以选择`debian:10`或者`nodejs 20`
3. 配置函数, 使用刚刚创建的层
4. 配置函数的环境变量, 添加`NODE_PATH=/opt/node_modules:/opt/nodejs/node_modules`
