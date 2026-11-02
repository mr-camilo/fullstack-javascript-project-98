install: #Ejecutar npm ci
	npm ci

.PHONY: install brain-games publish lint brain-even

brain-games: #Comando corto para ejecutar juego
	node bin/brain-games.js

publish: #Comando de publicación
	npm publish --dry-run

lint: #Ejecutar el linter
	npx eslint .

brain-even: #Comando corto para ejecutar juego "Verificación de paridad"
	node bin/brain-even.js