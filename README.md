# Scribblr | Blogging Platform

[Live Link](https://scribblr-six.vercel.app/)

## Introduction
Scribblr is a full-featured blogging platform designed to give users a simple, intuitive space to write and share blogs. The platform includes text editing, image uploads, and rich text formatting features to make content creation easy and efficient.

## Tech Stack
- Frontend: React, Redux Toolkit, Tailwind CSS
- Backend: Appwrite
- Editor: TinyMCE
- Other Tools: Multer for file uploads
  
## Features
- User Authentication: Users can sign up and log in securely to write and manage their blogs.
- Blog Creation and Editing: Rich text editor powered by TinyMCE for advanced formatting and content creation.
- File Uploads: Multer and Appwrite allow users to upload and attach images to their blogs.
- Responsive Design: Built with Tailwind CSS for a responsive and clean UI on both desktop and mobile devices.
- State Management: Redux Toolkit is used to handle complex state logic across the application.

## Installation and Setup
- Clone the repository:
```bash
git clone https://github.com/eclairjit/scribblr.git
```

- Navigate to the project folder:
```bash
cd scribblr
```

- Install dependencies for the frontend:
```bash
npm install
```

- Set up environment variables:  
  - Create a .env file in the root directory.
  - Add the following:
```env
APPWRITE_ENDPOINT=<Your Appwrite endpoint>
APPWRITE_PROJECT_ID=<Your Appwrite project ID>
APPWRITE_BUCKET_ID=<Your Appwrite bucket ID>
```
- Run the application:
```bash
npm run dev
```

## Usage
- Create an account to start writing your blogs.
- Use the rich text editor to format your posts and include images or links.
- Manage your blogs through the dashboard and edit or delete posts as needed.

## Contributing
If you'd like to improve Scribblr, contributions are welcome! Submit a pull request or open an issue.
