FROM node:16

# Create app directory
WORKDIR /usr/src/mentoria-gupy-backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ARG PORT_BUILD=8000

ENV PORT=$PORT_BUILD

EXPOSE $PORT_BUILD

ENTRYPOINT npm run dev