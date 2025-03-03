# convertium-takehome
Takehome exercise for a frontend job at https://convertium.com/. Built on Node v22.9.0.

## Setting up a development environment
This is how to set up a dev environment:

1. Set up a PostgreSQL database
2. Create a `.env` file at the root of the folder.
    - DATABASE_URL - Set this variable to the postgresql database url
    - SESSION_SECRET - Set this to a generated secret. It's used to sign jwt tokens.
3. Set up the database -  Run `npm run db:migrate` to set up everything in the database
4. `npm run dev`

It should start working!