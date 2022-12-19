FROM node:19
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]