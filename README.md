<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repoitorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -location=global @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```

6. Llenar las variables de entorno definidas  en el ```.env```

7. Ejecutar la aplicación en modo de desarrollo
```
yarn start:dev
```
8. Reconstruir la base de datos con la semilla
```
localhost:3000/api/v2/seed
```
# Build de Producción
1. Crear el archivo de variables de entorno para prducción ```prod.env```
2. Llenar las variables de entorno de producción
3. Crear la nueva imagen
```
docker-compose -f docker-compose.yaml --env-file prod.env up --build
```

# Notas
Hacer un redeply en Heroku sin cambios
```
git commit --allow-empty -m"Tigger Heroku deploy"
git push heroku <master | main>
```

# Stack usado
* MongoDB
* Nest