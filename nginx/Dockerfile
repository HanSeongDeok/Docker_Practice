FROM nginx:1.27.3-alpine

COPY ./myconfig.conf /etc/nginx/conf.d/myconfig1.conf
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off"]