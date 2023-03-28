# 3D_Portfolio

Initial Project Steps:

- Download Node.js -> https://nodejs.org/en/download
- Create empty project (Terminal) -> `npm create vite@latest ./ -- --template react`

Extra Libraries Installations:

- `npm install -D tailwindcss`
- `npx tailwindcss init`

- `npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`
- `npm install --legacy-peer-deps three --force`
- `npm install react-bootstrap bootstrap --legacy-peer-deps`

Run Project:

- `npm run dev`

Deploy Website to GitHub:

- `npm run build`
- `git add dist -f`
- `git commit -m "Adding dist"`
- `git subtree push --prefix dist origin gh-pages`
