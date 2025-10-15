
# Mughlai Bites 🍢

**Mughlai Bites** is a **food delivery web application** focused on **Mughlai cuisine** — Kebabs, Korma, Nihari, Tandoori dishes.  
Built as a **college project**, it demonstrates a **fully functional frontend** with **Next.js**, **shadcn/ui**, **Tailwind CSS**, and **state management**.  

This app includes a **working cart, checkout flow, and admin dashboard**

---

## 🎯 Features

### User Features
- Browse Mughlai dishes by category: Kebabs, Korma, Nihari, Tandoori.  
- View detailed dish information: image, price, rating, spice level, description.  
- Add dishes to cart, update quantity, remove items.  
- Apply mock coupon codes (e.g., `MUGHLAI10`).  
- Mock checkout page **cloned from Razorpay UI**.  
- Order success page with confetti animation and mock order ID.  
- Login/logout functionality (mock, using localStorage).  

### Admin Features
- Admin login (default: `admin/admin`).  
- Dashboard with analytics (total dishes, total orders, mock revenue, popular dish).  
- Manage menu items (Add/Edit/Delete) via modal dialogs.  
- Manage mock orders and update their status.  
- Protected admin routes (role-based access).  

### UI/UX Enhancements
- Built with **Next.js 14 App Router**, **Tailwind CSS**, and **shadcn/ui components**.  
- Mughlai theme: Gold + Maroon + Charcoal.  
- Animated transitions using **Framer Motion**.  
- Dark/Light mode toggle stored in localStorage.  
- Skeleton loaders for dish cards and tables.  

### Mock Data
- All data (users, dishes, orders) stored in **mock JSON files**.  
- Local state management via **React Context** or **Zustand**.  
- No MongoDB or backend required.  

---

## 📦 Project Structure

```

mughlai-bites/
│
├── app/                   # Next.js pages (App Router)
│   ├── menu/
│   ├── cart/
│   ├── checkout/
│   ├── success/
│   ├── login/
│   ├── profile/
│   └── admin/dashboard/
├── components/            # Reusable UI components (shadcn/ui)
├── context/               # React Context / Zustand for state management
├── data/                  # Mock JSON data (foods, users, orders)
├── public/                # Images and static assets
├── styles/                # Tailwind CSS and global styles
├── lib/                   # Utility functions
└── package.json

````

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mughlai-bites.git
cd mughlai-bites
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

---

## 🔐 Default Login Credentials

| Role  | Username | Password |
| ----- | -------- | -------- |
| Admin | admin    | admin    |
| User  | user     | user     |

> Admin access allows full dashboard functionality: menu CRUD, mock orders, analytics.

---

## 💻 Technologies Used

* **Next.js 14** (App Router)
* **Tailwind CSS**
* **shadcn/ui** (Buttons, Cards, Modals, Tables, etc.)
* **Framer Motion** (Animations)
* **React Context / Zustand** (State management)
* **Lucide Icons**
* **LocalStorage** for persisting cart, auth, and dark mode

---


---

## ⚡ Notes

* This is a **mock project for demonstration purposes**.
* No real payments, database, or real-time order tracking.
* All data is stored in **mock JSON files** and localStorage.

---

## 📝 License

This project is for educational purposes and **MIT Licensed**.

