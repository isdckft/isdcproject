# docker build -t isdckft/isdcproject .
# docker run -p 8080:80 isdckft/isdcproject 
FROM node:alpine
WORKDIR /usr/app
COPY ./ ./
RUN npm install
RUN npm run build
#RUN node_modules/@angular/bin/ng build --prod

FROM nginx:alpine
COPY --from=0 /usr/app/dist/isdcproject/*.* /usr/share/nginx/html/