# Members Only

A secure web application where users can sign up, log in, and post messages. The project features user authentication, message posting, and a login counter—all backed by a PostgreSQL database.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [What I Learned](#what-i-learned)
- [Contributing](#contributing)
- [License](#license)

## Overview

The "Members Only" project is a Node.js web application that demonstrates how to build a secure and scalable platform. The app enables users to register, log in using Passport.js, and share messages. It also keeps track of user login counts and formats dates for display using EJS templates.

## Features

- **User Authentication:** Secure registration and login with Passport's local strategy.
- **Message Posting:** Authenticated users can post and view messages.
- **Login Counter:** Automatically increments and stores the number of times a user has logged in.
- **Database Integration:** Uses PostgreSQL to store user details, messages, and login counters.
- **Templating Engine:** Uses EJS to dynamically render content and format dates.
- **Environment Management:** Secure configuration using environment variables.

## Technologies Used

- **Node.js & Express:** For the server and application routing.
- **Passport.js:** For handling authentication.
- **bcrypt:** For hashing user passwords.
- **PostgreSQL:** As the relational database.
- **EJS:** As the templating engine for dynamic HTML rendering.
- **dotenv:** To manage environment variables securely.

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/muhamadmalik/members-only.git
   cd members-only
Install Dependencies:

bash
Copy
Edit
npm install
Configure Environment Variables:

Create a .env file in the root directory and add the following (modify the values as needed):

env
Copy
Edit
DB_HOST=your_database_host   # e.g., db.railway.app if connecting externally
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_PORT=5432
SESSION_SECRET=your_session_secret
Run the Application:

bash
Copy
Edit
node app.js
Access the Application: Open your browser and navigate to http://localhost:3000 (or the configured port).

Usage
Registration & Login: New users can register and then log in. Existing users can log in to post messages.
Message Posting: Once logged in, users can post messages that are stored in the database and displayed on the site.
Automatic Login Counting: Every time a user logs in, the application updates a login counter in the database.
Troubleshooting
Database Connection Issues:
If you see errors like getaddrinfo ENOTFOUND, ensure that you are using the correct external hostname provided by your database host (e.g., Railway). Internal hostnames like postgres.railway.internal won’t resolve on your local machine.
Double-check your environment variables in the .env file.
General Debugging:
Check your console for error messages.
Verify that your PostgreSQL server is running and accessible.
What I Learned
Working on this project has been an invaluable learning experience. Some key takeaways include:

User Authentication:
Implementing secure user authentication using Passport.js deepened my understanding of session management, middleware, and best practices for user security.

Database Integration:
I learned how to interact with PostgreSQL, perform SQL queries, and manage data types effectively. Handling real-world scenarios such as missing data and error handling improved my database troubleshooting skills.

Security Practices:
Implementing bcrypt for password hashing and managing sensitive credentials via environment variables underscored the importance of security in web development.

Error Handling & Debugging:
Encountering and resolving issues like DNS resolution errors (ENOTFOUND) and database connection problems taught me to diagnose and fix environmental and network issues effectively.

Templating & Date Formatting:
Using EJS for dynamic content rendering and learning how to format dates both in the backend and frontend provided a comprehensive view of how templating engines work.

Project Structure & Deployment Considerations:
Structuring the application for maintainability and understanding the differences between local and production environments have been crucial lessons for building scalable web applications.

Contributing
Contributions are welcome! If you have ideas or improvements, please feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss your ideas.

License
This project is licensed under the MIT License.
