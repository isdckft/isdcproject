# stage 
# Az alábbi verzióval működik, alpin-nal nem
FROM node:16.15.0 AS my-app-build
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build
# bash hozzáadása, ha tesztelni akarjuk mi van benne
# RUN /bin/sh -c "apk add --no-cache bash"
# bash belépési pont, ha kell
#CMD ["/bin/bash"]

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /usr/app/dist/isdcproject /usr/share/nginx/html
EXPOSE 80
