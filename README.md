# To-Do Task Management Web App

A production-ready task management web application built with **React.js** and **Firebase**, focused on secure authentication, clean UX, and scalable data management.  
Designed to demonstrate real-world frontend development practices, API integration, and cloud-based persistence.

Live Site Demo: [**https://todoapp-kohl-one.vercel.app/**](https://todoapp-kohl-one.vercel.app/) 
---

## Why This Project Matters

This project showcases the ability to:

- Build a complete **CRUD-based** web application  
- Implement secure authentication using **OAuth**  
- Manage real-time data persistence with **Firestore**  
- Design a clean, accessible UI with modern tools  
- Handle third-party APIs and CORS limitations  
- Follow professional **Git workflows**

---

## Key Features

### Authentication
- Firebase OAuth for secure user login  
- User-specific task data isolation  

### Task Management (CRUD)
- Create, edit, delete, and update tasks  
- Clear visual indicators for task status  

### Filtering & Search
- Filter tasks by completion status  
- Keyword-based task search  

### External API Integration
- Fetches random inspirational quotes  
- New quote generated on user interaction  

### UI & UX
- Tailwind CSS for a modern, consistent design  
- Sidebar-based task filtering  
- Modal-driven forms for better usability  

### Responsive Design
- Optimized for smaller screens on **Home** and **Login** pages  
- Adaptive layout foundation for all screen sizes  

---

## Tech Stack

| Category        | Technology              |
|-----------------|-------------------------|
| Frontend        | React.js                |
| Styling         | Tailwind CSS            |
| Authentication  | Firebase OAuth          |
| Database        | Firebase Firestore      |
| APIs            | External Quotes API     |
| Tooling         | Git, GitHub             |

---

## Security & Best Practices

- Environment variables managed via `.env.local`  
- API keys excluded from source control  
- OAuth authentication for secure access  
- Firestore rules applied for data protection  

---

## Getting Started

### Prerequisites
- Node.js (v18+)  
- npm  

### Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### Environment Setup

Create a .env.local file in the root directory:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Run the App

```bash
npm run dev
```
---

## Future Improvements

- Full responsive support for all pages
- Task categories and color customization
- Improved accessibility (ARIA, keyboard navigation)

---

## Developers

- [**Dominique**](https://github.com/monic421)  
- [**Cintya**](https://github.com/SoftDevCLF)  
- [**Anna**](https://github.com/isayabs) 
- [**Temi**](https://github.com/temsters) 

---

## License

This project was built for educational and portfolio purposes.

---

> _✨ Built with curiosity, coffee, and a lot of console.logs._
