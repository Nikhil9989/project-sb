# SKILL BRIDGE

![Skill Bridge Logo](frontend/public/logo.svg)

An innovative domain-based learning platform bridging the skill gap in education through personalized, industry-aligned learning journeys.

## Overview

SKILL BRIDGE addresses the critical disconnect between education and employment in India by providing a comprehensive, hybrid learning model that combines expert guidance, peer collaboration, and AI-powered personalization. This repository contains the codebase for the Skill Bridge project, structured to support scalable and maintainable development.

## Repository Structure

```
├── .github/                 # GitHub configuration and workflows
│   └── workflows/           # GitHub Actions workflows for CI/CD
├── frontend/                # Next.js frontend application
│   ├── app/                 # Next.js App Router pages and layouts
│   ├── components/          # Reusable React components
│   │   ├── ui/              # UI components (buttons, cards, etc.)
│   │   └── layout/          # Layout components (header, footer, sidebar)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Library code and utilities
│   ├── public/              # Static assets
│   ├── utils/               # Utility functions
│   └── middleware.ts        # Next.js middleware
└── backend/                 # Backend microservices (to be implemented)
```

## Key Features

- **Hybrid Expert-Guided Learning**: Live industry-led sessions with hands-on assignments
- **AI-Powered Personalized Learning Paths**: Customized roadmaps based on individual strengths and career goals
- **Incremental Skill Development**: Progressive learning framework (10% → 30% → 50% → 70% → 90%)
- **Project-Based Learning**: Industry-aligned capstone projects that solve real-world problems
- **1-on-1 Mentorship**: Personalized guidance from industry experts
- **Community-Driven Learning**: Peer-to-peer collaboration and reviews

## Tech Stack

### Frontend
- **Framework**: Next.js with React
- **Styling**: TailwindCSS
- **State Management**: React Hooks and Context API
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js (planned)

### Backend (Planned)
- **Architecture**: Microservices using Golang
- **Database**: MongoDB for flexible data storage
- **Authentication**: OAuth 2.0 & JWT
- **API Design**: RESTful APIs with GraphQL integration

## Live Demo

You can view the latest version of the project at [https://sb.itsmemnc.com/](https://sb.itsmemnc.com/)

## Setup Instructions

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Git

### Frontend Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Nikhil9989/project-sb.git
   cd project-sb/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Recent Fixes

#### April 2025
- Fixed an issue with missing image assets
- Updated project structure to match Next.js 14 app directory conventions
- Fixed styling and responsiveness issues
- Added GitHub Actions workflow for automated deployment
- Improved component architecture and fixed React hook dependency issues

### Environment Variables

Create a `.env.local` file in the frontend directory with the following variables:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Authentication (when implemented)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

## Deployment

The project is configured for automatic deployment using GitHub Actions. When code is pushed to the `master` branch, it will:

1. Run linting and tests
2. Build the Next.js application
3. Deploy to GitHub Pages or your preferred hosting platform

You can customize the deployment workflow in `.github/workflows/deploy.yml`.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit them (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style guidelines and passes linting.

## Code Style and Guidelines

- Use TypeScript for all new code
- Follow the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- Write unit tests for new features
- Ensure responsive design works on all device sizes
- Use appropriate component structure and organization

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about the project, please contact [project-contact@example.com].
