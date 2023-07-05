# Assignment-eqip9

# Database Name: User

This repository contains the code for the "User" database. The database is designed to store information about users for a web application.

## Table Structure

The "User" database consists of the following table:

### users

| Field         | Type               | Description                   |
|---------------|------------- ------|-------------------------------|  
| firstName     | VARCHAR            | First name of the user        |
| lastName      | VARCHAR            | Last name of the user         |
| mobileNumber  | VARCHAR(Primary)   | Phone number of the user      |
| password      | VARCHAR             | Password of the user         |

## Usage

The database is intended to be used with a web application that requires user registration and login functionality. The "users" table stores basic user information such as their name, phone number, and password.

## Setup

To set up the "User" database, you will need to:

1. Install a relational database management system (e.g., MySQL, PostgreSQL).
2. Create a new database named "User".
3. Create the "users" table with the specified structure.

  CREATE TABLE users (
     firstName VARCHAR(255) NOT NULL,
     lastName VARCHAR(255) NOT NULL,
     mobileNumber VARCHAR(14) PRIMARY KEY,
     password VARCHAR(255) NOT NULL,
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     createdBy VARCHAR(255),
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      updatedBy VARCHAR(255)
     );
 
  Then intergrated with userRegistration API and userLogin API

  ##userRegistration API
    http://localhost:4000/api
  #payload  
    {
  "firstName": "Shanti",
  "lastName": "Pitliya",
  "mobileNumber": "9461048810",
  "password": "securePassword"
  }


  #userLogin API
  http://localhost:4000/api/login
  #payload
  {
      "mobileNumber": "9461048820",
      "password": "securePassword"
} 
  
## Contributing

If you would like to contribute to the development of this database or have any suggestions, feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as permitted by the license.

---
Replace this content with more specific details about the project and any other relevant information. Include setup instructions, API documentation, or any other important details related to the "User" database.
