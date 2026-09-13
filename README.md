# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

------------> <------------------------------
Project Details:

- Name of my project is "DevStack".

- Project description: DevStack is a web app for exploring technologies and building your own stack.

- Technologies Used: React.js , Tailwind CSS, DaisyUI ,TypeScript,JS(ES6+) ,React-Toastify (NPM Package),React-icons,JSON (for technology data),Vite (build tool),Vercel(Project Deploy)

- 3 features about my project : 1. 🔍 Explore Technologies: Users can see different technologies like React, Vue, Svelte, Node.js, JavaScript, TypeScript, and more.

2. ➕ Add Technology to Stack : Users can add their favorite technologies to their own stack by clicking the "Add to Stack" button.

3. 📱 Responsive Design: The website works well on desktop, tablet, and mobile devices.

--- Also answer these React questions:

1. What is JSX, and why is it used in React?
   ----JSX means JavaScript XML. is a way to write HTML-like code inside JavaScript.JSX makes React code easy to write.

2. What is the difference between props and state?

   ---Props are used to pass data from one component to another. State is used to store data inside a component and change it when needed.

3. What does the `useState` hook do, and where did you use it in this project?
   ----useState helps us store and change data in a React component. In this project, I used useState to store the selected technologies in my stack and update them when I add or remove a technology.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
   -----useEffect is used to do something after the component loads. I used it to load the JSON data when my project starts.

5. Why does every item in a `.map()` list need a unique `key` prop?
   ----The key prop helps React identify each item in a list. It helps React update the list correctly when the data changes.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

--- Conditional rendering means showing something only when a condition is true. In my project, I show an “Your stack is empty” message when the user has not added any technology.

7.  How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    ----We pass data from a parent to a child using props. A child can send data back to the parent by using a function passed through props.
