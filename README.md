# 💰 LoanLink – Microloan Request & Approval Tracker System

**LoanLink** is a full-stack web application that streamlines microloan requests, approvals, and tracking for borrowers, managers, and administrators. The system helps small financial organizations and microloan providers manage applications, verifications, EMI schedules, and repayments in one platform.

---

## 🛠️ Technologies Used

- **Frontend:** React, Tailwind CSS, DaisyUI, React Router, Carousel
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** Firebase (Email/Password & Google Login)  
- **UI & Animations:** React Hot Toast, SweetAlert2
- **Optional / Extras:** Stripe for payment, react-hook-form, JWT for private route protection  

---

## 🎯 Core Features

- **🌐 SPA Layout:** Dynamic navbar & footer, theme toggling (dark/light)  
- **🔒 Authentication:** Login/Register, Google Login, Role-based access (Borrower / Manager / Admin)  
- **💳 Loan Management:** Request, review, approve, reject loans with full CRUD operations  
- **📊 Dashboards:** Admin & Manager dashboards with charts, loan & user management  
- **🏡 Home Page:** Hero banner, available loans carousel, “How It Works”, customer feedback section  
- **📝 Loan Applications:** Auto-filled borrower info, detailed loan forms, EMI plans, status tracking  
- **⚡ Extras:** Search, filter, pagination, responsive design, toast notifications, 404 page  

---

## ⚙️ Dependencies Used

- `react`, `react-router-dom`, `firebase`, `react-hot-toast`, `sweetalert2`  
- `axios`, `swiper`, `framer-motion`, `tailwindcss`, `daisyui`  
- `mongodb`, `express`, `stripe`  
- Optional: `react-hook-form`, `jwt-decode`, `react-confetti`  

---

## 🚀 How to Run Locally

Follow these steps to run **LoanLink** locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Tahmin-Muntaha/LoanLink-client.git

# 2️⃣ Navigate to the project folder
cd LoanLink

# 3️⃣ Install dependencies
npm install
# or using yarn
# yarn

# 4️⃣ Start the backend server
cd server
npm install
npm run dev
# Make sure MongoDB is running and .env variables are set

# 5️⃣ Start the frontend server
cd ../client
npm run dev
# or using yarn dev

Live Link :  https://cute-nasturtium-a6533f.netlify.app/
