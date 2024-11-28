FROM node:22.11.0-slim
WORKDIR /app
COPY package*.json .
RUN ["npm", "ci"]

ENV NODE_ENV=production

COPY . .
EXPOSE 3000

USER node  
CMD ["node", "server.js"]
