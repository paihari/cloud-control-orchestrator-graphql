FROM node:lts-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*" , "./"]

RUN npm i -D @types/node
RUN npm install --production --silent 

COPY . .

CMD ["npx", "ts-node", "src/main.ts"]
