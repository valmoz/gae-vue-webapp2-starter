# Google AppEngine Vue Webapp2 Starter
**_NOTE: [Webapp2 is not yet compatible with Python 3 yet.](https://webapp2.readthedocs.io/en/latest/#requirements) This project will be updated if Webapp2 will be updated. Please, check the [Vue Flask Project](https://github.com/Valmoz/gae-vue-flask-starter) for Python 3 support._**

A simple application for [Google App Engine](https://appengine.google.com/), using [Vue.js](https://vuejs.org/) on the frontend and [Webapp2](https://webapp2.readthedocs.io/) on the backend.
This project can be deployed on Google AppEngine Python Standard Environment.

The frontend was built using the [Vue.js Webpack template](http://vuejs-templates.github.io/webpack/), and uses [vue-router](https://router.vuejs.org/) and [vuex](https://vuex.vuejs.org/); vue-router and vuex store are kept in sync using [vuex-router-sync](https://github.com/vuejs/vuex-router-sync).

## Install dependencies

Python dependencies:

    pip install -t lib -r requirements.txt

Frontend dependencies (from the app folder):

    npm install

## Local run

Run the Vue.js frontend (from the app folder):

    npm run dev

Run the backend:

    dev_appserver.py .

## Deploy

Build the Vue.js frontend (from the app folder):

    npm run build

Deploy the application on AppEngine:

    gcloud app deploy app.yaml

## License

[MIT](http://opensource.org/licenses/MIT)
