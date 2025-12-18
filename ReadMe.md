# Description
A Node.js REST API built with Express and MongoDB, using Docker for local database setup.


# Tech Stack
Node.js
Express.js
MongoDB
Docker

# Pull dependencies
Go to root folder
run "docker compose -f setup.yaml up -d"
run "npm install"

# Run application
go to root folder and run "node index.js"


# API Operations
## List employees:
API endpoint GET: /list

Sample Response
```
[
    {
        "_id": "6943b638c372e14ebf2dfd3a",
        "name": "Puran",
        "email": "puran.kotwal@yopmail.com",
        "sex": "Male",
        "department": "IT"
    }
]
```

## Add Employee:
API endpoint POST: /add

Sample Request
```
{
    "name": "Jhon Doe",
    "email": "jhon.doe@yopmail.com",
    "sex": "Male",
    "department": "HR"
}
```

Sample Response
```
{
    "message": "Employee added successfully",
    "_id": "6943bd7e1f07a4658e406284"
}
```