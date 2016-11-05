var Todo = require('../models/todo');
var User = require('../models/user');

exports.getTodos = function(req, res, next) {

  Todo.find(function(err, todos) {
    console.log('in todos controller');
    console.log(todos);

    if(err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
};

exports.createTodo = function(req, res, next) {

    Todo.create({
        title: req.body.title
      }, function(err, todo) {

      if(err) {
        res.send(err);
      } else {
        res.json(todos);
      }
    });
};

exports.deleteTodo = function(req, res, next) {

  Todo.remove({
        _id: req.params.todo_id
      },
      function(err, todo) {
        res.json(todo);
      });
};
