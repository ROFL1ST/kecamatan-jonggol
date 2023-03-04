FROM node

WORKDIR /usr/src/fe-kecamatan
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "start"]