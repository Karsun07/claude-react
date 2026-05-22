# claude-react

A responsive Claude-inspired AI chat frontend built using React, React Router, and Tailwind CSS.

---

## Features

* Claude-inspired responsive UI
* Sidebar navigation
* Dynamic recent chats
* Conversation-style chat layout
* User messages on the right
* Bot messages on the left
* Dynamic search functionality
* Projects section with modal popup
* Nested routing using React Router
* Dynamic greetings (Good morning / afternoon / evening)
* Shared state management using React hooks
* Fully responsive layout
* Chat switching from sidebar
* Persistent chat state during navigation

---

## Tech Stack

* React 19
* React Router DOM
* Tailwind CSS
* Lucide React Icons

---

## Folder Structure

```bash
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── MainContent.jsx
│   ├── Home.jsx
│   ├── NewChat.jsx
│   ├── Search.jsx
│   ├── Chats.jsx
│   ├── Projects.jsx
│
├── App.js
├── index.js
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Karsun07/claude-react.git
```

### Install Dependencies

```bash
npm install
```

### Install Required Packages

```bash
npm install react-router-dom
npm install lucide-react
```

### Run Project

```bash
npm start
```

---

## Routing Structure

| Route       | Description        |
| ----------- | ------------------ |
| `/`         | Home Page          |
| `/new-chat` | New Chat Screen    |
| `/search`   | Search Chats       |
| `/recents`  | All Chats          |
| `/projects` | Projects Section   |
| `/chat/:id` | Open Specific Chat |

---

## Functionalities Implemented

### 1. Dynamic Chat Creation

* Creates recent chats dynamically
* Stores messages inside each chat object

### 2. Conversation Layout

* User messages aligned right
* Bot messages aligned left

### 3. Search Functionality

* Real-time filtering using `filter()` and `includes()`

### 4. New Chat Reset

* Clears current chat using controlled React state reset

### 5. Recent Chat Switching

* Clicking recent chats loads previous conversation

### 6. Responsive Design

* Mobile-first Tailwind CSS layout
* Sidebar remains fixed on larger screens

---

## React Concepts Used

* useState
* useEffect
* useOutletContext
* Nested Routing
* Dynamic Rendering using map()
* Conditional Rendering
* Shared State Management
* Controlled Components

---

## UI Inspiration

Inspired by Claude AI interface.

---

## Future Improvements

* LocalStorage persistence
* Backend integration
* Real AI API integration
* Authentication
* Mobile sidebar toggle
* Chat deletion
* Project creation persistence

---

## Author

Kartik
