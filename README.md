## INTRODUCTION ##

This repository es meant to be used as an assessment report. This assessment is an API Rest which has some requests to be done to obtain information from clients and policies and the relations between them. In this repository you can find the following elements integrated:

  - Assessment
  - Tests
  - Linterns
  - Logs
  - Authorization

## USER MANUAL ##
## Requirements

- Node.js (>=6) installed
- NPM (>=2) installed

## How to run the assessment

- `npm install`
- `npm start`

## How to run the test 

- `npm test`

## How to run the linters

- `npm run lint`

## How to run and see the tokens

- `npm run tokens`

## ASSESSMENT SECTION ##

The project is divided in the following elements:

## Controllers section (`./src/controllers`)

    This directory has the policies and clients controllers.

    Both controllers have implemented functions that are related directly with the service layer which is in charge of reading and obtaining the data. Both are capable of manage the data obtained through the service and give a valid response. It is also important to remark, that before giving a response, the authorization level by the user asking the data, is taken into account.

    Features implemented for users :

        - getById, getByName and getAll

    Features implemented for policies :

        - getPoliciesByName, getUserByPolicy and getAll

    If the requests has been done correctly, the reponse will be an OK (200) followed by a json with the required data.
    If an internal error happens, a 500 Error will be returned followed by a json with an informative message.
    If the required data doesn't exists, a 404 Not Found Error will be returned followed by a json  with an informative message.

## Core section (`./src/core`)

    In this directory you can find files related to the controller layer, service layer, logs and rolls:

    - Controller layer: it handles the authorization system. Its purpose is to control that if requests needs authorization, verify if the action requested by the actual user is available for him or not.

    - Service layer: its purpose is to obtain the data from the urls (where the mocked data is) and return the actual content in the mocked data. Everything is handle through _getALL_ function and, after, _getFiltered_ and _getOneFiltered_ functions are who filter the corresponding data taking into account a criteriion.

    - Logger
    - Roles: user and admin

## Routes section (`./src/routes`)

    Here you can find the API endpoints implemented for this assessment:
    - _/users_ : Returns information related to all the clients
    - _/users/:id_ : Returns information related to a client by an id given
    - _/users/byname/:name_ : Returns information related to a client by a name given
    - _/policies_ : Returns information related to all the policies, this endpoint is only accessible for admins
    - _/policies/:name_ : Returns information related to all the policies associated to a client name, this endpoint is only accessible for admins
    - _/policies/:id/user: Retruns information related to a policy associated to a client by Id given.

## Security section (`./src/security`)

    - This directory will be better explained in the *Authorization Section* below.

## Services section (`./src/services`)

    - This directory is used to obtain  the data of the clients and policies known endpoints.
    - In this section the data of the known policies and clients enpoints is obtained

## Test section(`./test/`)

    - This directory will be better explained in the specific *Test Section* below.

- ./src/server.js
- ./src/generate-tokens,js : I will explain this part in AUTHORIZATION section

## AUTHORIZATION SECTION ##

The authentication used in this assessment has been based on jwt. As indicated previously, all the authenticated implementation is integarted in the ./src/security directory. On the other hand, the token geration is implemented in ./src/generate-tokens.js

### How to use the assessment with authentication integrated?

1. First of all you need to execute *npm run tokens* in your terminal. This command will generate two tokens available in the terminal which will correspond to user token and admin token.

2. The requests must be done using *Authorization" header where you must include the token preceded by 'Bearer' (i.e. 'Bearer token')

3. Finally, any requests can be done. As you can imagine, if you are using user token and you request /policies endpoint, the response will be an "Unauthorized" error. If you use the admin token you will obtain the corresponding response. If a token is not set, "unauthorized" error will also appear.

## TEST SECTION ## 

There has been implemented tests for services layer and policies and users.

The purpose of these tests is to check simply aspecs as endpoints are working fine and that anything has been compromised so the responses are as expected.
