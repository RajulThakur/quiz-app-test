# IQ Arena - Interactive Quiz Application

IQ Arena is a modern, interactive quiz application built with Next.js, featuring real-time feedback, user authentication, and a competitive scoring system.

## 🌟 Features

- **Interactive Quizzes**: Multiple-choice questions with instant feedback
- **User Authentication**: Secure login with email/password and Google OAuth
- **Dark Mode Support**: Seamless theme switching for better user experience
- **Progress Tracking**: Track your daily streak and overall progress
- **Competitive Rankings**: Compare your performance with other players
- **Responsive Design**: Works perfectly on both mobile and desktop devices

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Theme Management**: next-themes
- **Form Validation**: Zod

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn or pnpm or bun

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/quiz_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

4. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/               # Next.js app directory
├── components/        # Reusable UI components
├── context/          # React Context providers
├── icons/            # SVG icons components
├── lib/              # Utility functions and services
├── types/            # TypeScript type definitions
└── schema/           # Zod validation schemas
```

## 🔒 Authentication

The application supports two authentication methods:

- Email/Password authentication
- Google OAuth

## 🎨 Styling

- Uses Tailwind CSS for styling
- Supports both light and dark modes
- Custom animations and transitions
- Responsive design patterns

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for the deployment platform
- All contributors who have helped with the project
