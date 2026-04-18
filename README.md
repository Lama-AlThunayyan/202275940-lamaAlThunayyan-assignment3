# 202275940-lamaAlThunayyan-assignment3  
# Assignment 3 – Advanced Portfolio Web Application  

**Student Name:** Lama Al Thunayyan  
**Student ID:** 202275940  
**Course:** SWE 363 (Web Engineering & Development) 

---

## Project Overview  

This project is an advanced version of a personal portfolio web application developed across Assignments 1 and 2.  

The goal is to build a **feature-rich, interactive web application** that demonstrates API integration, advanced logic, and improved user experience.

---

## Project Description  

This project is an advanced version of the personal portfolio website developed in Assignments 1 and 2.  

It focuses on extending the application by adding **API integration, more complex logic, state management, and enhanced user interaction** using JavaScript and modern front-end techniques.

The website includes:

- About Me section  
- Projects section with filtering and sorting functionality  
- GitHub repositories section (fetched dynamically using an external API)  
- Contact form with validation and user feedback  
- Dark/Light theme toggle (using localStorage)  
- Responsive design for multiple devices  
- Interactive UI elements and smooth animations  

This assignment builds on the previous foundation by transforming the website from a simple interactive portfolio into a **more dynamic and feature-rich web application**, demonstrating the ability to handle real-world functionality such as external data integration and multi-step application logic.

---

## Key New Features  

### 🔹 API Integration
- Fetches GitHub repositories dynamically  
- Displays repository details  
- Handles loading and error states  

### 🔹 Advanced Logic
- Project filtering (All / App / Web)  
- Project sorting (A-Z / Z-A)  
- Combined filtering and sorting logic  

### 🔹 State Management
- Saves theme, filter, and sort using localStorage  
- Restores preferences on reload  

### 🔹 User Feedback
- Form validation messages  
- Success/error feedback  
- Empty state messages  

### 🔹 Performance Optimization
- Lazy loading images  
- Efficient JavaScript  

---

## How to Run Locally
1. Clone or download the repository
2. Open index.html in your browser
3. Ensure internet connection for GitHub API

## AI Usage Summary
AI tools were used as a supporting assistant to:

- Plan advanced features
- Implement API integration
- Improve JavaScript logic (filtering & sorting)
- Enhance UI/UX and animations
- Assist in writing documentation

All AI-generated code was reviewed, modified, and fully understood before being used.

More details are available in docs/ai-usage-report.md.

---

## Folder Structure

```bash
assignment-3/
├── assets/
│   └── images/
│       ├── profile-icon-design-free-vector.jpg 
│       ├── project1.jpg
│       └── project2.jpg
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore 
├── index.html
└── README.md