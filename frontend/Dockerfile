FROM node:22-alpine AS builder
# Downloading the os and staging as builder
WORKDIR /app
# making a folder 
COPY package*.json ./
#copying the all package files and paste it in the current new folder that we made.
RUN npm install
#to install all the dependicies written in package file.
COPY . .
#copy the build folder into current folder
RUN npm run build

FROM nginx:alpine
#establish a light wieght web server
COPY --from=builder /app/build /usr/share/nginx/html
#copy 
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]