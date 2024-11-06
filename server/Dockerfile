FROM node

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY package-lock.json ./


RUN npm install

COPY . .

RUN npm run build


RUN npx prisma generate

EXPOSE 3000

CMD ["node", "dist/main.js"]