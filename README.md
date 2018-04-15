# Backend Developer Assessment 

Purpose of assesment is implement a several actions related to check information about users/clients and policies.
These entities are related. This information will be shown in one way or another depending on the authorization level of
the person who consults

This assesment contains :
    - Assesment
    - Tests
    - Linter
    - Logger
    - Authorization

## Requirements
- Node.js (>=6) installed
- NPM (>=2) installed

## How to run the assesment
- `npm install`
- `npm start`

## How to run the test
- `npm test`

## How to run the linter
- `npm run lint`

## How to run the tokens
- `npm run tokens`

## ASSESMENT ##
Assesment is divided in :
- Controllers (`./src/controllers`)
    In this folder you can see and index.js file and policy.controller.js and user.controller.js
    In these file I have implemented the functions where I do the actions related with filter user by id, by name, policy by name, etc
    I have implemented in users : 
        - getById and getByName
    I have implemented in policies :
        - getPoliciesByName and getUserByPolicy
    If the action is correct you can see an OK response (200)
    If an internal error occurs you can see an Internal error (500)
    If the info does not exist you can see a Not Found message (404)
- Core (`./src/core`)
    In this folder you can see several files related with logger, roles, service and controller
    Most important is service.js where I have implemented several functions related with info filtered
    In service.js you can see :
        - getAll where all information related with entity is displayed (all users or policies contained in both endpoints)
        - getFiltered where all information related with particular entity is displayed (all policies related with an unique user for example)
        - getOneFiltered where a particular information related with entity is displayed 
- Routes (`./src/routes`)
    In this folder you can see an index.js where exist all routes permited
        - router.get('/users')
        - router.get('/users/:id')
        - router.get('/users/byname/:name`)
        - router.get('/policies`)
        - router.get('/policies/:name`)
        - router.get('/policies/:id/user)
- Security (`./src/security`)
    - In this folder you can see an index.js where exist 
- Services (`./src/services`)
    In this folder you can see an index.js file and policy and user service.js
        In these last two files I load the information from endpoints and then Service class works with them.
- Test (`./test/`)
    I explain this part in TEST section
- Server.js and others

## AUTHORIZATION ##

## TEST ##
Test are divided in three sections :
- Policies Tests 
    I check that an array of policies is returned
    It is verified that given an email all the policies related to that email are returned and that the first three coincide with the expected
    I verified that, given a policy id, an expected client id is returned 
- Users Test
    I check that an array of users is returned
    It is verified that given an name all the entries related to that name are returned and the first element must be Britney 
    I verified that, given an user name, an expected client must be Britney
- Service Test
    I check the endpoints
