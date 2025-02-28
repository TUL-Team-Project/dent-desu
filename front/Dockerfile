# Stage 1 - the build app
FROM node:22.11-alpine AS build-app

WORKDIR /app
COPY . .

RUN npm ci

ENV REACT_APP_BASE_URL "https://api.plusmed.cloud:60443"
ENV REACT_APP_PAYMENT_URL "https://plusmed.cloud:60443"

RUN npm run build

# Stage 2 - build server
FROM nginx:1.27-alpine
COPY --from=build-app /app/build /usr/share/nginx/html/
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
