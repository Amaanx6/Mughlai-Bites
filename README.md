# Mughlai Bites 🍢

**Mughlai Bites** is a **mock food delivery web application** focused on traditional Mughlai cuisine, including Kebabs, Korma, Nihari, and Tandoori dishes.
This project demonstrates **modern web development practices** using **Next.js, Tailwind CSS, Shadcn UI**, and **mock state management**, suitable for a college project.

---

## **Table of Contents**

1. [Introduction](#introduction)
2. [Objectives & Outcomes](#objectives--outcomes)
3. [Project Specification & Tools Used](#project-specification--tools-used)
4. [Features](#features)
5. [Project Architecture & Flow](#project-architecture--flow)
6. [Algorithms Used](#algorithms-used)
7. [Output](#output)
8. [Problems / Challenges & Solutions](#problems--challenges--solutions)
9. [Further Enhancements](#further-enhancements)
10. [References](#references)
11. [Installation & Running](#installation--running)

---

## **Introduction**

Mughlai Bites is a **mock food delivery application** built to simulate a complete online ordering workflow for Mughlai cuisine. It allows users to **browse dishes, add to cart, apply mock coupons, and complete a simulated checkout process**, while admins can **manage dishes and view analytics**.

The application is built using **Next.js**, with **mock data in JSON/localStorage**, and a fully **responsive Mughlai-themed UI** using **Tailwind CSS** and **Shadcn UI components**.

---

## **Objectives & Outcomes**

**Objectives:**

* Demonstrate a **functional food delivery system** using modern web technologies.
* Implement **mock authentication and role-based access** (User/Admin).
* Develop an **interactive, responsive UI** for browsing, ordering, and managing dishes.
* Showcase **state management, component reusability, and UI/UX enhancements**.

**Outcomes:**

* Fully functional **mock food ordering app** with realistic UI interactions.
* Admin dashboard with **CRUD operations** and analytics charts.
* Complete **Next.js project structure** demonstrating modern web practices.
* Clean, visually appealing **Mughlai-themed interface**.

---

## **Project Specification & Tools Used**

**Specification:**

* Mock food delivery app for **Mughlai cuisine**.
* Uses **mock data** instead of real backend.
* Two roles: **User** and **Admin**, each with role-specific features.
* Fully responsive and interactive using modern UI/UX practices.

**Tools & Technologies:**

| Category           | Technology / Tool       | Purpose                                      |
| ------------------ | ----------------------- | -------------------------------------------- |
| Frontend Framework | Next.js 14              | Page routing and component-based UI          |
| Styling            | Tailwind CSS            | Responsive design                            |
| UI Components      | Shadcn UI               | Prebuilt UI elements                         |
| State Management   | React Context / Zustand | Global state (cart, auth, orders)            |
| Animations         | Framer Motion           | Smooth page transitions & micro-interactions |
| Charts             | Recharts / Chart.js     | Analytics visualization                      |
| Storage            | localStorage            | Persist mock data (cart, orders)             |
| Icons              | Lucide Icons            | Consistent iconography                       |
| Dev Tools          | VS Code, Git, GitHub    | Coding & version control                     |

**Expected Output:**

* Fully functional **mock food delivery app**.
* **Responsive UI** with Mughlai theme.
* **Cart, checkout, and success pages** functioning with mock logic.
* **Admin dashboard** for dish management and analytics.

---

## **Features**

**User Features:**

* Browse **Mughlai dishes** with images, prices, and categories.
* **Add to cart**, modify quantities, and apply mock coupons.
* Simulated **Razorpay-style checkout** and success confirmation.
* **Profile page** with mock order history.
* Dark/Light mode toggle and toast notifications.

**Admin Features:**

* Login with default credentials (**admin/admin**).
* **CRUD operations** for menu items.
* View mock orders and update order status.
* Visual **analytics charts** for orders, revenue, and popular dishes.

**UI/UX Enhancements:**

* Mughlai-themed color palette (gold, maroon, black).
* Framer Motion animations for page transitions and modals.
* Hover effects, micro-interactions, and skeleton loaders.
* Responsive design across devices.

---

## **Project Architecture & Flow**

**Folder Structure Overview:**

```plaintext
Mughlai-Bites/
├── app/           # Pages: home, menu, cart, checkout, admin, profile
├── components/    # Shadcn UI components & admin UI
├── context/       # Zustand/Context for cart, auth, orders
├── data/          # Mock data (foods.json, users.json)
├── hooks/         # Custom React hooks
├── lib/           # Utilities
└── node_modules/
```

**Flow Overview:**

* **User Flow:** Home → Menu → Dish Details → Cart → Checkout → Success → Profile.
* **Admin Flow:** Login → Dashboard → Manage Dishes → View Orders → Analytics → Logout.

---

## **Algorithms Used**

**User Module:**

1. Start application → Display Home page.
2. Browse Menu → Select dish → Add to Cart.
3. Update cart → Proceed to Checkout.
4. Mock payment → Display Success Page → Store order in localStorage.

**Admin Module:**

1. Login (admin/admin) → Dashboard.
2. Manage dishes (Add/Edit/Delete).
3. View mock orders & analytics charts.
4. Logout.

---

## **Project Code Highlights**

**Cart Store Example:**

```typescript
import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  addItem: (dish) => set((state) => ({ items: [...state.items, dish] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
  clearCart: () => set({ items: [] }),
}));
```

**Mock Login Example:**

```typescript
export function login(username, password){
  if(username==="admin" && password==="admin"){
    localStorage.setItem("role","admin"); return true;
  } 
  return false;
}
```

**Dish Card Component Example:**

```tsx
<Card>
  <img src={dish.image} alt={dish.name}/>
  <h3>{dish.name}</h3>
  <p>₹{dish.price}</p>
  <Button onClick={()=>addItem(dish)}>Add to Cart</Button>
</Card>
```

---

## **Output**

* **Home Page:** Featured dishes, categories, navigation.
* **Menu Page:** All dishes with price and image.
* **Dish Details:** Ingredient info + Add to Cart.
* **Cart Page:** Update items, mock coupons, total price.
* **Checkout:** Razorpay-style mock payment page.
* **Success Page:** Order confirmation.
* **Profile:** Mock order history.
* **Admin Dashboard:** CRUD operations and analytics charts.

*(Screenshots can be added here for better demonstration.)*

---

## **Problems / Challenges & Solutions**

* **State Management:** Solved using Zustand / Context + localStorage.
* **Mock Authentication:** Default credentials (admin/admin), conditional rendering.
* **Checkout Flow:** Simulated payment UI and order success page.
* **Responsive UI:** Tailwind CSS + Shadcn UI + Framer Motion animations.
* **Admin Analytics:** Used mock JSON data and Recharts for visualization.

---

## **Further Enhancements**

* Connect to **real backend** (MongoDB/SQL).
* Integrate **real payment gateways**.
* Add **real-time order tracking**.
* Implement **recommendation engine** and wishlist.
* Enhance **admin dashboard** with detailed analytics.
* Multi-language support and advanced search/filter options.
* Develop **mobile app / PWA version**.

---

## **References**

1. [Next.js Documentation](https://nextjs.org/docs)
2. [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. [Shadcn UI](https://ui.shadcn.com)
4. [Zustand Documentation](https://zustand-demo.pmnd.rs)
5. [Framer Motion](https://www.framer.com/motion/)
6. [Chart.js](https://www.chartjs.org/docs/latest/)
7. [Recharts](https://recharts.org/en-US/)
8. [MDN Web Docs](https://developer.mozilla.org/)
9. [GitHub](https://github.com/)
10. [Razorpay Docs](https://razorpay.com/docs/)

---

## **Installation & Running**

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Mughlai-Bites.git
```

2. Navigate to project folder:

```bash
cd Mughlai-Bites
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

* **Admin Login:** `admin / admin`
* Mock data is stored in **localStorage**; no database is required.

