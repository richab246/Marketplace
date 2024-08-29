FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package-lock.json ./
COPY package*.json ./

# Copy prisma directory
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

COPY .env .env

# Generate Prisma client
RUN npx prisma generate

# Build the Next.js application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]