var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Todo = function (_React$Component) {
  _inherits(Todo, _React$Component);

  function Todo(props) {
    _classCallCheck(this, Todo);

    var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

    console.log(props);
    _this.state = {
      done: props.done,
      text: props.text
    };
    _this.handelClick = _this.handelClick.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Todo, [{
    key: "handelClick",
    value: function handelClick(event) {
      this.setState(function (state) {
        return {
          done: !state.done
        };
      }, function (event) {
        this.handleSubmit(event);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var text = event.target.value;

      this.setState(function (state) {
        return {
          text: text
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log("This is where the submit will happen!");

      //this.setState(state => ({

      // }));
    }
  }, {
    key: "render",
    value: function render() {
      var checked = this.props.done;
      var text = this.props.text;

      return React.createElement("div", { className: "todo" }, React.createElement("span", null, React.createElement("input", { type: "checkbox", checked: this.state.done,
        onClick: this.handelClick }), React.createElement("input", { type: "text", value: this.state.text,
        className: this.state.done ? 'done' : 'not-done',
        onChange: this.handleChange,
        onBlur: this.handleSubmit })));
    }
  }]);

  return Todo;
}(React.Component);

var TodoList = function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this2 = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

    _this2.state = { todos: [{
        _id: 'a',
        text: 'Item 1',
        done: false
      }, {
        _id: 'a',
        text: 'Item 1',
        done: true
      }] };
    _this2.newTodo = _this2.newTodo.bind(_this2);
    return _this2;
  }

  _createClass(TodoList, [{
    key: "newTodo",
    value: function newTodo(event) {
      event.preventDefault();

      todos = this.state.todos;
      todos.push({ _id: "" });

      this.setState(function (state) {
        return {
          todos: todos
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var todoList = this.state.todos.map(function (todo) {
        return React.createElement(Todo, { key: todo._id.toString(), text: todo.text, done: todo.done });
      });

      return React.createElement(React.Fragment, null, React.createElement("h1", null, " React Todo App "), todoList, React.createElement("a", { href: "#", onClick: this.newTodo }, "New Todo"));
    }
  }]);

  return TodoList;
}(React.Component);

ReactDOM.render(React.createElement(TodoList, null), document.getElementById('root'));