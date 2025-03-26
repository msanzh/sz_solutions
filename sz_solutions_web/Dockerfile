FROM node:alpine AS build
WORKDIR .
COPY . .
RUN npm i
RUN npm run build

FROM httpd:alpine AS runtime
COPY --from=build ./dist /usr/local/apache2/htdocs/
COPY ./ssl/fullchain.pem /usr/local/apache2/conf/server.crt
COPY ./ssl/privkey.pem /usr/local/apache2/conf/server.key
COPY ./ssl/my-httpd-vhosts.conf /usr/local/apache2/conf/extra/httpd-vhosts.conf
RUN sed -i \
		-e 's/^#\(Include .*httpd-vhosts.conf\)/\1/' \
		-e 's/^#\(Include .*httpd-ssl.conf\)/\1/' \
		-e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
		-e 's/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/' \
		conf/httpd.conf
EXPOSE 80
EXPOSE 443