To prepare the environment to run the scripts, please follow below link to install cypress
https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install

then install this plugin:
https://www.npmjs.com/package/cypress-file-upload
npm install --save-dev cypress-file-upload

Just copy these files to your own folder:
./integration/MRA/eligibility_spec.js
./integration/MRA/contact_details_spec.js
./integration/MRA/form_submission_spec.js
./integration/MRA/submission_spec.js
./support/commands.js
./support/index.js
./fixtures/cypress.env.json
./fixtures/test.jpg

and run with below env variables:
./fixtures/cypress.env.json

Please check below link for test report:
https://dashboard.cypress.io/projects/mvksbx/runs/
