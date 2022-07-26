.PHONY: install start build test fix openapi

# mock
start:
	npm run start

# non mock
dev:
	npm run start:dev


build:
	npm run build

test:
	npm run lint

fix:
	npm run lint:fix

openapi:
	curl -o config/apidocs.json http://localhost:8080/apidocs.json && \
	npm run openapi

install:
	yarn

clean:
	rm -f ./mock/*.mock.ts
