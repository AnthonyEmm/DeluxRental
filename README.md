# DeluxRental - Luxury Car Rental Service Project

Welcome to the &copy;DeluxRental project! This is a luxury car rental service application. Below you will find the documentation to help you get started with setting up the project.

## Table of Contents

- [DeluxRental - Luxury Car Rental Project](#deluxrental---luxury-car-rental-project)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Dependencies](#dependencies)
  - [Project Structure](#project-structure)
  - [License](#license)

## Project Overview

&copy;DeluxRental is a web application designed to provide a seamless experience for renting luxury cars. The project uses modern web technologies such as React + Vite and TailwindCSS for a fast and efficient development experience.

## Features

- Browse luxury cars available for rent
- Detailed car information pages
- User-friendly booking process
- Animated page transitions
- Notifications for user interactions
- Contact form with email integration

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone `[https://github.com/AnthonyEmm/DeluxRental.git]`
   cd DeluxRental
   ```
2. Install the dependencies:

   ```sh
   npm install
   ```

3. Install Tailwind CSS and its dependencies:

```sh
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```

4. Configure Tailwind CSS:

Update the `tailwind.config.js` file to include the paths to all of your template files:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3AA6B9",
        dark: "#0C0C0C",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
```

5. Include Tailwind in your CSS:

Create a CSS file `src/index.css` and add the Tailwind directives:

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .button-outline {
    @apply rounded-full
        border-2 border-primary
        hover:bg-primary/80 font-semibold
        hover:text-black duration-500 
        py-2 px-6 text-primary tracking-wider;
  }
}
```

6. Import the CSS in your application:

Import the `index.css` file in your main JavaScript/JSX file `src/main.jsx`

```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Import Tailwind CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
```

## Running the Project

To run the project in development mode:

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173/` to see the application in action.

## Dependencies

DeluxRental uses the following dependencies:

- `@emailjs/browser`: For sending EmailJS emails from the browser.
- `aos`: Animate on scroll library for scroll animations.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-icons`: Icons library for React
- `react-router-dom`: Declarative routing for React.
- `react-router-hash-link`: Hash link functionality for React Router.
- `react-toastify`: Notifications library for React.
- `tailwindcss`: Utility-first CSS framework.

The versions of these dependencies are specified in the `package.json` file.

## Create an environment variable file

In the project root and add your API key from EmailJS:

```
VITE_KEY_SERVICE_ID="service_key"
VITE_KEY_TEMPLATE_ID="template_id"
VITE_KEY_USER_ID="Public_key"
```

## Project Structure

The project structure is organized as follows:

```arduino
DeluxRental/
├── node_modules
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── .eslintrc.cjs
├── .package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── vite.config.js
```

- public/: Contains static files such as the HTML template.
- src/: Contains the source code for the application.
  - assets/: Contains images.
  - components/: Contains reusable React components.
  - App.jsx: The root component of the application.
  - main.jsx: The entry point of the application.
  - .env: The environment variable for the application (visit [emailjs]: `https://www.emailjs.com/pricing/` to register and configure). You may follow the guide here by Chaoo Charles: `https://www.youtube.com/watch?v=bMq2riFCF90`
- .gitignore: Specifies which files and directories to ignore in the repository.
- package.json: Lists the project dependencies and scripts.
- postcss.config.js: Configuration file for PostCSS.
- tailwind.config.js: Configuration file for Tailwind CSS.
- README.md: The documentation file you are currently reading.
- vite.config.js: Configuration file for Vite.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
