FROM node:16.15.0-alpine 
LABEL authors="Muhammed sufiyan PK, Fouzan KV"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

#EXPOSE 3000

CMD ["npm", "start"]