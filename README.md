# Blog Website with CRUD Functionality

A blog website where users can create, read, update, and delete posts. This project is built using Node.js, Express, and MongoDB, providing a full-stack solution for managing blog content.

## Features

- **Create Posts**: Add new blog posts with a title and content.
- **Read Posts**: View all posts in a user-friendly interface.
- **Update Posts**: Edit existing blog posts to keep content up-to-date.
- **Delete Posts**: Remove posts that are no longer needed.
- **RESTful API**: Uses RESTful routes to perform CRUD operations on blog posts.
  
## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** installed or a MongoDB Atlas account

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Bhumi2004/Blog-Website.git
   cd Blog-Website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following content:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

5. **Access the Website**:
   Open your browser and go to `http://localhost:3000` to view the blog website.

### Project Structure

```plaintext
Blog-Website
│
├── controllers       # Contains functions for handling requests
├── models            # Defines Mongoose schemas and models
├── routes            # Contains route definitions for CRUD operations
├── views             # HTML templates for frontend views
├── public            # Static files (CSS, JS, images)
├── app.js            # Main server file
└── .env              # Environment variables
```

## Usage

1. **Create a Post**: Click on the "Create New Post" button, enter the title and content, then submit to add the post.
2. **View Posts**: Browse all posts on the homepage.
3. **Update a Post**: Select a post to edit, update the information, and save the changes.
4. **Delete a Post**: Remove posts using the delete button.

## Learning Outcomes

This project was created as a practice in building a full-stack application with a focus on:

- Setting up CRUD operations with a Node.js backend
- Structuring an Express app for RESTful routing
- Using MongoDB and Mongoose for data persistence
- Implementing server-side and client-side functionality

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please reach out to [Bhumi Jain](https://github.com/Bhumi2004).
```

### Instructions to Add README to GitHub

1. **Save the file as `README.md`** in your project root.
2. **Add and Commit the README**:
   ```bash
   git add README.md
   git commit -m "Add README for Blog Website"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

