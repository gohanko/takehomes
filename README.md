# convertium-takehome
This is a simple NextJS application to demonstrate ability to work on React frontend, and NextJS backend.

## Features
Features implemented on both UI and API side include:

- Authentication
    - Login (with JWT tokens)
    - Register (with proper password salting and hashing)
    - Logout
- Profile
    - Basic Profile
    - Advanced Profile
    - Spouse Details
    - Preferences

## Technologies
The application is built on the following technologies.

- NodeJS v22.9.0 (and TypeScript v5.8)
- NextJS v15.1.7 (and React v19.0.0)
- TailwindCSS v4.0.9 (and [DaisyUI v5.0.0](https://daisyui.com/))
- PostgreSQL

The application, database, and file storage are deployed serverlessly on [Vercel](https://vercel.com/).

## Getting Started
These are 2 sub-sections to create the development environment.

1. Deploy a development database.
2. Configuring and setting up the application

The database makes it a bit complicated but bear with me.

### Deploying a development database
This is required because we need to store authentication, and profile data. You may ask why do we need to deploy a database first, it's mainly because [Prisma](https://www.prisma.io/), the ORM library used is built for serveless deployments, and don't support multiple different environment.

So, essentially you need to deploy an empty **PostgreSQL** database, either locally, serverlessly, or on some VPS. The important part here is that it should be accessible to the application.

### Configuring and setting up the application
This part is on configuring and setting up the application.

1. Start by installing the packages through: `npm ci`.
2. Create a `.env` file in the root folder, and set the following environment variables:
    - **DATABASE_URL** - This URL is used to access the database, if you can use this URL to access the database, then it should work here too. Make sure it starts with `postgresql://`.
    - **SESSION_SECRET** - This is a secret key used to sign JWT tokens for authentication. It can be any string, but if you want it to be secure, you can run the following: `openssl rand -base64 32`.
3. Set up the database tables using `npm run db:migrate`. 
4. Start the entire thing through `npm run dev`.

It should start working!

## Deploying the application
The application is built for serverless deployment on [Vercel](https://vercel.com/). Essentially, set the environment variables to their proper and secure values, and then follow their instruction and it should work. 