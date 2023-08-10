.PHONY: run
run:
	npm run start:dev

# mock
.PHONY: mock
mock:
	npm run start


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
	rm -f ./mock/auth*.mock.ts

.PHONY: setup
setup:
	yarn install

.PHONY: clean
clean:
	rm -rf ./src/.umi
	rm -f ./mock/*.mock.ts

.PHONY: push
push:
	./misc/push.sh

.PHONY: install
install:
	./misc/install.sh
