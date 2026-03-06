# back_end_portfolio/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci --only=production

# Copie du reste du code
COPY . .

# Exposition du port (ajustez selon votre configuration)
EXPOSE 5000

# Commande de démarrage
CMD ["node", "server.js"]