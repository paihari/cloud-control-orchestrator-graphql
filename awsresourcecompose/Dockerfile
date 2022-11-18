FROM node:lts-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*" , "./"]

RUN npm i -D @types/node@18.11.9
RUN npm install graphql@16.6.0 graphql-compose@9.0.10 aws-sdk@2.1254.0 graphql-compose-aws@5.3.0 @graphql-yoga/node@2.3.0 --save
RUN npm install --production --silent 

COPY . .

CMD ["npx", "ts-node", "src/main.ts"]
