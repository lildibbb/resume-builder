# Resume Builder

An automated resume builder web app that allows users to create and manage resumes with ease.

## Tech Stack

### Frontend

- **Next.js** - A React framework for building server-side rendered and static web applications.
- **TypeScript** - A superset of JavaScript that adds static types.
- **ShadCNUI** - A Radix UI component library styled with Tailwind CSS for building the UI components.

### Backend

- **NestJS** - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

### Database

- **PostgreSQL** - A powerful, open-source relational database.
- **Prisma ORM** - An open-source next-generation ORM that simplifies database access and management.

## How to Run the Project with TurboRepo

This project uses [Turborepo](https://turborepo.org/) to manage multiple packages efficiently. Here's how to get it up and running locally:

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 16.x.x)
- [pnpm](https://pnpm.io/) (preferred package manager)
- PostgreSQL database installed and running locally or a cloud instance.
- [Prisma CLI](https://www.prisma.io/docs/getting-started) for managing the database schema and migrations.

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resume-builder
   ```
2. Install dependencies

   In the root directory of the project:

   ```bash
   pnpm install
   ```

3. Set up the environment variables

   Copy the .env.example file to .env:

   ```bash
   cp .env.example .env
   ```

   Update the .env file with your PostgreSQL connection details.

4. Database setup

   Run Prisma migrations to set up the database schema:

   ```bash
   pnpm prisma migrate dev
   ```

5. Running the Project

   To run both the frontend and backend with Turborepo, use the following command:

   ```bash
   pnpm  dev
   ```

   This will start both the Next.js frontend and the NestJS backend concurrently.

   ### Folder Structure

   /apps: Contains the Next.js frontend and NestJS backend.
   /packages: Shared libraries and utilities for both frontend and backend.
