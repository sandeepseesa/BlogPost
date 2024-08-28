# BlogPost

A blog application built with Express.js, Node.js, and MongoDB using the MVC architecture. This application supports user authentication, allowing users to register, log in, and create blog posts. Posts are dynamically updated on the page, including the author's name and date.

## Features

- User registration and login with password encryption using bcrypt
- Authenticated users can create posts with a WYSIWYG editor and image upload
- Dynamic updates to posts with author name and date displayed
- Public view of posts for non-logged-in users

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB instance

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/BlogPost.git
   cd BlogPost
   
2. **Install dependencies:**

   ```bash
   npm install
   
3. **Configure your MongoDB database:**
 
   Replace process.env.MONGO_URI in index.js with your MongoDB connection string, or create a .env file in the root folder with the following content:
   ```env
   MONGO_URI=your_database_uri

4. **Start the server:**

   ```bash
   npm start
   
The server will be running at http://localhost:4000.

## Usage

- **Register and Log In:** Users must register and log in to create posts. Passwords are hashed and stored securely using bcrypt.

- **Create Posts:** Authenticated users can create posts with the following:
  - **Title:** Enter a title for the post.
  - **Body:** Use the WYSIWYG editor to format the body of the post.
  - **Image:** Upload an image to accompany the post.

- **View Posts:** All users, including those not logged in, can view posts. Each post displays:
  - **Author Name:** The name of the user who created the post.
  - **Date:** The date and day when the post was created.

- **Dynamic Updates:** Posts are dynamically updated on the page to reflect the latest entries without needing to refresh the browser.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

### Credits

This project uses an HTML and CSS template provided by [start bootstrap](https://startbootstrap.com/theme/clean-blog). The original template was designed for static websites, and I have extended it by making it a dynamic and full-stack website using **Express.js**, **Node.js**, and **MongoDB**.

- **Original Template**: [Start Bootstrap](https://startbootstrap.com/theme/clean-blog)
- **Customizations**:
  - **Express.js**: Added for handling backend routing.
  - **Node.js**: Powers the server-side logic for scalability and efficiency.
  - **MongoDB**: Integrated to manage and store dynamic data.

Thank you to [Start BootStrap](https://startbootstrap.com/) for providing the foundational design that made this project possible.

---

Happy Blogging!🚀
