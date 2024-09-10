import { $ } from 'bun';

const PROJECT = '@napi-rs-canvas';
const IMAGE_NAME = `${PROJECT.replace('@', '')}-layer`;
const HOST_PATH = `./out/${PROJECT}`;

async function main() {
  try {
    // 构建 Docker 镜像
    console.log('Building Docker image ...');
    await $`docker build -t ${IMAGE_NAME} ./${PROJECT}`;

    // 创建容器但不运行它
    console.log('Creating container ...');
    const { stdout: containerIdBuffer } = await $`docker create ${IMAGE_NAME}`;
    const containerId = containerIdBuffer.toString().trim();

    // 创建输出目录（如果不存在）
    console.log('Creating output directory ...');
    await $`mkdir -p ${HOST_PATH}`;

    // 从容器中复制 layer.zip 到主机
    console.log('Copying layer.zip from container ...');
    await $`docker cp ${containerId}:/opt/layer.zip ${HOST_PATH}/`;

    // 删除临时容器
    console.log('Removing temporary container ...');
    await $`docker rm ${containerId}`;

    console.log(`layer.zip has been copied to ${HOST_PATH} directory, and the temporary container has been removed.`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
