<template>
  <div class="wrapper">
    <h1>My Todo List</h1>
    <form @submit.prevent="addTodo">
  <!-- enter in de input, verzend formulier -->
      <input
        type="text"
        name="todo-text"
        v-model="newTodoText"
        placeholder="New todo"
      />
    </form>
    <ul v-if="todos.length">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo"
        />
      </ul>
      <p class="none" v-else>
        Nothing left in the list. Add a new todo in the input above.
      </p>
    </div>
</template>

<script>
    import TodoItem from "./components/ToDoItem.vue";

    let nextTodoId = 1;

    const createTodo = (text) => ({
      text,
      id: nextTodoId++,
    });

    export default {
      components: {
        TodoItem,
      },
      data() {
        return {
          todos: [
            createTodo("Learn Vue"),
            createTodo("Learn about single-file components"),
            createTodo("Fall in love ❤️"),
          ],
          newTodoText: "",
        };
      },
    methods: {
      addTodo() {
        const trimmedText = this.newTodoText.trim();
        if (trimmedText) {
          this.todos.push(createTodo(trimmedText));
        }
        this.newTodoText = "";
      },
      removeTodo(item) {
        this.todos = this.todos.filter((todo) => todo !== item);
      },
    },
    }
</script>

<style>
  body {
    padding: 10px;
  }

  .wrapper {
    width: 75%;
    margin: 0 auto;
  }

  form {
    margin-bottom: 20px;
  }
  input[type="text"] {
 width: 100%;
 padding: 10px;
 border: 1px solid #777;
}
ul,
li {
 margin: 0;
 padding: 0;
}
p.none {
 color: #888;
 font-size: small;
}
</style>



