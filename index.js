const { DataSource } = require('typeorm');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'NodeDev111!!!',
  database: 'TODOLIST',
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database has been initialized');
  })
  .catch((err) => {
    console.error('Error', err);
  });

app.listen(PORT, () => {
  console.log(`Server listening in ${PORT}`);
});
