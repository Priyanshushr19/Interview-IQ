# 🚀 Full-Stack Application

A modern, production-ready full-stack application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Firebase**. This project delivers a robust, scalable, and high-performance solution with real-time capabilities, secure authentication, and an intuitive user interface.

## ✨ Key Features

- **🔐 Authentication**: Secure user authentication using Firebase Auth with email/password, Google, and social providers
- **📊 Real-time Data**: Live data synchronization with Firebase Firestore and Realtime Database
- **📈 Interactive Charts**: Beautiful, responsive data visualizations using Recharts and Victory charts
- **📱 Responsive Design**: Fully responsive UI built with Tailwind CSS that works seamlessly across all devices
- **🎨 Modern UI**: Clean, modern interface with Framer Motion animations and React Icons
- **💾 PDF Generation**: Generate and export professional PDF documents with jsPDF
- **📸 Image Processing**: Canvas-based image manipulation and screenshot capabilities
- **🛒 Payment Integration**: Razorpay payment gateway integration for seamless transactions
- **📁 File Upload**: Secure file handling with Multer for uploads
- **🌐 RESTful API**: Well-structured API endpoints with Express.js
- **🗄️ Database**: MongoDB with Mongoose ODM for efficient data modeling
- **🎯 State Management**: Redux Toolkit for predictable state management
- **⚡ Performance**: Vite-powered frontend for lightning-fast development and builds

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Library |
| Vite | Build Tool |
| Redux Toolkit | State Management |
| React Router v6 | Navigation |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Recharts | Charts |
| Firebase | Backend Services |
| Axios | HTTP Client |
| jsPDF | PDF Generation |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Razorpay | Payments |
| Multer | File Uploads |
| Nodemon | Development |


## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Firebase project
- Razorpay account (for payments)

### Installation

1. **Clone the repository**
git clone https://github.com/yourusername/your-repo.git
cd your-repo

cd client
npm install

cd ../server
npm install

# .env Server

PORT=5000

MONGODB_URI=mongodb://localhost:27017/yourdb

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_key_id

RAZORPAY_KEY_SECRET=your_key_secret

# .env client

VITE_FIREBASE_API_KEY=your_api_key 

VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain 

VITE_FIREBASE_PROJECT_ID=your_project_id

VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket

VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

VITE_FIREBASE_APP_ID=your_app_id

cd server
npm run dev

cd client
npm run dev
