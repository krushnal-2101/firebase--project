# Firebase Auth React App (Vite)

A simple authentication application built with **React + Vite** and **Firebase Authentication**.
Supports **Email/Password login**, **Google Sign-In**, and **User Registration**, and is deployed on **Vercel**.

---

## 🚀 Live Demo

👉 [https://firebase-project-pi.vercel.app/](https://firebase-project-pi.vercel.app/)

---

## ✨ Features

* 🔐 Firebase Authentication

  * Email & Password Login
  * Google Sign-In
  * New User Sign Up
* ⚡ Vite for fast development
* 🎨 Clean and responsive UI
* 🌐 Deployed on Vercel
* 🔒 Environment variables handled securely

---

## 🛠 Tech Stack

* **Frontend:** React (Vite)
* **Authentication:** Firebase Auth
* **Styling:** CSS
* **Hosting:** Vercel

---

## 📂 Project Structure

```
firebase-project/
│── public/
│── src/
│   ├── assets/
│   ├── auth/
│   │   └── auth.jsx
│   ├── firebase/
│   │   └── config.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── .env
│── index.html
│── package.json
│── vite.config.js
│── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root and add:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTHDOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECTID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ **Never commit your `.env` file to GitHub**

---

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/firebase-project.git
   cd firebase-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

---

## 🔥 Firebase Setup

1. Go to **Firebase Console**
2. Create a new project
3. Enable **Authentication**

   * Email/Password
   * Google Provider
4. Copy Firebase config and add it to `.env`

---

## 🚀 Deployment (Vercel)

1. Push code to GitHub
2. Go to **Vercel Dashboard**
3. Import the GitHub repository
4. Add the same `.env` variables in Vercel → Environment Variables
5. Deploy 🎉

---

## 📸 Screenshots

### Login Page

* Email & Password Login
* Google Sign-In
* New User Registration

---

## 🙌 Future Improvements

* Password reset
* Protected routes
* User profile page
* Toast notifications

---

## 🧑‍💻 Author

**Your Name**
GitHub: [https://github.com/your-username](https://github.com/your-username)

---

## 📜 License

This project is licensed under the MIT License.
