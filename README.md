# Magic Wand App

Magic Wand App is an application for browsing, adding, and viewing details of magic wands.

## Installation

Before running the application, make sure you have [git](https://git-scm.com/) and [Node.js](https://nodejs.org/) installed on your computer.

- Clone the repository: git clone <REPOSITORY_URL>

### Server Side

#### Starting Server Side

- Navigate to the magic-wand-api directory: cd magic-wand-api
- Install the necessary dependencies: npm install
- Start the server: npm start

### Client Side

#### Starting Client Side

- Navigate to the magic-wand directory: cd magic-wand
- Install the necessary dependencies: npm install
- Start the server: npm run dev
- Make sure your port is:5173

## Testing

To access authenticated routes in application you must have a valid username and password.
Two available user accounts are:

### User1

- Username: Nikola
- Password: test123

### User2

- Username: username
- Password: password

## Routes

The application has different routes, some of which are only accessible if you are logged in. If you are not logged in, you have access to the /login and /wands routes, while other routes will redirect you to the /login route.

### Non-Authenticated Routes

- /wands
- /login
- / - redirects to /login

### Authenticated routes

- /auth/wands
- /auth/wands/:id
- /auth/add-wand
