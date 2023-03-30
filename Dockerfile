FROM node:16-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build
ENV PORT 3000
EXPOSE $PORT
CMD npm run start -- -p $PORT