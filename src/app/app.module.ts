import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';
import {TodoDataService} from "./services/todo-data.service";
import  {HttpModule} from '@angular/http';
import {FooterComponent} from "./footer/footer.component";
import { RxComponent } from './rx/rx.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoInfoComponent,
      FooterComponent,
      RxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
