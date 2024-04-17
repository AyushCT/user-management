FROM node:14

# set working directory in container
WORKDIR /usr/src/app

#install dependencies

COPY package*.json ./
RUN npm install

#copy proj file and folder to working dir
COPY . .

# Expose port
EXPOSE 3000

CMD ["node","server.js"]
