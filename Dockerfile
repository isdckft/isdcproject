#eredeti
# FROM nginx:1.15.8-alpine
# WORKDIR /usr/share/nginx/html
# COPY ./dist/isdcproject/ .
# EXPOSE 80



# Build
# docker build -t isdckft/isdcproject .
# docker run -p 4200:4200 isdckft/isdcproject 
FROM node:alpine
WORKDIR /usr/app
COPY ./ ./
RUN npm install
RUN npm run build
#RUN node_modules/@angular/bin/ng build --prod

FROM nginx:alpine
COPY --from=0 dist/isdcproject /usr/share/nginx/html