FROM node:18-alpine

WORKDIR /app

COPY package-lock.json ./
COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

COPY .env .env

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
