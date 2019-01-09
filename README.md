## Setup project
1. Clone project: `$ git clone https://gitlab.com/npeham/js-bootcamp.git`
2. Navigate in `js-bootcamp` folder
3. Install node_modules: `$ yarn install`
4. Checkout actual branch: `$ git checkout js-vanilla/array`

## Run test
`$ yarn test`

## Pull and fetch
If something has changed in the remote repository you have to pull or fetch these changes:
1. pull: `$ git pull`
2. fetch: `$ git fetch`

## Commit & Push code
If one test is working you can commit and push your code as follows:
1. Add files to working tree: `$ git add .`
2. Commit changes: `$ git commit -m "commit message"`
3. Push commit(s) to remote repository: `$ git push`

**Tip**: You can also use the git features that your IDE, like VS Code, provides you.


## Creating a Merge request
If all given tests are working than you can open a Merge request for signaling that your code is ready to be reviewed:
1. Make sure you have pushed all your code
2. Go to: https://gitlab.com/npeham/js-bootcamp/branches
3. Click on the button "Merge request" of your actual branch
4. Give it a proper name like "working tests js-vanilla/array"
5. If you want to add further informations then put it in the comment section
6. Choose 'npeham' as Assignee
7. Don't change source or target branch
8. Select "Squash commits when merge request is accepted."
9. Click on "Submit merge request"

