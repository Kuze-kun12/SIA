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
<br><br>






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
