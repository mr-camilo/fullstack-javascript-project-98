install: #Ejecutar npm ci
	npm ci

.PHONY: install brain-games publish

brain-games: #Comando corto para ejecutar juego
	node bin/brain-games.js

publish: #Comando de publicación
	npm publish --dry-run