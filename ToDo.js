//! Node.js needed if running back-end (serve side) application
// allows us to access environment variables
require("dotenv").config();

// require() is how Node.js loads modules
const { Client } = require('@notionhq/client');


const notion = new Client({ auth: process.env.NOTION_KEY });

(async () => {
  const databaseId = process.env.NOTION_PAGE_ID;
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();

