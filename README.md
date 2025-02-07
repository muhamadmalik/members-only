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

## What I Learned

- **User Authentication:** Implemented secure login flows with Passport.js and learned the importance of proper session management.
- **Database Integration:** Gained hands-on experience with PostgreSQL, from writing SQL queries to handling different data types effectively.
- **Security Best Practices:** Learned to safeguard user data by using bcrypt for password hashing and dotenv for managing environment variables.
- **Error Handling & Debugging:** Improved my troubleshooting skills by resolving issues like DNS resolution errors and connection problems between local and remote environments.
- **Templating with EJS:** Mastered dynamic HTML rendering and date formatting techniques using EJS, enhancing the user interface.
- **Project Structure & Deployment:** Understood the importance of clean code organization and the nuances of deploying applications across varied environments.


