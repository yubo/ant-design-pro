# mock
.PHONY: start
start:
	npm run start

# non mock
.PHONY: dev
dev:
	npm run start:dev


.PHONY: build
build:
	npm run build

.PHONY: test
test:
	npm run lint

.PHONY: fix
fix:
	npm run lint:fix

.PHONY: api
api:
	rm -f ./mock/*.mock.ts  && \
	rm -rf ./src/services/apiserver && \
	curl -Ss -o config/apidocs.json http://localhost:8080/apidocs.json && \
	npm run openapi && \
	rm -f ./tmp/*.mock.ts && \
	rm -f ./mock/auth*.mock.ts ./tmp/

.PHONY: install
install:
	yarn install

.PHONY: clean
clean:
	rm -f ./mock/*.mock.ts
