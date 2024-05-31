# Daily Quote Web Application

## Overview

The Daily Quote Web Application is designed to provide users with daily motivational quotes. Users can sign up, log in, and configure their settings to receive quotes at a specified time each day. The application uses cron jobs to automate the delivery of these quotes via email.

## Features

- **User Authentication**: Sign up, log in, and log out functionality.
- **User Settings**: Configure the time to receive daily quotes and choose whether to receive them.
- **Dashboard**: Displays user information and settings.
- **Daily Quotes**: Receive motivational quotes via email at the specified time.
- **Error Handling**: Graceful handling of errors with appropriate messages.
- **Responsive Design**: Mobile-friendly interface.

## Functionality

### Cron Jobs

The application uses `node-cron` to schedule and send daily quotes to users via email.

- **Load Email Data**: The `loadEmailData` function retrieves all users who have opted to receive daily quotes and schedules a cron job for each user based on their specified time.
- **Time to Cron Expression**: Converts user-specified times to cron expressions for scheduling.
- **Refresh Users and Quotes**: A cron job runs every 6 hours to refresh the list of users and quotes, ensuring that new users or updated settings are accounted for.

## Technologies Used

- **Frontend**: HTML, CSS, EJS (Embedded JavaScript)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer
- **Task Scheduling**: node-cron

## Setup and Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/dantecodex/daily-quote.git
    cd daily-quote
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Environment Variables**:
    Create a `.env` file in the project root directory and add the necessary environment variables. Refer to the `envExample.txt` file for the required variables.

4. **Run the application**:
    ```sh
    npm start
    ```

5. **Access the application**:
    Access the application in your web browser at `http://localhost:PORT`, where `PORT` is the port number specified in your `.env` file.

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

## Gallery

![Screenshot 1](/extras/screenshot1.png)
![Screenshot 2](/extras/screenshot2.png)
![Screenshot 3](/extras/screenshot3.png)
![Screenshot 4](/extras/screenshot4.png)
![Screenshot 5](/extras/screenshot5.png)
![Screenshot 6](/extras/screenshot6.png)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Connect with Me

Feel free to connect with me on LinkedIn:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/anshulrajput237)