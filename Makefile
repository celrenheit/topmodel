install: npm-install download-gremlin

npm-install:
	@npm install

test:
	@npm test

watch:
	@./node_modules/.bin/nodemon --exec 'npm test'

examples:
	node examples/es6ify_examples.js

gremlin-server:
	cd gremlin-server && ./bin/gremlin-server.sh ../conf/gremlin-server.yaml

download-gremlin:
	@./scripts/download-gremlin.sh

all: examples
dev: watch

.PHONY: examples gremlin-server test