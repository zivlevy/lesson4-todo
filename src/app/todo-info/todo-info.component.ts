import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../classes/todo";

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {
  @Input() todo:Todo;
  @Output() clicked:EventEmitter<any> = new EventEmitter();
  @Output() deleted:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  todoClicked(){
    this.clicked.emit();
  }

  delete(){
    this.deleted.emit();
  }
}
