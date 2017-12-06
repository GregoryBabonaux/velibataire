* Basé sur le boilerplate : https://github.com/notrab/create-react-app-redux avec quelques retouches
* un chouya de Bootstrap Material pour faire moins moche
* Ajout de quelques tests avec Enzyme et Jest (il a beau avoir mauvaise réputation, il fait très bien le job)
* redux-mock-store pour les tests redux
* Ajout de Flow pour gérer les types (mais pas implémenté... mais les propTypes existent, il faudrait les remplacer)
* J'ai ajouté des bars... au cas où... 

## Installation
```bash
git clone https://github.com/GregoryBabonaux/velibataire.git
cd velibataire
yarn
```

## Tests
```bash
yarn test
```

## Contrôle avec flow
```bash
yarn flow
```

## CORS
* L'API de Google étant ce qu'elle est, pour afficher les bars, il faut peut être activer le cors avec une extension Chrome si ça ne fonctionne pas en local