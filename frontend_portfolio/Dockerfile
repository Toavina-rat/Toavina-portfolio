# frontend_portfolio/Dockerfile
FROM node:18-alpine as build

WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY index.html ./

# Installation des dépendances
RUN npm ci

# Copie du code source
COPY src ./src
COPY public ./public

# Build de l'application
RUN npm run build

# Stage de production avec Nginx
FROM nginx:alpine

# Copie des fichiers buildés
COPY --from=build /app/dist /usr/share/nginx/html

# Copie de la configuration nginx personnalisée (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]