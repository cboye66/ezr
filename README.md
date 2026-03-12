## Create New Release
- Change default locale and theme mode if necessary 
- From easyriz root folder Run: flutter build web --no-tree-shake-icons
- cd into build/web
- Edit index.html to comment out the line: `<base href="/">`
- Use git remote -v to confirm remote repository
- Git add, commit, and push changes in the web