FROM node:14
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g
COPY . .
EXPOSE 8000
CMD ["pm2-runtime","start","index.js"]
