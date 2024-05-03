**Flashcard Generator Capstone Project**

---

**Project Overview**

This Flashcard Generator Web Application comprises three primary pages:

1. **Flashcard Creation Page**: Users can create flashcards with a name, description, and optional images. Additionally, they can add individual card names and descriptions using a dynamic form powered by Formik. Flashcards are generated upon clicking the Create button. Formik and Redux Toolkit are utilized for global state management and form validations.

2. **Flashcards Display Page**: This page showcases all user-created cards. Initially, only six cards are visible, but users can view all cards by selecting the "See All" button.

3. **Flashcard Details Page**: Users can access this page by selecting a flashcard on the Flashcards Display Page. Here, they can view all cards associated with that flashcard and choose which cards to display in the central section by utilizing the menu on the left side. The right side of the page features Share, Download, and Print buttons. Clicking the Share button opens a modal for copying the link to share. Users can also share the flashcard on various social media platforms, including Facebook, Instagram, WhatsApp, Twitter, and email, via the bottom-side modal.

**Links:**
- GitHub Repository: [link to your GitHub repository]
- Live Demo: [link to the live demo of your application]

**Installation Guide:**
1. Clone the GitHub repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the application with `npm start`.
5. Access the application via the provided localhost URL.

**Project Structure:**
- `src/`
  - `components/`: Contains reusable React components.
  - `pages/`: Contains main pages of the application.
  - `redux/`: Contains Redux Toolkit setup and slice files for state management.
  - `utils/`: Utility functions and helper files.
  - `App.js`: Entry point of the application.

**Technologies Used:**
- React.js
- Redux Toolkit
- Formik
- HTML
- CSS
- JavaScript

