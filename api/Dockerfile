FROM node:17-alpine

WORKDIR /home/app


COPY . .
RUN npm install

# required for docker desktop port mapping
# EXPOSE 4000

CMD [ "node", "server.js" ]