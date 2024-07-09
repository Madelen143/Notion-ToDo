# Notion-ToDo
Using Notion's API to automate a daily ToDo list with tasks.

Notes:
Created ToDo.js file
installed Node.js to be able to run JS

ToDo file did not run since did not have @notionhq/client package installed

created a package.json file using "npm init"
	package.json file has info on project like version number, packages needed and author

installed @notionhq/client by running "npm install @notionhq/client --save" 
	"--save" flag saves the package as dependency in package.json file

Could not access env vars so added require line in ToDo.js
ran "npm install dotenv --save" to save as dependency

Notion Page ID = 32 characters after "www.notion.so/"
