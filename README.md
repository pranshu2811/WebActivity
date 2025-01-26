# Web Activity Project

This project is a simple multi-page web application featuring the following:

## Pages
1. **Login Page (`index.html`)**
   - Allows users to log in with a name and password.
   - Redirects to the User Information Page upon successful login.

2. **User Information Page (`form.html`)**
   - Collects user details such as:
     - Full Name
     - Phone Number
     - Email Address
     - Birth Date
   - Saves the data to `localStorage`.

3. **Profile Page (`profile.html`)**
   - Displays the user's submitted details retrieved from `localStorage`.

## Features
- **Password Validation**: Ensures required fields are filled in on the login page.
- **Data Storage**: Uses `localStorage` to save and display user data across pages.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Simple Navigation**: Automatically redirects between pages based on user interaction.

## File Structure
/docs ├── index.html # Login Page ├── form.html # User Information Page ├── profile.html # Profile Page ├── style.css # Styling for all pages ├── script.js # Handles form submissions and data storage



## How to Access
Visit the live site here: [Web Activity Live Site](https://pranshu2811.github.io/WebActivity/)

## Usage Instructions
1. **Start on the Login Page**:
   - Enter your name and password to proceed.
2. **Fill Out the User Information Form**:
   - Provide your details and submit the form.
3. **View Your Profile**:
   - See the submitted information displayed on the Profile Page.

## Technologies Used
- **HTML5**: For structuring the web pages.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For interactivity, form handling, and localStorage.

---
