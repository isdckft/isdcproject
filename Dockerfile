
# FROM node:alpine
# WORKDIR /usr/app
# COPY ./ ./
# RUN npm install --legacy-peer-deps
# #RUN npm run build

# FROM nginx:alpine
# COPY --from=0 /usr/app/dist/isdcproject/*.* /usr/share/nginx/html/

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY  ./dist/isdcproject/*.* ./
