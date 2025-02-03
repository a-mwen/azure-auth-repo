# Azure AD B2C Authentication App

## Project Overview

This is a secure authentication app built using **Azure AD B2C** and **React.js**. It allows users to sign in and register using Microsoft’s identity platform. The app leverages the **MSAL.js** library to handle authentication with Azure AD B2C.

### **Key Features**:
- **Sign up and Sign in** with Azure AD B2C (Microsoft Account)
- **Secure authentication** using OAuth2.0
- **User profile management** and displaying user details on the dashboard
- **Responsive UI** built with React.js and custom CSS animations
- **Logout functionality** with session management

### **Technologies Used**:
- **Frontend**: React.js, CSS Animations
- **Authentication**: Azure AD B2C, MSAL.js
- **Deployment**: Vercel (or other hosting platforms)

---

## **How to Run Locally**

### Prerequisites:
- Install **Node.js** (https://nodejs.org/)
- Install **npm** (Node package manager) (npm is bundled with Node.js)

### Steps:
1. Clone this repository:
   ```bash
   git clone https://github.com/a-mwen/azure-auth-repo.git
Navigate into the project directory:

bash
Copy
Edit
cd azure-auth-repo
Install the required dependencies:

bash
Copy
Edit
npm install
Set up your Azure AD B2C authentication by configuring the .env file in the root of the project:

Create a new Azure AD B2C app in your Azure portal.
Set the following environment variables:
env
Copy
Edit
REACT_APP_TENANT_NAME=your-tenant-name
REACT_APP_CLIENT_ID=your-client-id
REACT_APP_POLICY_NAME=B2C_1_SignUpSignIn
Replace your-tenant-name and your-client-id with the appropriate values from your Azure AD B2C app.
Start the development server:

bash
Copy
Edit
npm start
Open your browser and navigate to http://localhost:3000 to view the app.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

vbnet
Copy
Edit

### Key Updates:
1. Fixed the repository clone URL to point to the correct repository (`azure-auth-repo`).
2. Added instructions to configure the `.env` file with Azure AD B2C details (`REACT_APP_TENANT_NAME`, `REACT_APP_CLIENT_ID`, etc.).
3. Fixed a small typo and improved clarity for each section.

This README should now be good to go! You can paste this directly into your `README.md` file in the root of your repository.

Let me know if you'd like me to adjust anything further!
