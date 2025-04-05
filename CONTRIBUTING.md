# Contributing to Skill Bridge

Thank you for your interest in contributing to Skill Bridge! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. We expect all contributors to be respectful and constructive in their communications and contributions.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/YOUR-USERNAME/project-sb.git
   cd project-sb
   ```
3. Add the original repository as an upstream remote
   ```bash
   git remote add upstream https://github.com/Nikhil9989/project-sb.git
   ```
4. Install dependencies
   ```bash
   cd frontend
   npm install
   ```
5. Create a new branch for your feature or bug fix
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes in your feature branch
2. Run tests and ensure they pass
   ```bash
   npm run test
   ```
3. Run linting to ensure your code meets our style guidelines
   ```bash
   npm run lint
   ```
4. Commit your changes with a descriptive commit message (see [Commit Message Guidelines](#commit-message-guidelines))
5. Push your branch to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
6. Submit a pull request to the main repository

## Pull Request Process

1. Ensure your PR description clearly describes the problem and solution
2. Include screenshots or GIFs for UI changes
3. Link any related issues using keywords like "Fixes #123" or "Relates to #456"
4. Make sure all status checks pass
5. Request a review from at least one maintainer
6. Address any feedback from reviewers
7. Once approved, a maintainer will merge your PR

## Coding Standards

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use ES6+ features where appropriate
- Use functional programming patterns where possible

### React

- Use functional components with hooks instead of class components
- Keep components small and focused on a single responsibility
- Use appropriate component composition patterns
- Follow the React documentation's [thinking in React](https://reactjs.org/docs/thinking-in-react.html) philosophy

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow a mobile-first approach for responsive design
- Keep styling directly in components using Tailwind classes
- Use CSS variables for theming and consistent styling

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history.

Format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

Example:
```
feat(auth): add login with Google

Implement OAuth login flow using Google provider

Closes #123
```

## Branch Naming Conventions

- **feature/**: For new features (e.g., `feature/login-system`)
- **bugfix/**: For bug fixes (e.g., `bugfix/header-alignment`)
- **docs/**: For documentation changes (e.g., `docs/api-endpoints`)
- **refactor/**: For code refactoring (e.g., `refactor/auth-hooks`)
- **test/**: For test-related changes (e.g., `test/user-validation`)

## Testing

- Write tests for all new features and bug fixes
- Run existing tests before submitting a PR
- Aim for good test coverage, especially for critical functionality
- Types of tests to consider:
  - Unit tests for individual functions and components
  - Integration tests for component interactions
  - End-to-end tests for critical user flows

## Documentation

- Update documentation when making changes to code
- Document all public APIs, components, and functions
- Use JSDoc comments for function and component documentation
- Keep the README and other documentation files up to date
- Consider adding examples for complex features

---

Thank you for contributing to Skill Bridge! Your efforts help make education more accessible and effective for everyone.