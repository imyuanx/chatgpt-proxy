FROM node:14-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]