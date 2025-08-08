# Foot365

Ce projet est un prototype statique d'un site de football.

## Configuration de l'API

1. Ouvrez `config.js` et remplacez `YOUR_RAPIDAPI_KEY` par votre clé RapidAPI.
2. Les pages chargent `config.js` et `api.js` afin de pouvoir effectuer des requêtes via `fetchData(endpoint)`.
3. Exemple :
   ```javascript
   fetchData('v3/status').then(console.log);
   ```

Les informations sensibles ne sont pas stockées dans le dépôt ; ajoutez vos clés locales avant le déploiement.

