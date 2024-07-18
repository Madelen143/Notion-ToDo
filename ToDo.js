//! Node.js needed if running back-end (serve side) application
// allows us to access environment variables
require("dotenv").config();

// require() is how Node.js loads modules
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_KEY });

// Returns db object, describes structure and cols of db
// (async () => {
//   const databaseId = process.env.NOTION_PAGE_ID;
//   const response = await notion.databases.retrieve({ database_id: databaseId });
//   console.log(response);
// })();

// Queries a db, returns rows as objects
// (async () => {
//   const databaseId = process.env.NOTION_PAGE_ID;
//   const response = await notion.databases.query({
//     database_id: databaseId,
//   });
//   console.log(response);
// })();

// Adds entry to database
// create() needs 2 args: parent (id of page/db) and properties (values of entry)
// properties must match structure of table
(async () => {
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_PAGE_ID,
    },
    properties: {
      'Task': {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Clean asdHouse',
            },
          },
        ],
      },
      'Level' : {
        'select' : { 'name' : 'Silent Princess' }
      },
      'Status' : {
        'checkbox' : false
      }
    },
  });
  console.log(response);
})();