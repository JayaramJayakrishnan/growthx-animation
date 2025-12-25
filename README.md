# Elevate Animation

A responsive, animated logo reveal built with React, Vite, and Motion.

## 🚀 Features

- **Responsive Design**: Scales seamlessly across mobile and desktop devices using viewport units (`vmin`, `vw`).
- **Complex Animations**:
  - Circular path motion.
  - Gradient fill effects.
  - Staggered entrance animations.
  - Border drawing effects.
- **Replay Functionality**: One-click replay mechanism to restart the animation sequence.

## 🛠️ Tech Stack

- **React**: UI library.
- **Vite**: Fast build tool and dev server.
- **Motion (Framer Motion)**: Powerful animation library for React.
- **CSS**: Custom styling with `vmin` units for responsiveness.

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JayaramJayakrishnan/growthx-animation.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd growthx-animation
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## 🏃‍♂️ Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Project Structure

- `src/App.jsx`: Main component containing the animation logic and structure, including the state reset for replay.
- `src/index.css`: Global styles and strict responsive definitions using `vmin` to ensure the geometric shapes maintain their aspect ratio on all screens.
