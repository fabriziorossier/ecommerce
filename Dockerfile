FROM node:23.3.0-alpine3.20

WORKDIR /app

COPY . .
RUN npm install
RUN npm link @angular/cli

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--public-host", "ecommerce.fabriziorossier.com"]