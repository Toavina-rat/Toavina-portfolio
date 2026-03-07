FROM node:18-alpine
WORKDIR /app
# Copie des fichiers de dépendances
COPY package*.json ./
RUN npm install --production
# Copie du reste du code
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]