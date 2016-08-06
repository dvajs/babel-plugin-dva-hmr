
build:
	npm run build

publish: build
	npm publish

publish-sync: publish
	cnpm sync babel-plugin-dva-hmr
	tnpm sync babel-plugin-dva-hmr
