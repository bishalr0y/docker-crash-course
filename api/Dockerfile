FROM node:17-alpine

# if we don't mention the  WORKDIR, the commands would be executed in the / dir
WORKDIR /home/app

COPY . .

RUN npm install

# required for docker desktop port mapping (optional not needed if we run the container using cli)
# EXPOSE 4000

CMD [ "node", "server.js" ]