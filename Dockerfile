from node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src ./src
RUN npm run build
