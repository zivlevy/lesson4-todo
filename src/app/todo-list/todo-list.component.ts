import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../services/todo-data.service";
import {Todo} from "../classes/todo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodo:Todo = new Todo();
  todos:Todo[];
  constructor(private todoService:TodoDataService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(todos=>this.todos=todos);
    this.router.params.subscribe(params=>{
      console.log(params['id'])
    })
  }


  addTask(){
    this.newTodo.completed = false;
    if (this.newTodo.title){
      this.todoService.addTodo(this.newTodo).subscribe(todos=>{
        this.newTodo = new Todo();
        this.todos=todos;
      });
    }
  }

  toogleTodo(todo){
    todo.completed = !todo.completed;
    this.todoService.toggleTodo(todo._id,todo.completed).subscribe((todos)=>{
        this.todos=todos;
    })
  }

  deleteTask(todo){
    this.todoService.deleteTodo(todo._id).subscribe(((todos)=> {
        this.todos = todos;
    }));
  }
  // ngOnInit() {
  //   this.todos = this.todoService.getAllTodos();
  // }
  //
  //
  // addTask(){
  //   this.newTodo.completed = false;
  //   if (this.newTodo.title) {
  //     this.todoService.addTodo(this.newTodo);
  //     this.newTodo=new Todo();
  //   }
  // }
  //
  // toogleTodo(todo){
  //   todo.completed = !todo.completed;
  //   this.todoService.toggleTodo(todo._id,todo.completed);
  // }
  //
  // deleteTask(todo){
  //   this.todoService.deleteTodo(todo._id);
  // }
}
