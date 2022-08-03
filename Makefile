# Start development server
dev::
	npx webpack serve --open --config webpack.dev.js

# Install dependencies
install::
	yarn install

# Build project
build::
	npx webpack --config webpack.prod.js

# Clean build directory
clean::
	rm -rf ./dist/*

# Deploy project to pages
deploy::
	npx webpack --config webpack.prod.js
	cp -r ./dist/* ./