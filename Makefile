install: #Ejecutar npm ci
	npm ci

.PHONY: install brain-games

brain-games: #Comando corto para ejecutar juego
	node bin/brain-games.js