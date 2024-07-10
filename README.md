# nvrs
This repository reflects the work done towards a web app tailored for restaurant patrons.
The idea is to give patrons more control over their orders. 
Basic use cases: 
•	User(s) is seated by host
•	Host assigns table to server
•	User(s) orders drinks
•	Server inputs order into the restaurant Purchase Order System
•	Bartender prepares drink orders
•	User(s) gets drinks
•	User(s) order food

…

The idea is that if the patron wishes to change their order midstream, they may take out their phone quickly log into the restaurant’s POS and modify the order
If the patron wishes to add extras, they may do so as well.
The basic architecture of this prototype is a Node.js server using express to manage CRUD operations, as well as creating routes and endpoints for JSON data. The database lives in a MySQL image inside a docker container, and the idea is to containerize the entire app eventually.
