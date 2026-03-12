# MERN Image Upload Application

## Project Overview

This project demonstrates an **Image Upload Feature** built using the MERN stack.
The application allows users to select an image, preview it before uploading, and upload it to the server using a backend API.

Uploaded images are stored on the server and displayed on the frontend after a successful upload.

## Technologies Used

* React (Vite) – Frontend user interface
* Node.js – Backend runtime environment
* Express.js – Backend web framework
* Multer – Middleware for handling file uploads
* Axios – HTTP client for sending requests
* Tailwind CSS – UI styling

## Features

* Select an image from the local system
* Preview the image before uploading
* Upload image using API endpoint
* Store images in server uploads folder
* Display uploaded image on the frontend
* Responsive user interface using Tailwind CSS

## Project Structure

```
mern-image-upload
│
├── backend
│   ├── routes
│   │   └── upload.js
│   ├── uploads
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    │   └── App.jsx
    └── package.json
```

## Installation and Setup

### 1. Clone the Repository

```
git clone <repository-url>
```

### 2. Backend Setup

Navigate to backend folder:

```
cd backend
npm install
```

Run the backend server:

```
node server.js
```

The backend server will start at:

```
http://localhost:3400
```

### 3. Frontend Setup

Navigate to frontend folder:

```
cd frontend
npm install
```

Start the frontend development server:

```
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

## API Endpoint

### Upload Image

```
POST /api/upload
```

**Request Type:** multipart/form-data

**Field Name:**

```
image
```

**Response Example:**

```
{
  "message": "Image uploaded successfully",
  "imageUrl": "http://localhost:3400/uploads/filename.jpg"
}
```

## How the Application Works

1. User selects an image from the file input.
2. React generates a preview of the image.
3. When the user clicks upload, the image is sent to the backend using Axios and FormData.
4. Multer processes the file and saves it in the uploads folder.
5. The server returns the image URL.
6. React displays the uploaded image on the page.

## Output

The application allows users to preview and upload images, and the uploaded image is displayed after successful upload.

## Conclusion

This project demonstrates how to implement a file upload feature in a MERN stack application using Multer and React. It includes frontend integration, image preview functionality, and server-side image storage.