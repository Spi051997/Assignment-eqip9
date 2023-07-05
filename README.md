# User Database

This repository contains the code for the "User" database, which is designed to store information about users for a web application.

## Table Structure

The "User" database consists of a single table named "users" with the following fields:

| Field         | Type             | Description                  |
|---------------|------------------|------------------------------|
| firstName     | VARCHAR          | First name of the user       |
| lastName      | VARCHAR          | Last name of the user        |
| mobileNumber  | VARCHAR (Primary)| Phone number of the user     |
| password      | VARCHAR          | Password of the user         |

## Usage

The "User" database is intended to be used with a web application that requires user registration and login functionality. The "users" table stores basic user information, including their first and last names, mobile number, and password.

## Setup

To set up the "User" database, follow these steps:

1. Install a relational database management system (e.g., MySQL, PostgreSQL).
2. Create a new database named "User".
3. Execute the following SQL statement to create the "users" table:

```sql
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
```

4. Integrate the userRegistration API and userLogin API into your web application.

### userRegistration API

**Endpoint:** `http://localhost:4000/api`

**Payload:**
```json
{
  "firstName": "Shanti",
  "lastName": "Pitliya",
  "mobileNumber": "9461048810",
  "password": "securePassword"
}
```

### userLogin API

**Endpoint:** `http://localhost:4000/api/login`

**Payload:**
```json
{
  "mobileNumber": "9461048820",
  "password": "securePassword"
}
```

## Sample Data

Here is some sample data that can be stored in the "users" table:

| firstName | lastName | mobileNumber | password                                                | createdAt            | createdBy | updatedAt            | updatedBy |
|-----------|----------|--------------|---------------------------------------------------------|----------------------|-----------|----------------------|-----------|
| John      | Doe      | 1234567890   | securePassword                                          | 2023-07-04 13:26:43  | admin     | 2023-07-04 13:26:43  | admin     |
| Dilip     | Dutt     | 7976545805   | $2b$10$YIlJgjMxc/kUJW2qsoiMo.zyHok3FA5.qDhJEq0.ifu684.AlFEZ. | 2023-07-04 13:38:59  | admin     | 2023-07-04 13:38:59  | admin     |
| Dilip     | Dutt     | 9461048820   | $2b$10$lsJPlr2UP9iLtY8QSwluR.DOKrs1FeQA6jxBHyC6.YBGX9heNm1Ii | 2023-07-04 14:31:27  | admin     | 2023-07-04 14:31:27  | admin     |
| John      | Doe      | 9527750859   | $2b$10$isqtF

Sure! Here's the properly formatted content for the `README.md` file:

```markdown
# User Database

This repository contains the code for the "User" database. The database is designed to store information about users for a web application.

## Table Structure

The "User" database consists of the following table:

### users

| Field         | Type              | Description                 |
|---------------|-------------------|-----------------------------|
| firstName     | VARCHAR           | First name of the user      |
| lastName      | VARCHAR           | Last name of the user       |
| mobileNumber  | VARCHAR(Primary)  | Phone number of the user    |
| password      | VARCHAR           | Password of the user        |

## Usage

The database is intended to be used with a web application that requires user registration and login functionality. The "users" table stores basic user information such as their name, phone number, and password.

## Setup

To set up the "User" database, you will need to:

1. Install a relational database management system (e.g., MySQL, PostgreSQL).
2. Create a new database named "User".
3. Create the "users" table with the specified structure.

```sql
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
```

4. Integrate the userRegistration API and userLogin API.

### userRegistration API

**Endpoint:** `http://localhost:4000/api`

**Payload:**
```json
{
  "firstName": "Shanti",
  "lastName": "Pitliya",
  "mobileNumber": "9461048810",
  "password": "securePassword"
}
```

### userLogin API

**Endpoint:** `http://localhost:4000/api/login`

**Payload:**
```json
{
  "mobileNumber": "9461048820",
  "password": "securePassword"
}
```

## Sample Data

Here is some sample data that can be stored in the "users" table:

| firstName | lastName | mobileNumber | password                                                | createdAt            | createdBy | updatedAt            | updatedBy |
|-----------|----------|--------------|---------------------------------------------------------|----------------------|-----------|----------------------|-----------|
| John      | Doe      | 1234567890   | securePassword                                          | 2023-07-04 13:26:43  | admin     | 2023-07-04 13:26:43  | admin     |
| Dilip     | Dutt     | 7976545805   | $2b$10$YIlJgjMxc/kUJW2qsoiMo.zyHok3FA5.qDhJEq0.ifu684.AlFEZ. | 2023-07-04 13:38:59  | admin     | 2023-07-04 13:38:59  | admin     |
| Dilip     | Dutt     | 9461048820   | $2b$10$lsJPlr2UP9iLtY8QSwluR.DOKrs1FeQA6jxBHyC6.YBGX9heNm1Ii | 2023-07-04 14:31:27  | admin     | 2023-07-04 14:31:27  | admin     |
| John      | Doe      | 9527750859   | $

2b$10$isqtF.59bckrxghpEhGto.XLj5FJx4kmlof6pKtM8gDvylcZ2TC/e | 2023-07-04 13:37:47  | admin     | 2023-07-04 13:37:47  | admin     |

## Front End

The front end integration for the web application has been completed. The following features have been implemented:

- Google Login button: Users can log in using their Google accounts.
- Facebook Login button: Users can log in using their Facebook accounts.

## Note

Please note that Apple Login has not been implemented due to the unavailability of a personal Apple account. 

Please make sure to review and adjust the content to accurately reflect the integration and any additional information specific to your project.
