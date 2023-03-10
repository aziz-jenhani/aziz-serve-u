FROM node:18-alpine AS development-stage

WORKDIR /usr/src/app
COPY . .

RUN npm ci

CMD ["npm", "run", "start"]
