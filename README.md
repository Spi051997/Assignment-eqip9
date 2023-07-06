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

1. Install a relational database management system (MySQL).
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


## SQL Procedure for CRUD operations

```sql
DELIMITER //
CREATE PROCEDURE sp_crudUsers(
  IN action VARCHAR(10),
  IN p_id INT,
  IN p_firstname VARCHAR(50),
  IN p_lastname VARCHAR(50),
  IN p_mobilenumber VARCHAR(15),
  IN p_password VARCHAR(100),
  IN p_created_by VARCHAR(50),
  IN p_updated_by VARCHAR(50)
)
BEGIN
  CASE action
    WHEN 'SELECT' THEN
      SELECT * FROM userRegister;
    WHEN 'CREATE' THEN
      INSERT INTO userRegister (firstname, lastname, mobilenumber, password, created_by)
      VALUES (p_firstname, p_lastname, p_mobilenumber, p_password, p_created_by);
    WHEN 'UPDATE' THEN
      UPDATE userRegister SET firstname = p_firstname, lastname = p_lastname, mobilenumber = p_mobilenumber,
      password = p_password, updated_by = p_updated_by, updated_at = CURRENT_TIMESTAMP
      WHERE id = p_id;
    WHEN 'DELETE' THEN
      DELETE FROM userRegister WHERE id = p_id;
    ELSE
      SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Invalid action provided.';
  END CASE;
END //
DELIMITER ;
```

## API  using the above Procedure

 **GET User ** :http://localhost:4000/user/fetchuser
 
 **Create User** :http://localhost:4000/user/register
 **Payload:**
  ```json
  {
    "firstname": "Heeta",
  "lastname": "Thakur",
  "mobilenumber": "1235678950",
  "password": "securePassword123"
  }
  ```
 **Update User**:http://localhost:4000/user/update/1

 **Payload:**
  ```json
  {
   "firstname": "Sanju ",
    "lastname": "Jhadav",
    "mobilenumber": "9876543210",
    "password": "1234",
    "updated_by": "JohnDoe"
  }
 ```
**Delete User**: http://localhost:4000/user/delete/1

## Front End

The front end integration for the web application has been completed. The following features have been implemented:

- Google Login button: Users can log in using their Google accounts.
- Facebook Login button: Users can log in using their Facebook accounts.

## Note

Please note that **Apple Login** has not been implemented due to the unavailability of a personal Apple account. 
