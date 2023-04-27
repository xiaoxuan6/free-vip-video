FROM nginx

WORKDIR /var/www/html
COPY . .

ADD default.conf /etc/nginx/conf.d/default.conf



