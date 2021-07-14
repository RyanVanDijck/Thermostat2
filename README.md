# Feature Testing with Cypress

### Learning Objectives
- Explain how cypress helps feature test front-end applications
- Use cypress to help test-drive front-end applications

### Quick start
```sh
$ npm install
$ npx serve .
# then point your browser to http://localhost:5000
```

### To run tests

#### Jasmine Browser tests
```sh
$ npx jasmine-browser-runner serve
# then point your browser to http://localhost:8888
```

#### Cypress tests
Run your application using `serve` so that Cypress can test it.
```sh
$ npx serve .
```
Run cypress.
```sh
$ npx cypress open
```

### Instructions
1. Install the dependencies
2. Run both sets of tests
3. Make the first Cypress test pass by updating the assertion and adding an element to your html file to make it pass
4. Make the second Cypress test pass.

### Resources
- [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Jasmine Browser specs](https://jasmine.github.io/setup/browser.html)
- [Cypress commands](https://docs.cypress.io/api/table-of-contents)
- [Event Listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
