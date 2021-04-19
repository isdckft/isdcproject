FROM nginx:1.15.8-alpine
WORKDIR /usr/share/nginx/html
COPY ./dist/isdcproject/ .
EXPOSE 80
