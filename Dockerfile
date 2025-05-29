#Etapa 1: Build

FROM node:22-alpine as build

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build --prod



# Etapa 2: rodar aplicação

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

#o nome build vem do 'alias' lá em cima do script, quando é instalado o node:22-alpine
COPY --from=build /app/dist/passeio-ap/browser /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT nginx -g 'daemon off;'