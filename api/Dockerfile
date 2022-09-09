FROM node:17-alpine

RUN npm install -g nodemon

# if we don't mention the  WORKDIR, the commands would be executed in the / dir
WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

# required for docker desktop port mapping (optional not needed if we run the container using cli)
# EXPOSE 4000

CMD [ "npm", "run", "dev" ]