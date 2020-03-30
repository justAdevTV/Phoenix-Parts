FROM node:12-alpine as base

WORKDIR /workdir/server

#------ PRE-REQS --------
FROM base as prereq

COPY package*.json ./
COPY ts*.json ./

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=production

#--------- DEVELOPMENT -----------
FROM prereq as development

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=development

EXPOSE 8080

CMD npm run debug