# Node.js CRUD API with MongoDB

This is a simple Node.js CRUD (Create, Read, Update, Delete) API application built with Express.js and MongoDB.

## Getting Started

1. Clone the repository: https://github.com/mihika14/Task2
2. Install dependencies: nodemon ,express , mongodb , mongoose , cors
3. Set up environment variables:   
   - Create a `.env` file in the root of the project.
   - Add your MongoDB connection string in the `.env` file:
4. Start the server: npm run start

## API Endpoints

### Add Data

- **URL:** `/adddata`
- **Method:** `POST`
- **Description:** Add new data to the database.
- **Request Body:**
  ```json
  {
      "name": "John Doe"
  }
  {
    "status": "ok",
    "message": "data added"
  }

### Edit Data

- **URL**: `/updatedata/:id`
- **Method**: `PUT`
- **Description:** Update existing data in the database.
- **Request Parameters:** id (ID of the document to update)
- **Request Body:**
  ```json
   {
    "name": "(insrt name)"
   }
  {
    "updatedData":
  {
        "_id": "607d393e1c03693e58941fa9",
        "name": "Updated Name"
  },
    "executionTime": 25 
  }

### Count 
- **URL**: `/count`
- **Method**: `GET`
- **Description:** Get the number of times the add and update APIs have been called.
- **Request Body:**
  ```json
  {
    "addCount": 10,
    "updateCount": 5
  }
