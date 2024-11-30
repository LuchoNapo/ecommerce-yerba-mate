
## 🛍️ E-commerce Yerba Mate - Frontend
This project showcases a modern e-commerce platform designed for the Yerba Mate niche. It includes features like product listings, shopping cart functionality, and integration with a backend built using TypeScript, Stripe, and PostgreSQL.
The backend is hosted on Render and stores images in Cloudinary, while the database is managed with Railway.

### 🛠️ Project Technologies
[<img alt="Static Badge" src="https://img.shields.io/badge/Next-black">](https://nextjs.org/) 
[<img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-%233178C6">](https://www.typescriptlang.org) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Shadcn-black">](https://shadcn.dev/) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Tailwind-38BDF8">](https://tailwindcss.com/) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Vercel-grey">](https://vercel.com/) 
---


### ⚙️ Local configuration

**Requisitos previos:** <br>
[Node.js](https://nodejs.org/) v18 o superior [Yarn](https://yarnpkg.com/) o npm

### 🔧 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LuchoNapo/ecommerce-yerba-mate.git
   cd ecommerce-yerba-mate
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
3. Add environment variables: Create a .env.local file in the root directory and configure the following variables:
   ```bash
   NEXT_PUBLIC_BACKEND_URL=<URL_DEL_BACKEND>
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev 
The application will be available at `http://localhost:3000`.

### 📂 Project Structure

```
ecommerce-yerba-mate/
ecommerce-yerba-mate/
├── app/                 # Main routes and pages logic with Next.js App Router
├── components/          # Reusable UI components
├── hooks/               # Custom hooks for reusable logic
├── lib/                 # Utilities and library configurations
├── public/              # Static assets (images, icons, etc.)
├── types/               # TypeScript type definitions
├── .env.local           # Local environment variables
├── tailwind.config.js   # TailwindCSS configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration

```
### 🚀 Deployment
The project is deployed on [Vercel](https://vercel.com). You can see it in operation [here](https://ecommerce-yerba-mate.vercel.app/).
> [!IMPORTANT]
> Backend Startup Delay: The backend is hosted on a free-tier plan, which may result in delayed responses when starting the server. Please allow a few moments for the data to load when accessing the frontend.
