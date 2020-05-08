
The Project Has 603653 lines of code

----PREREQUISITES-----

Microsoft Visual Studio Code
Node.js
Express
MySql server
Elasticsearch
MongoDB Compass

**Install Angular CLI: npm i -g @angular/cli
**conda install -c anaconda elasticsearch **

Install Python libraries for Yelp Api, MongoDB and recommbee

- pip install yelpapi
- pip install pymongo
-pip install recombee-api-client

Node Modules to be installed:

1. npm install express
2. npm install nodemon --save
3. npm install mysql
4. npm install mongodb --save
5. npm install moment  --save
6. npm install elasticsearch
7. npm install 

Steps to successfully run the project:

1. On command line, navigate to the elasticsearch-7.6.0/bin

2. Run elastic search by executing the following command:
	elasticsearch	

3. On the jupyter notebook, open backend-build-yelp-reviews/Yelp.ipynb and run this file by clicking on Cell > Run All

4. Either on Visual Studio or on  command line terminal, navigate to the backend folder and run the following command to start the backend:
	node server.js
	
5. Either on Visual Studio or on another command line navigate to the frontend folder and execute the following command:
	ng serve
	
6. View in browser at http://localhost:4200

**For Getting Recommendations:
1. User must submit at 8-10 Reviews first by logging in to the app 

2. On the jupyter notebook, open backend recommendations/recombee_v2.ipynb and run this file by clicking on Cell > Run All