.PHONY: install start build test fix

build:
	npm run build

test:
	npm run lint

fix:
	npm run lint:fix

start:
	npm start

install:
	yarn
