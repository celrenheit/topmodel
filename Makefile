examples:
	node examples/es6ify_examples.js

gremlin-server:
	cd gremlin-server && ./bin/gremlin-server.sh ../conf/gremlin-server.yaml

download-gremlin:
	./scripts/download-gremlin.sh

all: examples

.PHONY: examples gremlin-server