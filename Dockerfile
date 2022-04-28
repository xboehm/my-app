#FROM node:15.13-alpine
#WORKDIR /app
#ENV PATH="./node_modules/.bin:$PATH"
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#CMD ["npm", "start"]

FROM node:14.17-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./
RUN npm run build

### RUN ###

FROM nginx:1.21.3-alpine

COPY --from=build /app/build/ /usr/share/nginx/html

COPY --from=build /app/docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]