// Define a new component called todo-item
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

let app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js for me!'
  }
})

let app2 = new Vue({
  el: '#app-2',
  data: {
    id: 'inspect-me'
  }
})

let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
