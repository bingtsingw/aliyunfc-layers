FROM aliyunfc/runtime-nodejs20

COPY ./package.json /opt/nodejs/
COPY ./package-lock.json /opt/nodejs/

RUN cd /opt/nodejs && npm i

RUN cd /opt && zip -ry layer.zip * .[^.]*
