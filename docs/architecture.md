# Architecture

## System design

The system is a serverless, single page application. A nosql database is used
to store the data. Authentication is done by a third-party service. Backend
services are managed by a cloud solution.

## Technologies

Language: JavaScript

Libraries: React.js, MaterialUI

Backend: Google Firebase

Backend operations: Google Cloud Functions

## Prototype

The Figma prototype (in Czech) can be found [here](https://www.figma.com/proto/9sgqCVsU7n3Fcl1EEdr4Hd/Guest-Manager?node-id=1%3A64&scaling=scale-down-width).
It covers the basic system functions and layout.

## Authentication

The authentication is handled by the Firebase e-mail authentication. The user logs in using their e-mail and password.
