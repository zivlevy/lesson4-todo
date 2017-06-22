import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import {Observable} from "rxjs/Observable";
import {baseBuildCommandOptions} from "@angular/cli/commands/build";

@Injectable()
export class TodoDataService {

    todos: Todo[] = [];
    baseURL: string = 'http://130.211.153.28:9000/todos';


    constructor(private http: Http) {

    }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get(this.baseURL)
            .map((res: Response) => res.json())
    }

    addTodo(todo: Todo): Observable<Todo[]> {
        let bodyString = JSON.stringify(todo);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        const add$ = this.http.post(this.baseURL, bodyString, options);
        return add$.switchMap((val) =>  this.getAllTodos());
    }

    deleteTodo(id: string): Observable<Todo[]> {
        const del$ = this.http.delete(`${this.baseURL}/${id}`);
        return del$.switchMap((val) => this.getAllTodos());
    }

    toggleTodo(id: string, completed: boolean): Observable<Todo[]> {
        let bodyString = {"completed": completed};
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        const toogle$ = this.http.put(`${this.baseURL}/${id}`, bodyString, options)
        return toogle$.switchMap((val) => this.getAllTodos());
    }

    // getAllTodos(): Todo[]{
    //   return this.todos;
    // }
    //
    // addTodo(todo: Todo): Todo[] {
    //   let d = new Date();
    //   let n = d.getTime()
    //   todo._id = n.toString();
    //   this.todos.push(todo);
    //   return this.todos;
    //
    // }
    //
    // deleteTodo(id: string): Todo[] {
    //   for (let i = 0; i < this.todos.length; i++) {
    //     if (this.todos[i]._id === id) {
    //       this.todos.splice(i,1);
    //       break;
    //     }
    //   }
    //   return this.todos;
    // }
    //
    // toggleTodo(id: string, completed: boolean):Todo[] {
    //   for (let i = 0; i < this.todos.length; i++) {
    //     if (this.todos[i]._id === id) {
    //       this.todos[i].completed = completed;
    //     }
    //   }
    //   return this.todos;
    // }
}
