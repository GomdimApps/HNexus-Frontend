FROM node:23.3-alpine3.19 AS build

RUN npm install typescript -g

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM nginx:1.27.3-alpine3.20

EXPOSE 80

RUN mkdir -p /var/site

COPY --from=build /app/dist/ /var/site/
COPY --from=build /app/Script/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]