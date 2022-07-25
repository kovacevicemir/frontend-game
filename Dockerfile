# https://www.youtube.com/watch?v=lsrbnlZnQpM
# push new/update:  docker build -t aegis2 .   
# docker push emirkovacevic/aegis2:latest locally..
# docker pull emirkovacevic/aegis2 from ec2..
# docker run -itd -p 80:80 emirkovacevic/aegis2

FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]