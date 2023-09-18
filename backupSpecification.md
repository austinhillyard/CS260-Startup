# CS260-Startup
Repository for the CS260 Startup Web project

## Elevator Pitch
Have you ever heard of a *KanBan* board? It's Japanese for signboard, and it's used in workplaces to track workflow of multiple projects. Essentially it's divided up into sections or columns of stages, and based on color coding you can track how fast things are moving through your work pipeline, and keep track of projects of different priorities. As a web application, a *KanBan* board can be used to track anything you need in your personal life too. Anything from chores to hobbies, to schoolwork, the sky's the limit with your personal *KanBan* board!

## Key Features
* **Cards**
 * Cards that can have text and Color that represent tasks.
 * Cards can also be assigned a worker.
* **Columns**
 * At least one column to hold cards.
 * More columns can be added as neccessary
 * Columns can be renamed
* **Boards**
 * Each user can have several boards to keep track of multiple larger projects.
 * If boards are public, other users can look at your projects and see your workflow.
* **Users**
 * Users can log in and see their KanBan boards, and other users Kanban boards.

## Technologies
### Authentication
 * Each user has an account they log into to to use the program, and other users are separate but visible
### Database Data
 * Each user has their own KanBan boards that are preserved between sessions, that can be updated and viewed.
### WebSocket Data
 * Other users data is pulled from the server and then displayed to the user.
