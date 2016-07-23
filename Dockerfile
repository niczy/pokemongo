FROM node:argon
RUN mkdir -p /user/src/app
WORKDIR /user/src/app
COPY package.json /user/src/app
RUN npm install
RUN ls
COPY server.js /user/src/app
COPY server /user/src/app/server
COPY build/bundled /user/src/app/build/bundled


EXPOSE 8080
CMD ["npm", "start"]
