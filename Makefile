.PHONY: install dev build preview test clean post deploy lint

## install — Install npm dependencies
install:
	npm install

## dev — Start the Astro dev server (http://localhost:4321)
dev:
	npm run dev

## build — Build the site for production (output: dist/)
build:
	npm run build

## preview — Preview the production build locally
preview:
	npm run preview

## test — Run unit tests
test:
	npm test

## post — Scaffold a new blog post (usage: make post TITLE="My Title" SUMMARY="A summary")
post:
	npm run post:new -- "$(TITLE)" "$(SUMMARY)"

## clean — Remove build artifacts
clean:
	rm -rf dist .astro

## deploy — Build and deploy to Cloudflare Pages
deploy:
	npm run deploy

## lint — Type-check the project
lint:
	npx astro check
