# GateCraft - Interactive Digital Logic Simulator

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8)
![Gemini API](https://img.shields.io/badge/AI-Gemini_2.5-8e75f7)

**GateCraft** is a modern, interactive educational tool designed to help students and hobbyists understand the fundamentals of digital logic and boolean algebra. 

Built with **React 19** and styled with **Tailwind CSS**, the application features a high-contrast "Cyberpunk" aesthetic (Black & Purple) to provide an immersive learning environment. It integrates the **Google Gemini 2.5 Flash API** to provide real-time, analogy-based explanations of logic concepts.

## 🚀 Features

### ⚡ Interactive Simulation
*   **7 Core Logic Gates:** Experiment with AND, OR, NOT, NAND, NOR, XOR, and XNOR gates.
*   **Real-time State Changes:** Toggle input switches and instantly see how the output reacts based on the selected gate's logic.
*   **Dynamic Circuit Diagrams:** SVG-based circuit visualizations that animate signal flow when active.

### 🧠 AI-Powered Learning
*   **"Ask Gemini":** Integrated directly with Google's GenAI SDK. Users can request simple, fun, and analogy-based explanations for any selected gate with a single click.

### 📊 Visualizers
*   **Live Truth Tables:** The truth table updates dynamically, highlighting the active row that corresponds to the current input state.
*   **Responsive Design:** Fully responsive layout that works seamlessly on desktop, tablets, and mobile devices.

## 🛠️ Technology Stack

*   **Frontend Framework:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Artificial Intelligence:** [Google GenAI SDK](https://www.npmjs.com/package/@google/genai) (Gemini 2.5 Flash)
*   **Icons:** SVG (Custom & Heroicons/Simple Icons concepts)

## 📦 Installation & Setup

To run GateCraft locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/gatecraft.git
    cd gatecraft
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your Google Gemini API Key:
    ```env
    API_KEY=your_google_genai_api_key_here
    ```
    > **Note:** The application relies on `process.env.API_KEY` to authenticate with Google's AI Studio.

4.  **Start the development server**
    ```bash
    npm start
    ```

## 🎮 Usage guide

1.  **Select a Gate:** Use the top navigation bar in the simulator section to choose a logic gate (e.g., AND, OR, XOR).
2.  **Toggle Inputs:** Click the toggle switches (Inputs A, B, or C) to change their state between `0` (False) and `1` (True).
3.  **Observe Results:**
    *   Watch the **Circuit Diagram** lines glow purple when signals are active.
    *   See the **Output** indicator light up.
    *   Check the **Truth Table** to see exactly which logic rule is currently being applied.
4.  **Get Help:** Click the **"Ask Gemini ✨"** button to get a beginner-friendly explanation of how the current gate works.

## 📂 Project Structure

```text
gatecraft/
├── components/
│   ├── ui/                 # Reusable UI components (ShimmerButton, etc.)
│   ├── CircuitDiagram.tsx  # SVG visualization of the gate
│   ├── CircuitStageCard.tsx# Container for diagram and controls
│   ├── Footer.tsx          # Application footer
│   ├── GateSelector.tsx    # Navigation for selecting gates
│   ├── InputControls.tsx   # Toggle switches for inputs
│   ├── Navbar.tsx          # Main navigation bar
│   ├── OutputDisplay.tsx   # Visual output indicator
│   ├── Sidebar.tsx         # Mobile navigation menu
│   └── TruthTable.tsx      # Dynamic truth table display
├── lib/
│   └── utils.ts            # Utility functions (Tailwind class merger)
├── App.tsx                 # Main application controller
├── constants.ts            # Logic gate definitions and configurations
├── index.tsx               # Entry point
├── types.ts                # TypeScript interfaces
└── README.md               # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Crafted with ❤️ and Logic.*
