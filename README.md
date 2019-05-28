### Dog Days:

Dogs Days is a fullstack web application that allows authorized users to schedule play days with dogs in registered dog shelters. Dog shelters have the ability to signup / signin, upload a new dog to their list of available dogs, and view all the dogs in their current shelter. Users are given the opportunity to signup / signin and browse the list of dogs provided by the shelters. Clicking on a specific dog displays more details about a given dog and allows the user to book a play day with the dog. Once a user schedules a play day with a particular dog, that day will become unavailable to all other users.

### Deployed Site:

[Dog Days](dog-days-stackathon.herokuapp.com)

### Technologies:

Node/Express, React/Redux, PostgreSQL, Sequelize

### Requirements

* PostgreSQL
* Node.js

### Before running the program locally

* Make sure you have databases named "dogdays" and "dogdays-test" in order for the code to be able to access the database
* One way to do so:

```
createdb timetracker

createdb timetracker-test
```

### Running the program

To run locally:

```
npm install

npm run start-dev
```
