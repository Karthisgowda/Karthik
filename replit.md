# Overview

This is a full-stack web application featuring a modern portfolio website built with React and Express. The project follows a monorepo structure with separate client and server directories, utilizing TypeScript throughout. The application showcases a personal portfolio with sections for about, skills, experience, projects, education, and contact information, with a focus on smooth animations and responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting dark mode by default
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Custom CSS animations with intersection observer hooks for scroll-triggered effects

## Backend Architecture
- **Framework**: Express.js with TypeScript for RESTful API development
- **Development**: Hot reloading with Vite integration in development mode
- **Storage**: Modular storage interface with in-memory implementation (ready for database integration)
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request logging with performance metrics for API endpoints

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: User entity with username/password fields and UUID primary keys
- **Validation**: Zod integration for runtime type validation and schema inference
- **Migrations**: Drizzle Kit for database migrations and schema management

## Build and Deployment
- **Development**: Separate client and server development with proxy configuration
- **Production**: Unified build process combining client bundle and server compilation
- **Static Assets**: Client builds to `dist/public` for static file serving
- **Module System**: ESM modules throughout with proper TypeScript configuration

## Development Experience
- **Monorepo**: Shared TypeScript types and utilities between client and server
- **Path Aliases**: Organized imports with `@/` for client, `@shared/` for shared code
- **Type Safety**: End-to-end TypeScript with strict configuration
- **Hot Reload**: Vite HMR for client with Express restart for server changes

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity for serverless environments
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect support
- **@tanstack/react-query**: Server state management and caching
- **express**: Web application framework for Node.js

## UI and Styling
- **@radix-ui/react-**: Complete set of accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework with custom design system
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Conditional className utility for dynamic styling

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **wouter**: Lightweight routing library for React applications

## Form and Validation
- **react-hook-form**: Performant form library with validation
- **@hookform/resolvers**: Form validation resolvers for various schema libraries
- **zod**: TypeScript-first schema validation library

## Date and Utilities
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique string ID generator
- **lucide-react**: Beautiful and customizable SVG icons