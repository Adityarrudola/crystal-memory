FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    nginx \
    unzip \
    curl

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

WORKDIR /var/www/html

RUN curl -L -o master.zip \
    https://github.com/Adityarrudola/crystal-memory/archive/refs/heads/main.zip \
    && unzip master.zip \
    && mv crystal-memory-main/* . \
    && rm -rf crystal-memory-main master.zip

EXPOSE 80

CMD ["/usr/sbin/nginx"]
