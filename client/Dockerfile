# Etapa base
FROM node:14.17.0-alpine3.13 AS base

# Configuración del directorio de trabajo
WORKDIR /app

# Copiar archivos de lock y package.json para instalar dependencias
COPY package.json yarn.lock pnpm-lock.yaml package-lock.json ./

# Instalar dependencias en la etapa base
RUN yarn install --frozen-lockfile

# Copiar todos los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN yarn build

# Etapa de producción
FROM node:14.17.0-alpine3.13 AS production

# Configuración del directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios de la etapa base
COPY --from=base /app/package.json ./
COPY --from=base /app/yarn.lock ./
COPY --from=base /app/pnpm-lock.yaml ./
COPY --from=base /app/package-lock.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist

# Comando para ejecutar la aplicación
CMD ["yarn", "start"]
