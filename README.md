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

  ## userRegistration API
    http://localhost:4000/api
  ## payload  
    {
  "firstName": "Shanti",
  "lastName": "Pitliya",
  "mobileNumber": "9461048810",
  "password": "securePassword"
  }


  ## userLogin API
  http://localhost:4000/api/login
  #payload
  {
      "mobileNumber": "9461048820",
      "password": "securePassword"
} 


## Result
+-----------+----------+--------------+--------------------------------------------------------------+---------------------+-----------+---------------------+-----------+
| firstName | lastName | mobileNumber | password                                                     | createdAt           | createdBy | updatedAt           | updatedBy |
+-----------+----------+--------------+--------------------------------------------------------------+---------------------+-----------+---------------------+-----------+
| John      | Doe      | 1234567890   | securePassword                                               | 2023-07-04 13:26:43 | admin     | 2023-07-04 13:26:43 | admin     |
| Dilip     | Dutt     | 7976545805   | $2b$10$YIlJgjMxc/kUJW2qsoiMo.zyHok3FA5.qDhJEq0.ifu684.AlFEZ. | 2023-07-04 13:38:59 | admin     | 2023-07-04 13:38:59 | admin     |
| Dilip     | Dutt     | 9461048820   | $2b$10$lsJPlr2UP9iLtY8QSwluR.DOKrs1FeQA6jxBHyC6.YBGX9heNm1Ii | 2023-07-04 14:31:27 | admin     | 2023-07-04 14:31:27 | admin     |
| John      | Doe      | 9527750859   | $2b$10$isqtF.59bckrxghpEhGto.XLj5FJx4kmlof6pKtM8gDvylcZ2TC/e | 2023-07-04 13:37:47 | admin     | 2023-07-04 13:37:47 | admin     |
+-----------+----------+--------------+--------------------------------------------------------------+---------------------+-----------+---------------------+-----------
  
## Contributing

If you would like to contribute to the development of this database or have any suggestions, feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as permitted by the license.

---
Replace this content with more specific details about the project and any other relevant information. Include setup instructions, API documentation, or any other important details related to the "User" database.
