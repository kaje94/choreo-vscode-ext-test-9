FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .
# COPY public public

ENV NODE_ENV production

EXPOSE 8080

USER 10014

CMD ["bun", "src/index.ts"]




# # Base image
# FROM node:latest

# RUN npm i -g npm@8.6.0

# # RUN addgroup allusers && adduser -S -G allusers username

# # Create app directory
# WORKDIR /usr/src/app

# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

# RUN npm cache clean --force

# # Install app dependencies
# RUN npm install

# # Bundle app source
# COPY . .

# # Creates a "dist" folder with the production build
# RUN npm run build

# EXPOSE 3001

# USER 10014
# CMD [ "node", "dist/main.js" ]