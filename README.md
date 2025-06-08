# 🏡 Neighbourly – Real Estate Frontend (Next.js)

**Neighbourly** is a responsive, mobile-first frontend application for a real estate SaaS platform built using **Next.js**, **Tailwind CSS**, and **shadcn/ui**. It enables users to explore properties for rent, buy, or sale, with clean UI and accessibility-first components. This app communicates with the NestJS-based backend via REST APIs.

---

## 🚀 Features

- 🔍 Browse and view property listings
- ❤️ Wishlist your favorite listings
- 📱 Fully responsive and mobile-first design
- ⚙️ Component-driven architecture (Atomic Design)
- 🌐 API integration with backend
- 🧠 Accessible UI using shadcn/ui and Tailwind
- 🧪 Tested with Jest and React Testing Library

---

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## ⚙️ Getting Started

### 🔨 Installation

```bash
git clone https://github.com/nikitapoyarekar05/nexus-fe.git
cd nexus-fe
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root:

```env
NEXT_PUBLIC_API_URL=ADD_YOUR_NEXT_PUBLIC_API_URL
NEXT_PUBLIC_STRAPI_API_URL=ADD_YOUR_PUBLIC_STRAPI_API_URL
```

> Replace with your production - BACKEND and STRAPI API URL if deployed.

---

## 📦 Running the App

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# With coverage
npm test -- --coverage
```

> Using Jest and React Testing Library

---

## 🎨 Design Principles

- **📱 Mobile First Design**: Layouts and components are optimized for smaller screens before scaling up.
- **♿ Accessibility First**: Built using accessible components from [shadcn/ui](https://ui.shadcn.com/) and Tailwind’s accessibility-friendly classes.
- **🧩 Component-Driven Architecture**: Follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) for scalable UI development.

---

## 🌍 Deployment

Deployed on [Vercel](https://vercel.com/)  
You can deploy by connecting this GitHub repo and setting the environment variable `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_STRAPI_API_URL`.

---

## 🙋‍♀️ Maintainer

Built with ❤️ by [@nikitapoyarekar05](https://github.com/nikitapoyarekar05)
