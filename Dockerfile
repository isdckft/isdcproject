FROM nginx:1.15.8-alpine
COPY ./dist/isdcproject/ /usr/share/nginx/html
