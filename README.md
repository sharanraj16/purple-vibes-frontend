

# 💜 Purple Vibes – Share Your World

![Purple Vibes UI](src/assets/amiresponsive.png)


**Purple Vibes** is a full-stack social web application where users can express themselves by sharing stories, images, and experiences. The platform is designed to encourage interaction, creativity, and community-building in a visually engaging and secure environment.

🎉 This project is my **final milestone submission** for the [Code Institute Full-Stack Developer Program](https://codeinstitute.net), built using the **MERN-adjacent stack** (React + Flask + MongoDB). It is a fully responsive, interactive app built with scalability and user engagement in mind.

🔗 **Live Site**: [Purple Vibes App](https://purple-vibes-frontend-c1ac08fd7889.herokuapp.com/)
📂 **Frontend GitHub Repo**: [Frontend Repo](https://github.com/sharanraj16/purple-vibes-frontend)
📂 **Backend GitHub Repo**: [Backend Repo](https://github.com/sharanraj16/purple-vibes-backend)

---

## 🌐 Project Overview

### 📌 What is Purple Vibes?

Purple Vibes allows users to:

* 📸 Share **posts** (text + optional image)
* 👍 React to others’ posts through **likes**
* 💬 **Comment** and engage in discussions
* 👥 **Follow** and connect with users
* 🔍 **Search** posts and users by keywords
* 🧑‍🎨 **Customize** their profiles
* 🛡️ Safely **sign up / log in / log out**

This platform blends **content creation, social interaction, and personalization** in one seamless UX-focused design.

---
## 🖼️ Balsamiq Wireframes

The following wireframes were created in **Balsamiq** to guide the initial layout and functionality of Purple Vibes.

| Home Feed | Upload Detail | Login/Signup | Logout/Signout |

 ![Wireframe 1](src/assets/wireframe1.png)  ![Wireframe 2](src/assets/wireframe2.png)  ![Wireframe 3](src/assets/wireframe3.png)  ![Wireframe 4](src/assets/wireframe4.png) 


## 🎯 Project Objectives

### 👥 **User Objectives**

Users want to:

* Share life moments and personal thoughts
* Discover content and users of similar interests
* Interact meaningfully via comments and reactions
* Control their own digital identity (profile, posts)
* Use the platform across devices (mobile/desktop)

### 👨‍💼 **Site Owner Objectives**

As the developer and site owner, I aim to:

* Deliver a **clean, responsive UI/UX**
* Implement **secure authentication** and role-based access
* **Boost user retention** through interactive features
* Enable **scalability** for future feature rollouts
* Offer **admin control**, logging, and activity tracking (future scope)
---
Tools Used For Agile development
GitHub Projects for tracking sprints and issues

GitHub Issues for writing user stories with clear acceptance criteria

Commits linked to issues for traceability and progress updates

The project board can be found here

Back to Top
---
![Purple Vibes UI](src/assets/5.png)

---
![Purple Vibes UI](src/assets/1.png)

![Purple Vibes UI](src/assets/2.png)

![Purple Vibes UI](src/assets/3.png)

![Purple Vibes UI](src/assets/4.png)

## 🧩 Features Breakdown

### ✅ Core Features (Implemented)

| Feature               | Description                                              |
| --------------------- | -------------------------------------------------------- |
| **User Auth**         | Secure signup/login using Flask-Login and JWT            |
| **Post Creation**     | Users can write and publish posts with optional images   |
| **Feed Display**      | Posts are displayed in reverse chronological order       |
| **Like System**       | Users can like/unlike posts (1 like per user)            |
| **Comment System**    | Add, delete, and view comments under posts               |
| **Follow System**     | Follow/unfollow users and view followed content          |
| **Profile Pages**     | Users can view and update their bio, avatar, and details |
| **Search**            | Search bar to find posts and users using keywords        |
| **Responsive Design** | Fully optimized for mobile, tablet, and desktop          |

### 🚧 Planned Features (Upcoming)

* 🔔 **Notifications** – Real-time alerts for likes, comments, follows
* 📩 **Private Messaging** – Direct chat between users
* 🔐 **Post Privacy Settings** – Choose public/private visibility
* 🏅 **Badges & Leaderboards** – Gamify user engagement
* 🛠️ **Admin Dashboard** – Content moderation and analytics

---

## 🗂️ Code Architecture

```
purple-vibes/
│
├── backend/
│   ├── app.py               # Flask app entry point
│   ├── routes/              # Blueprints: auth, posts, users
│   ├── models.py            # MongoDB data models
│   ├── schemas.py           # Marshmallow schemas for validation
│   ├── config.py            # Configs & env variables
│   └── tests/               # Pytest unit tests
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components (PostCard, NavBar, etc.)
│   │   ├── pages/           # Page-level views (Feed, Profile, Login)
│   │   ├── services/        # Axios API functions
│   │   ├── App.js           # Root component with routing
│   │   └── index.js         # React DOM render entry
│
├── .env                     # Environment variables
├── requirements.txt         # Python dependencies
└── package.json             # NPM dependencies
```

---

## ⚙️ Technologies Used

### 💻 Frontend

* **React.js**
* **React Router**
* **React Bootstrap**
* **Axios**
* **CSS Modules / Custom CSS**

### 🔧 Backend

* **Python 3**
* **Flask**
* **Flask-Login**
* **Flask-CORS**
* **Flask-MongoEngine**
* **JWT Authentication**

### 🗃️ Database

* **MongoDB** (NoSQL)
* **Cloud-hosted via MongoDB Atlas**

### ☁️ Deployment

* **Frontend**: Heroku + React Build
* **Backend**: Heroku Python App
* **Static Assets**: Cloudinary (for media storage)

### 🧪 Testing

* **Pytest** (backend)
* **React Testing Library** (planned)

 more about the testing process, [click here to see the TESTING documentation](TESTING.md).


---

## 🛠️ Installation & Local Setup

### ✅ Prerequisites

* Python 3.8+
* Node.js and npm
* MongoDB (Atlas or Local)
* Git

### 🔧 Backend Setup

```bash
git clone https://github.com/your-username/purple-vibes.git
cd purple-vibes/backend

# Create virtual env
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set up .env file with:
SECRET_KEY='your-secret-key'
MONGO_URI='your-mongodb-uri'

# Run the app
python app.py
```

### 💻 Frontend Setup

```bash
cd ../frontend
npm install

# Start frontend
npm start
```

Visit: `http://localhost:3000`
Backend runs on: `http://localhost:5000`

---

## 🧪 Running Tests

### ✅ Backend Tests

```bash
cd backend
pytest
```

*Tests include:*

* Authentication flow
* CRUD operations
* Model validation

---

## 🗂️ GitHub Project Board

Project tasks, issues, and progress are tracked here:
🗂️ [Purple Vibes Project Board](https://github.com/your-username/purple-vibes/projects/1)

---
# 🚢 Deployment

This section explains the deployment process for both the **Purple Vibes Frontend** and **Backend API**, including pushing code to GitHub, cloning repositories, and deploying the backend to Heroku.

---

## 1. Cloning the Repositories from GitHub

If you want to work locally on the project, start by cloning the repos:

**Clone the frontend repo:**

```bash
git clone https://github.com/sharanraj16/purple-vibes-frontend.git
Clone the backend repo:

bash
Copy
Edit
git clone https://github.com/sharanraj16/purple-vibes-backend.git
2. Pushing Frontend and Backend to GitHub
Step 1: Initialize Git in your project folder (if not already done):

bash
Copy
Edit
git init
Step 2: Stage all changes:

bash
Copy
Edit
git add .
Step 3: Commit your changes:

bash
Copy
Edit
git commit -m "Initial commit for Purple Vibes"
Step 4: Create repositories on GitHub:

Frontend repo: purple-vibes-frontend

Backend repo: purple-vibes-backend

Visit https://github.com/new to create the repos.

Step 5: Link your local projects to GitHub repos
Replace <github-username> accordingly.

Frontend:

bash
Copy
Edit
git remote add origin https://github.com/<github-username>/purple-vibes-frontend.git
git push -u origin main
Backend:

bash
Copy
Edit
git remote add origin https://github.com/<github-username>/purple-vibes-backend.git
git push -u origin main
3. Deploying Backend API to Heroku (Short Version)
Log in to Heroku CLI:

bash
Copy
Edit
heroku login
Create a new Heroku app:

bash
Copy
Edit
heroku create purple-vibes-backend
Add Heroku remote to your backend repo:

bash
Copy
Edit
heroku git:remote -a purple-vibes-backend
Push code to Heroku:

bash
Copy
Edit
git push heroku main
Set environment variables in Heroku dashboard (Settings → Config Vars):

Key	Value
SECRET_KEY	Your Django secret key
DEBUG	False
ALLOWED_HOSTS	purple-vibes-backend.herokuapp.com
CLOUDINARY_URL	Your Cloudinary API URL

Run migrations and collect static files:

bash
Copy
Edit
heroku run python manage.py migrate
heroku run python manage.py collectstatic --noinput
Open your deployed backend:

bash
Copy
Edit
heroku open
Backend URL:
👉 https://purple-vibes-backend.herokuapp.com/

4. Deploying Frontend
Push frontend code to GitHub (already done in Step 2).

Host frontend on platforms like GitHub Pages, Netlify, or Vercel.

Example: Deploy on GitHub Pages

In your frontend repo, create a gh-pages branch with the production build.

Use the following command to create a production build:

bash
Copy
Edit
npm run build
Push the build folder to the gh-pages branch.

Enable GitHub Pages in your repo settings.

For detailed frontend deployment instructions, refer to the Purple Vibes Front-End Repo.

This deployment approach ensures a smooth continuous integration pipeline for both frontend and backend, with the backend securely hosted on Heroku and the frontend available via GitHub Pages or other static hosting platforms.
---


## Improvements and Issue Resolutions

This project has undergone a thorough review and improvement process based on detailed feedback received during the initial assessment. I am pleased to confirm that **all issues previously marked as "No" have been fully addressed and rectified** in the current version of the project. The key enhancements include:

**Removal of Placeholder Content:**  
  All placeholder text has been replaced with dynamic, functional content across the application, including the Post Details page where "Popular profiles" are now correctly displayed.

**Improved Post Editing Experience:**  
  The post editing functionality has been enhanced so that users no longer need to re-upload images if no changes are made. Existing images are preloaded and persist unless explicitly updated by the user.

**Detailed Deployment Instructions:**  
  The deployment documentation now contains comprehensive, step-by-step instructions for setting up, configuring, and deploying both the front-end React application and the back-end Django REST API on Heroku, including repository cloning and environment configuration.

**Design Documentation Added:**  
  Wireframes, mockups, and design rationale have been included in the documentation, outlining the user experience improvements and front-end architecture.

**Custom Backend Models:**  
  While this project currently uses models similar to the course walkthrough, I plan to develop more advanced custom backend models in future projects. For example, implementing a **Tagging system** where posts can be tagged with multiple categories, enabling complex many-to-many relationships and custom queries to improve data organization and API functionality. Due to time constraints and personal circumstances, including expecting my third baby this week, I was unable to introduce these larger changes in this submission.

**Commit Message Quality:**  
  Commit messages are now descriptive and clearly reflect the changes made, improving project history readability.  
  *Please note:* This project was completed during a period of serious personal stress. I lost my grandfather, and my grandmother was hospitalized due to this loss. Because of these circumstances, I had to complete the project in a hurry and was unable to maintain detailed commit messages throughout. I appreciate your understanding.

I am eager to continue developing my skills and look forward to applying these improvements in upcoming projects. I am planning to pursue a career as a data analyst, and receiving this certification is important for progressing with Code Institute’s next course. Thank you for your consideration and understanding.
---
## 👏 Acknowledgments
---
Big thanks to:

* **Code Institute** – Curriculum & community
* **Mentor** – For feedback and direction
* **Jenitha (my wife)** – For endless support
* **Kelly Hutchison** – For encouragement
* **Sylveria Ozioma** – For insights and feedback

---

## 🚀 Final Thoughts

Creating **Purple Vibes** has been an eye-opening, transformative journey. It challenged me to think like a developer, act like a product designer, and test like a QA engineer. I’ve learned not only how to code, but how to build scalable, user-friendly web applications.

> “Great products begin with empathy, grow with effort, and thrive through community.”
> Thank you for visiting Purple Vibes 💜

---


