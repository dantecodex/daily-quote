# Daily Quote Web Application

Welcome to the Daily Quote Web Application! This application allows users to receive daily inspirational quotes via email, customize their settings, and explore a collection of motivational quotes.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

The Daily Quote Web Application is built to inspire and motivate users by delivering a new quote to their email inbox every day. Users can sign up, customize their settings, and receive daily quotes tailored to their preferences. The application also provides a dashboard where users can manage their account settings.

## Features

- **User Authentication**: Users can sign up and log in to access their personalized dashboard.
- **Custom Settings**: Users can customize their settings, including the time to receive daily quotes and whether to receive them.
- **Daily Quote Email**: Users receive a daily email containing an inspirational quote.
- **Quote Collection**: Explore a collection of motivational quotes to stay inspired.
- **Error Handling**: Robust error handling ensures smooth user experience.

## File Structure

```
project_root/
│
├── controllers/
│   ├── quote_controller.js
│   └── user_controller.js
│
├── middleware/
│   ├── checkAuth.js
│   └── globalErrorHandler.js
│
├── models/
│   ├── quote_model.js
│   └── user_model.js
│
├── routes/
│   ├── quote_route.js
│   ├── static_route.js
│   └── user_route.js
│
├── utils/
│   ├── asyncErrorHandler.js
│   ├── customError.js
│   └── email.js
│
├── public/
│   ├── css/
│   │   ├── dashboard.css
│   │   ├── index.css
│   │   ├── login.css
│   │   ├── page404.css
│   │   └── signup.css
│   │
│   └── scripts/
│       └── dashboard.js
│
├── views/
│   ├── dashboard.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── page404.ejs
│   └── signup.ejs
│
├── extra/
│   └── quote.json
│
├── app.js
├── server.js
├── sendQuote.js
├── .env
└── package.json
```

## Installation

To run the Daily Quote Web Application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using npm:

```
npm install
```

4. Create a `.env` file in the project root directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables.
5. Start the server:

```
npm start
```

6. Access the application in your web browser at `http://localhost:PORT`, where `PORT` is the port number specified in your `.env` file.

## Usage

1. Sign up for a new account or log in if you already have one.
2. Customize your settings on the dashboard, including the time to receive daily quotes and whether to receive them.
3. Explore the collection of motivational quotes.
4. Receive a daily email containing an inspirational quote.

## Gallery

![Screenshot 1](/extras/screenshot1.png)
![Screenshot 2](/extras/screenshot2.png)
![Screenshot 3](/extras/screenshot3.png)
![Screenshot 4](/extras/screenshot4.png)
![Screenshot 5](/extras/screenshot5.png)
![Screenshot 6](/extras/screenshot6.png)

## Contributing

Contributions to the Daily Quote Web Application are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Push your changes to your fork.
5. Submit a pull request with a detailed description of your changes.

## Connect with Me

Feel free to connect with me on LinkedIn:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/anshulrajput237)
