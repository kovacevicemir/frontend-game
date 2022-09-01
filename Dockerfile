# https://www.youtube.com/watch?v=lsrbnlZnQpM
# https://docs.docker.com/docker-hub/repos/#:~:text=To%20push%20an%20image%20to,docs%2Fbase%3Atesting%20).
# push new/update:  docker build -t emirkovacevic/aegis7:aegis7 .
# docker push emirkovacevic/aegis7:aegis7
# docker pull emirkovacevic/aegis7:aegis7 from ec2..
# docker run -itd -p 80:80 emirkovacevic/aegis7:aegis7

FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]