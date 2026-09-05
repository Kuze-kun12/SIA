<div align="center">
  <h1 align="center">SIA</h1>

  <p align="center">JJUST A DOCUMENTATION</p><br>
  <p align="center">BY: Raul A. Generoso lll</p><br>
</div>


SYSTEM INTEGRATION AND ARCHICTECTURE
Documents for steps


## SET UP FOR GIT

> [!IMPORTANT]
> Setting up the git on your desktop.
> ## WINDOWS 10 - 11 ENVIRONMENT
> 1. PRESS THE WINDOWS LOGO ON YOUR KEYBOARD
> 2. THEN MAKE TYPE POWER SHELL
> 3. THEN PASTE THIS TO DOWNLOAD THE GIT AT LEAST VERSION
```bash
winget install --id Git.Git -e --source winget
```
> [!IMPORTANT]
> ## LINUX ENVIRONMENT
> 1. GO TO YOUR CMD
> 2. THEN UPDATE YOUR INDEPENDENCE
```bash
sudo apt update && apt upgrade -y
sudo apt install git 
```
> [!IMPORTANT]
> ## CHECK THE GIT VERSION
```bash
git -v
```

<br><br><br><br>


> [!NOTE]
> ##  1. STEP A:

> [!IMPORTANT]
>  1. LOG-IN ON YOUR GITHUB ACCOUNT
>  2. THEN GO DASHBOARD AND PRESS THE GREEN BUTTON THAT NAME AS NEW 
>  3. NAME YOUR REPOSITORY, DESCRIPTIONS IS OPTIONAL AND MAKE IT PUBLIC
>  4. THEN SCROOL DOWN AND PRESS CRETE REPOSITORY

<br><br>

> [!NOTE]
> ##  2. STEP B:
>  1. CREATE A FILE ON YOUR FILE MANAGER AND CREATE A NEW FOLDER AND NAME IT 
>  2. THEN RIGHT CLICK FOLDER YOU CREATED 
>  3. THEN RIGHT CLICK THEN CLICK TERMINAL

<br><br>

> [!NOTE]
> ##  3. STEP C:

> [!IMPORTANT]
> 1. GO TO THE TERMINAL AND COPY THIS COMMAND

```bash
npm init
```
> 2. THEN FOLLOW THIS ONE 

> [!TIP]
> HELPFUL NOTES.
```bash
package name: (sia-ex) generoso.sia                             // YOUR PACKAGE NAME THEN ENTER
version: (1.0.0)                                                // ENTER BECUASE THIS IS YOUR VERSION CONTROL 
description: Activities                                         // OPTIONAL THEN ENTER 
entry point: (index.js)                                         // ENTER YOUR ENTRY POINT 
test command:                                                   // ENTER
```

> 3. GO TO YOUR GITHUB AND COPY YOUR HTTPS, THE BLUE SQUARE THEN PASTE IT 
```bash
git repository: https://github.com/Kuze-kun12/activity_sia.git  // PASTE YOUR HTTPS
keywords: sia,activity,sy25-26                                  // ANYTHING THAT IS YOUR KEYWORDS
author: Generoso, Raul A. lll                                   // THE AUTHOR
license: (ISC)                                                  // ENTER 
type: (commonjs)                                                // ENTER
```

<br><br>

> [!IMPORTANT]
> OUPUT

```bash
About to write to /home/Rdev/Documents/SIA EX/package.json:

{
  "name": "generoso.sia",
  "version": "1.0.0",
  "description": "Activities",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Kuze-kun12/activity_sia.git"
  },
  "keywords": [
    "sia",
    "activity",
    "sy25-26"
  ],
  "author": "Generoso, Raul A. lll",
  "license": "ISC",
  "type": "commonjs",
  "bugs": {
    "url": "https://github.com/Kuze-kun12/activity_sia/issues"
  },
  "homepage": "https://github.com/Kuze-kun12/activity_sia#readme"
}

Is this OK? (yes)
```
> 4. IF THIS IS CORRECT THEN PRESS ENTER  

<br><br>

> [!NOTE]
> ##  4. STEP D:

> [!IMPORTANT]
>  1. INSTALL THE npm i express
>  2. GO TO THE TERMINAL THEN TYPE code . TO OPEN THE VSCODE USING YOUR FOLDER
>  3. ADD FILE NAME AS .gitignore TO IGNORE THE MODULES THAT IS HEAAVY 
>  4. GO TO THE .gitignore THEN TYPE node_module/ TO MAKE SURE WE WONT PUSH THE HEAVY MODULES OR IMPORTS
>  5. ADD ANOTHER FILE AS index.js

<br><br>

> [!NOTE]
> ##  4. STEP E:

> [!IMPORTANT]
> 1. git init
> 2. git add . TO ADD THE FOLDER TO YOUR GITHUB ACOUNT
> 3. git commit -m "ci(index.js): Initial" THIS IS CALLED AS SEMANTIC
> 4. git remote add origin https://github.com/Kuze-kun12/SIA.git
> 5. git push -u origin main
<br><br>

### SEMENTICS COMMITS
> [!NOTE]
> Semantic commits use clear prefixes like feat:, fix:, or docs: to explain what a code change does at a glance.

> [!TIP]
> 1. docs
```bash
git commit -m "docs: update setup instructions in README"
```
> 2. feat
```bash
git commit -m "feat: add user login endpoint"
```
> 3. fix
```bash
git commit -m "fix: resolve navigation bar alignment issue"
```
> 4. style 
```bash
git commit -m "fix: resolve navigation bar alignment issue"
```
> 5. refactor
```bash
git commit -m "refactor: simplify database connection function"
```
> 6. perf
```bash
git commit -m "perf: optimize image loading speed"
```
> 7. test
```bash
git commit -m "test: add unit tests for user authentication"
```
> 8. chore
```bash
git commit -m "chore: update npm package dependencies"
```
<br><br><br><br>


## A simple Express.js REST API server serving mock animal data on a local network IP address.

> [!NOTE]
> This code imports Express, creates an application instance, and sets the port and local IP address where your server will run.

```javascript
const express = require('express');
const server = express()
const PORT = 3000;
const HOSTNAME = "192.168.2.31";
```

> [!TIP]
> USE 0.0.0.0 ON THE HOSTNAME TO ACCESS TO ALL

> [!IMPORTANT]
> THIS IS WHAT YOU CALLED AS A REST API 
```javascript
server.get(`/api/data`, (req, res) => {
  return res.json(data);
});
```
> An architectural style allowing independent software systems to communicate over HTTP using structured requests and responses.

## HTTPS METHODS 
> [!IMPORTANT]
> THIS IS THE HTTPS METHODS
> 1.GET - Retrieves or fetches data from the server without modifying anything.
```javascript
app.get('/api/users', (req, res) => {
  res.json({ message: "Fetching all users" });
});
```
> 2.POST - Sends new data to the server to create a new resource.
```javascript
app.post('/api/users', (req, res) => {
  res.status(201).json({ message: "User created successfully" });
});
```
> 3.PUT - Replaces an existing resource completely with new data.
```javascript
app.put('/api/users/:id', (req, res) => {
  res.json({ message: `Completely updated user ${req.params.id}` });
});
```
> 4. PATCH - Partially updates specific fields of an existing resource.
```javascript
app.patch('/api/users/:id', (req, res) => {
  res.json({ message: `Partially updated user ${req.params.id}` });
});
```
> 6. DELETE - Removes a specified resource from the server.
```javascript
app.delete('/api/users/:id', (req, res) => {
  res.json({ message: `Deleted user ${req.params.id}` });
});
```
<br><br><br><br>


## Common HTTP Status Codes
> [!IMPORTANT]
> 1. 200 OK: Request succeeded.
> 2. 201 Created: Resource successfully created via POST.
> 3. 400 Bad Request: Client sent invalid request payloads/syntax.
> 4. 404 Not Found: Endpoint or resource ID does not exist.
> 5. 500 Internal Server Error: Unexpected application/database crash on the server.

> [!TIP]
> this is example of route in express
```Javascript
// Example route
server.get('/', (req, res) => {
  res.send('Hello World!');
});
```
> [!TIP]
> TO SEE THE OUTPUT OF YOUR CODE
```bash
node index.js 
```
> ANOTHER ONE THAT IS SUPER USEFUL TO NOT ALWAYS TYPE NODE INDEX ON YOUR TEMINAL, JUST SAVE AND THE NODE WILL RUN AUTOMATICALLY 
```bash
node --watch index.js 
```
> [!IMPORTANT]
> TO SEE THE LINK
> http://192.168.2.31:3000/api/data
└──┬─┘  └──────┬─────┘ └─┬┘ └───┬──┘
Scheme       Host IP    Port   Path / Endpoint
> SO 0.0.0.0:3000/api/data is your url


### ADDITIONAL KNOWLEDGE IF YOU CAN SEE THIS ERROR WHEN YOU PUSH 
remote: Permission to Kuze-kun12/Practice-Database.git denied to j*********.
fatal: unable to access 'https://github.com/Kuze-kun12/Practice-Database.git/': The requested URL returned error: 403

> THEN FOLLOW THIS STEPS

> [!IMPORTANT]
> ## WINDOWS 10 - 11 ENVIRONMENT
> 1. PRESS THE WINDOWS LOGO ON YOUR KEYBOARD
> 2. THEN TYPE WINDOWS CREDENTIAL MANAGER
> 3. THEN DELETE THE GITHUB ACCOUNT IF YOU SEE ONE
> 4. THEN GO TO YOUR CMD TO CHANGE YOUR USER NAME TO
```bash
git config --global user.name "Kuze-kun12"
```

> [!IMPORTANT]
> ## LINUX ENVIRONMENT
> 1. GO TO YOUR CMD
> 2. INSTALL THE gh 
```bash
sudo apt install gh
```
> 3. login to github using gh on your terminal
```bash
sudo gh auth login
```
> 4. login and folow the step then change your username as always
```bash
git config --global user.name "Kuze-kun12"
```






> [!NOTE]
> Highlights useful information for users.

> [!TIP]
> Helpful advice or shortcuts.

> [!IMPORTANT]
> Key information users need to know.

> [!WARNING]
> Urgent info calling for immediate user attention.

> [!CAUTION]
> Advises about risks or negative outcomes.
