/*global Vue*/
var todo = new Vue({
    el: "#todo",
    data: {
        newTask: "",
        toDoList: []
    },
    methods: {
        addTask: function() {
            var task = this.newTask;
            this.toDoList.push(task);
            this.newTask = "";
        },
        removeTask: function(task) {
            var index = this.toDoList.indexOf(task);
            this.toDoList.splice(index, 1);
        }
    }
});