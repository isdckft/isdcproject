# stage 1

FROM node:alpine AS my-app-build
# RUN /bin/sh -c "apk add --no-cache bash"
WORKDIR /usr/app
COPY . .
RUN npm ci && npm run build
#CMD ["/bin/bash"]

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /usr/app/dist/isdcproject /usr/share/nginx/html
EXPOSE 80
