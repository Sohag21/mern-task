<!-- MERN stack assessment documentation -->

I have been complete a MERN stack assessment. Used technologies in this project MongoDb, ExpressJs, ReactJs, NodeJs.There have two parts Backend and Frontend in this project.

Backend:
I have used the MongoDb database to store data. I have created a seeder.js file to make a function to upload millions of dummy data. And I have been uploading dummy data in mongoDb using this file.
I have created a user model for user collection. and I have created an auth route file and  auth endpoint to log in users.I have created another users.js route file to make some users information api endpoints.
End point no one country wise users(/api/users/country),any user can see country wise how many users for each country
Endpoint no two gender wise users(/api/users/gender), any user can see gender wise how many users for each gender.
Endpoint no three list of top 15 users as max logged in time (/api/users/top-users), any user can see top 15 users based on max logged in time.

Faster API loading management: 
1. I have made a data indexing based on a unique row (username) in mongoDB collection. 
Indexes help to solve queries more efficiently. Indexes are a special data structure used to locate the record in the given table very quickly without being required to traverse through every record in the table. The data structure that is used by an index is a Binary Tree.
2. I have written all of the express queries based on aggregation operations. Aggregation is faster than finding a query. Aggregation in MongoDB allows for the transforming of data and results in a more powerful fashion than from using the find() command. Through the use of multiple stages and expressions, you are able to build a "pipeline" of operations on your data to perform analytic operations.


Frontend: 
I have made a reactjs dashboard based on backend response with light and dark mode. 
Any user can’t see the dashboard without authentication. That's why  I have made a login page for users to login. I have used context API for future used auth user information and theme mode and colors information. Users can log out and destroy information from the dashboard.
After logged in users can see some information inside the dashboard. 
I have created a line chart using chart js to view country wise users information from the backend endpoint(/api/users/country).
I have created a Pie chart using chart js to view gender wise users information from the backend endpoint(/api/users/gender).
And I have created a Drag and Drop row wise Table using react-dnd with some other plugins  to view Top 15 users information based on max logged time from the backend endpoint(/api/users/top-users).
And I also used axios for fetching data from API.


Note: I have completed this project after my office time. If I try to be more complex and I try to make a fully customizable dashboard then I need more time. That's why I have done this project in the easiest way.
