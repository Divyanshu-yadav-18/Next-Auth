# Next.js Custom Authentication

A custom authentication system built with Next.js 13+ App Router, Drizzle ORM, and PostgreSQL.  
This project demonstrates how to build a fully functional authentication and role-based authorization system from scratch.

---

## 🚀 Tech Stack

- **Next.js 13+** (App Router)
- **React** (with Server Components)
- **TypeScript**
- **Tailwind CSS** (and PostCSS)
- **Drizzle ORM** (with PostgreSQL)
- **Zod** (for schema validation)
- **Custom session management** (with cookies & optional Redis)

---

## 🎯 Features

- **Sign Up & Sign In:** Secure registration and login using hashed passwords and salt.
- **Session Management:** Custom session storage using cookies (optionally Redis for scalability).
- **Role-Based Access:** Supports "admin" and "user" roles, with ability to toggle roles.
- **Protected Routes:** Middleware-based route protection (e.g., `/private`, `/admin`).
- **Full Stack Type Safety:** Uses Zod and TypeScript throughout.
- **Responsive UI:** Built with Tailwind CSS and React components.

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Divyanshu-yadav-18/Next-Auth.git
cd Next-Auth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file based on your database and session setup:

```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

### 4. Run Database Migrations

```bash
npx drizzle-kit generate:pg
npx drizzle-kit migrate:pg
```

### 5. Run the Development Server

```bash
npm run dev
```

---

## 🧑‍💻 Project Structure

```
├── src/
│   ├── app/                  # Next.js app router pages and layouts
│   ├── auth/                 # Auth logic (actions, session, password hashing)
│   ├── drizzle/              # ORM config and schema
│   ├── components/           # UI components
│   ├── middleware.ts         # Route protection
│   └── lib/                  # Utility functions
├── drizzle.config.ts         # Drizzle ORM config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── next.config.ts            # Next.js config
└── README.md
```

---

## ✨ Usage

- **Sign Up:** Register a new account with email, name, and password.
- **Sign In:** Login and receive a secure session cookie.
- **Role Toggle:** Admins can toggle their role between "admin" and "user".
- **Protected Pages:** Access `/private` and `/admin` only when authenticated and authorized.

---

## 🔑 Clerk OAuth Branch

### `clerk_oauth` branch

The `clerk_oauth` branch provides an alternative authentication method using [Clerk](https://clerk.com) for OAuth-based login.  
Key features and implementation in this branch include:

- **OAuth Authentication:** Integrates Clerk for social login (Google, GitHub, etc.).
- **Protected Routes:** Ensures only authenticated users can access certain routes. The latest commit message is "protected routes".
- **Seamless Integration:** Clerk handles session management and user data, simplifying authentication.
- **How to use:** Switch to this branch for OAuth support:
  ```bash
  git checkout clerk_oauth
  ```
- **Note:** This branch is experimental and may differ from custom credential-based flows.

---

## 🤝 Contributing

Pull requests are welcome!  
Feel free to fork and enhance the authentication system.

---

## ⚠️ License

No license specified.  
You may use, modify, or adapt this project freely, but it comes with no warranty or guarantee.

---

## 👤 Author

Built by [Divyanshu Yadav](https://github.com/Divyanshu-yadav-18)  
