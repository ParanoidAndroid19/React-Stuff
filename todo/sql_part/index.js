
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_TODO_QUERY = 'SELECT * FROM todo';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'simran1998',
  database: 'react_sql'
})

connection.connect(err => {
  if(err) return err;
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('go to /todos to see them')
});


// Eg: http://localhost:3000/todos

app.get('/todos', (req, res) => {
  connection.query(SELECT_ALL_TODO_QUERY, (err, results) => {
    if(err) return res.send(err);
    else return res.json({
      data: results
    })
  });
});


// Eg: http://localhost:3000/todos/add?todo_name=Play

app.get('/todos/add', (req, res) => {
  const { todo_name } = req.query;
  const INSERT_TODO_QUERY = `INSERT INTO todo (todo_name) VALUES ('${todo_name}')`
  connection.query(INSERT_TODO_QUERY, (err, results) => {
    if(err) return res.send(err);
    else return res.send('successfully added todo');
  });
})


// Eg: http://localhost:3000/todos/delete?todo_id=4

app.get('/todos/delete', (req, res) => {
  const { todo_id } = req.query;
  const DELETE_TODO_QUERY = `DELETE FROM todo WHERE todo_id = ${todo_id}`
  connection.query(DELETE_TODO_QUERY, (err, results) => {
    if(err) return res.send(err);
    else return res.send('successfully deleted todo');
  });
})

app.listen(3000, () => {
  console.log(`sql-part listening on port 3000`)
});
