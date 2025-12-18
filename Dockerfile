FROM node

RUN mkdir -p nodejs_dockerized_app
COPY . /nodejs_dockerized_app

# EXPOSE 8082

CMD ["node", "/nodejs_dockerized_app/index.js"]