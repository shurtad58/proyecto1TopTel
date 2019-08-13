FROM node:10.16.1 

LABEL version="1.0"
LABEL description="Web app Articulos NodeJS"
LABEL maintainer="Stiven Hurtado - shurtad5@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeproyecto1
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm start