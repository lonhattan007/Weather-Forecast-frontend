# Weather Forecast Web Application

# Prerequisites

- Node v16; it is recommended to install Node with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Bootstrap

- Clone this project

- Run the following commands inside the project folder:
  ```bash
  nvm install && nvm use
  npm install
  npm run dev
  ```

# Workflow

- To work on a new feature, checkout a new branch from the `main` branch on your local machine:

  ```bash
  git checkout -b <branch-name>
  ```

  - Branches' names should be in the form of `<prefix>/<functionality>`, for exambple `ft/login`. See more in the `Convention` section.

- Before committing, always reformat and check linting rules:
  
  ```bash
  npx prettier --write .
  npx eslint

  ```

- To push changes from that new branch to the repo for the first time:

  ```bash
  git push -u origin <branch-name>
  ```

  - `<branch-name>` here is the name of the respective branch on the Github repo, and it should be similar to the local branch name.

- After that you can just push changes simply with `git push`.

- When a feature is ready for merging, create a `pull request`.

- **NEVER PUSH TO THE MAIN BRANCH**

# Tech

## Tech stacks

- `Node 16 & npm`: Runtime & package manager
- `Vite`: Module bundler
- [React](https://reactjs.org/docs/getting-started.html): Core UI library
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) & [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page): styling and components library
- [MDB](https://mdbootstrap.com/docs/react/): UI kit
- [SASS](https://sass-lang.com/documentation/): CSS preprocessor
- [Redux](https://redux.js.org/introduction/getting-started): State management
- [React Router](https://reactrouter.com/en/main/start/tutorial): Routing library
- [Vitest](https://vitest.dev/guide/): Testing library

## Project Structure

```markdown
Weather-Forecast-frontend/
|__ src/
|   |__ assets/.................... - dynamic assets
|   |   
|   |__ components/................ - shared components
|   |   |__ componentsA/
|   |   |   |__ ComponentA.tsx
|   |   |   |__ ComponentA.test.ts
|   |   |   |__ ComponentA.scss
|   |   |   |__ SubComponentB.tsx
|   |   |   |__ ...
|   |   |   |__ index.ts........... - exporting modules
|   |   |__ ...
|   |   
|   |__ routes/.................... - routes
|   |   |__ router.ts ............. - router config
|   |   
|   |__ scss....................... - styling
|   |   |__ styles.scss............ - global styling
|   |   |__ theme.scss............. - themeing variables
|   |   
|   |__ stores/.................... - state management store
|   |   
|   |__ views/..................... - page-level components
|   |   |__ ViewA/
|   |   |   |__ ViewA.tsx
|   |   |   |__ ViewA.test.ts
|   |   |   |__ ViewA.scss
|   |   |   |__ SubComponentB.tsx
|   |   |   |__ ...
|   |   |   |__ index.ts........... - exporting modules
|   |   |__ ...
|   |   
|   |__ utils/..................... - utilities/helpers
|   |   
|   |__ main.tsx................... - main js entry
|   |   
|__ mocks/......................... - mock data
|__ |__ entityX/
|__ |   |__ entityXdata.ts
|__ |__ ...
|__ tests/......................... - testing setup
|__ public/........................ - public assets
|__ index.html..................... - HTML entry
|__ vite.config.js................. - Vite config
|__ ... (other config files)
```

## Conventions

### Commits

- Commit messages should be in the form `<action> + <target>`, eg. _updated configs_
  - `<action>`: in past tense, eg. _added_, _updated_
  - `<target>`: files, packages, or features, eg. _side bar component_, _Bootstrap_, _assign task module_

### Naming

- Variables and functions should be named in camel case, eg. _selectedStaffs_, _customHook_

- Constants should be named in snake case with all caps, eg. _API_KEY_

- Components and their respective files should be named with Pascal case, eg. _AddStaffModal_, _AddStaffModal.jsx_.

- Branches should be named in the form of `<prefix>/<functionality>`, for example `ft/login`. Some conventional prefixes:
    
    - ft: Working on a new feature
    - fix: Fixing errors or refactoring code
    - pkg: Adding packages
    - doc: Adding documentations

- To be added.

### Components

- The preferred way of writing components is functional components.

- It is highly recommended to use pre-installed components from libraries and UI kits rather than build one from scratch. This saves up tons of time.
