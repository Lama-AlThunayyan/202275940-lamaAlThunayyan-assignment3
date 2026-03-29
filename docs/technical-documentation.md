# Technical Documentation

## 1. Project Overview

This project is an enhanced single-page portfolio website developed using HTML, CSS, and JavaScript.  

It builds upon Assignment 1 by adding **interactive features, dynamic content, and improved user experience**.

The website presents the student's information and two projects:
- Folder Visualizer
- Weekly Schedule Distance Visualizer

New functionality includes project filtering, form validation, and UI animations.

---

## 2. File Responsibilities

### index.html
Contains:
- Navigation bar
- About section
- Projects section with filtering buttons
- Contact section with form validation elements
- Footer

---

### css/styles.css
Responsible for:
- Layout design
- Color themes (light/dark mode)
- Typography
- Card styling
- Responsive behavior
- Animation and transition effects
- Filter button styling
- Form validation styles (error/success states)

---

### js/script.js
Implements:

1. **Theme Toggle**
   - Adds/removes `dark` class on `<body>`
   - Stores user preference using `localStorage`

2. **Mobile Menu Toggle**
   - Opens/closes navigation menu on small screens

3. **Project Filtering (Dynamic Feature)**
   - Filters projects based on selected category (All / App / Web)
   - Dynamically shows or hides project cards

4. **Contact Form Validation (Data Handling)**
   - Validates user input (name, email, message)
   - Displays error messages for invalid input
   - Displays success message for valid submission

5. **User Feedback System**
   - Provides real-time feedback messages
   - Highlights input fields (error/success states)

6. **Dynamic Footer Year**
   - Automatically updates the copyright year

---

## 3. Responsive Design Strategy

- CSS Grid used for project cards layout
- Grid switches from 2 columns (desktop) to 1 column (mobile)
- Navigation converts to collapsible menu on smaller screens
- Layout adapts for mobile, tablet, and desktop devices

---

## 4. Interactivity & Dynamic Features

The following interactive features were added in Assignment 2:

- Project filtering using JavaScript
- Theme toggle using localStorage
- Form validation and dynamic feedback messages
- Smooth UI transitions and hover effects

These features improve usability and create a more dynamic user experience.

---

## 5. Performance Considerations

- No external frameworks used
- Lightweight CSS and JavaScript
- Efficient DOM manipulation
- Minimal re-rendering for filtering functionality

---

## 6. Browser Compatibility

Tested on:
- Google Chrome
- Microsoft Edge

The website works consistently across modern browsers.

---

## 7. Summary of Improvements from Assignment 1

Compared to Assignment 1, the following improvements were added:

- Dynamic project filtering
- Enhanced form validation with feedback
- UI animations and transitions
- Improved user interaction and usability

These additions demonstrate progress in JavaScript usage and front-end development skills.
