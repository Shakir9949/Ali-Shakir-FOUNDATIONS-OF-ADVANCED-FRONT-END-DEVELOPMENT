# Ali-Shakir-FOUNDATIONS-OF-ADVANCED-FRONT-END-DEVELOPMENT
# Destiny Archive - React & Next.js Web Application

Welcome to **Destiny Archive**, a React + Next.js web application designed to showcase the **Destiny 1 & 2 storylines**, an interactive **timeline roadmap**, and key highlights from the game’s lore. This project demonstrates foundational front-end development concepts including **components, props, state management, event handling, conditional rendering, and CSS styling**.

---

## 🚀 Application Overview

### Home Page
- Welcome message for Guardians.
- Navigation menu to access:
  - **Destiny Main Page**
  - **Roadmap**
  - **Story Archive**
- Clean, Destiny-themed interface.

### Destiny Main Page (`DestinyMain.jsx`)
- Displays an overview of the Destiny universe.
- **Event Handling**:
  - Toggle highlights button to show or hide key events.
  - Favorite Era selection via dropdown.
- **Conditional Rendering**: Highlights section displays based on toggle state.
- Uses component-level state (`useState`) to manage user interactions.
- Styled with Destiny 2 dark theme, purple accents, and card layouts.

### Destiny Roadmap (`Roadmap.jsx`)
- Interactive timeline from **Destiny 1 Vanilla (2014) to Renegades (2024)**.
- **Event Handling**:
  - Expand/Collapse timeline entries.
  - Filter timeline by era using dropdown.
- **Conditional Rendering**: Shows timeline details only when expanded.
- Styled with dark backgrounds, purple accents, hover effects, and card shadows.

### Destiny Story Archive (`Story.jsx`)
- Displays detailed story arcs for **Destiny 1 & 2**.
- **Event Handling**:
  - Search input dynamically filters story entries.
  - Dropdown allows selecting a specific story to view details.
- **Conditional Rendering**: Displays selected story details.
- Consistent Destiny-themed styling with card layout, hover effects, and responsive design.

### Navigation (`Navbar.jsx`)
- Top navigation bar linking all pages.
- Styled with Destiny 2 black/purple theme.
- Responsive design for desktop and mobile.

---

## 🎨 Styling
- Dark theme with purple (#a78bfa) accent highlights.
- Cards with shadows, rounded corners, and hover effects.
- Consistent typography and spacing for readability.
- Responsive design ensuring usability across devices.

---

## ⚙️ State Management & Event Handling
- Each component manages its **own state** using `useState`.
- Key interactions implemented:
  - **Toggle sections** (show/hide highlights or timeline details)
  - **Dropdown selections** (favorite eras, story selection)
  - **Search input filtering**
- Conditional rendering used throughout to dynamically display content based on user actions.

---

## 📝 Key Concepts Demonstrated
- **Component Creation**: Three main components (`DestinyMain`, `Roadmap`, `Story`) with props.
- **State Management**: Effective use of `useState` for dynamic UI updates.
- **Event Handling**: Buttons, dropdowns, and search input interactions.
- **Conditional Rendering**: Dynamic display of story and timeline details.
- **Styling**: CSS modules with polished, visually appealing UI.

---

## 📷 Screenshots
<img width="1919" height="1039" alt="Pic 1" src="https://github.com/user-attachments/assets/0308fc48-3279-4dab-a2a9-e0e7e071d168" />
<img width="1919" height="1041" alt="Pic 2" src="https://github.com/user-attachments/assets/8962bab1-6d3c-46df-94c7-f9c107316d47" />
<img width="1919" height="1042" alt="Pic 3" src="https://github.com/user-attachments/assets/853b6d14-5b3c-4094-b642-009cf27c0b50" />
<img width="1919" height="1042" alt="Pic 4" src="https://github.com/user-attachments/assets/0f7462f3-9a77-4705-aa96-5f3a40731bea" />


---

## 🔗 Submission Guidelines
- Submit as a **GitHub repository link**.
- Ensure code is **well-documented** with comments explaining key functionality.
- Include screenshots demonstrating **all implemented functionality**.