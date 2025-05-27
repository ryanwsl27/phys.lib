
# Phys.Lib

A physics equation solver and dictionary web app with a retro Facebook-inspired design.

## Features

- 📘 **Equation Dictionary**: Search and filter physics equations by topic or formula.
- 📊 **Problem Solver**: Input known variables and what you're solving for; get equation recommendations.
- 🖥️ **Retro Design**: 2000s Facebook-inspired GUI.

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/phys-lib.git
   cd phys-lib
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```bash
   echo "OPENAI_API_KEY=your_openai_api_key" > .env
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Visit `http://localhost:3000` to use the app.

## Deployment

- Frontend: Deploy `public/` folder to **GitHub Pages**.
- Backend: Deploy using **Render**, **Vercel**, or similar platforms.

## Credits

Equations list sourced from [Wikipedia](https://en.wikipedia.org/wiki/Lists_of_physics_equations).
