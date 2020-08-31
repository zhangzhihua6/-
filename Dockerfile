# 导入nginx镜像
FROM nginx

# 作者
MAINTAINER shijinfu

# 把当前打包工程的 html 复制到虚拟地址
COPY dist/ /usr/share/nginx/html

# 使用自定义 nginx.conf 配置端口和监听
RUN rm /etc/nginx/conf.d/default.conf

# 复制 default.conf 配置文件到 NGINX 目录下
COPY nginx.conf /etc/nginx/

RUN /bin/bash -c 'echo init ok!!!'
