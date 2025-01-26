# Custom ERP System

## Overview
This project is a custom ERP (Enterprise Resource Planning) system designed to cater to various industries such as construction, retail, and manufacturing. The system is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and incorporates AI integration for automating data entry and providing predictive insights.

## Features
- **User Authentication**: Secure login and registration functionalities.
- **Inventory Management**: Add, update, and retrieve inventory items.
- **Leads Management**: Create, update, and fetch lead information.
- **Purchase Management**: Create and track purchase orders.
- **Sales Management**: Create sales records and track performance.
- **User Management**: Manage user details and roles.
- **AI Integration**: Automate data entry and provide predictive insights.

## Project Structure
```
custom-erp
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   ├── middleware
│   ├── app.js
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   ├── App.js
│   ├── index.js
│   └── styles
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd custom-erp
   ```
3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
4. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

## Usage
1. Start the backend server:
   ```
   cd backend
   node server.js
   ```
2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.