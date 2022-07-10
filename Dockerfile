FROM node:16-alpine

# Install app dependencies
COPY ./package.json ./
COPY ./tsconfig*.* ./
COPY ./nest-cli.json ./

RUN npm install

# Bundle app source
COPY ./src ./src

RUN npm run build

# Build Stage
FROM node:16-alpine
WORKDIR /src
COPY --from=0 ./dist ./dist
COPY ./package* ./
RUN npm install --production

EXPOSE 7020
CMD ["npm", "run", "start:prod"]