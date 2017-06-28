import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoInfoComponent} from './todo-info/todo-info.component';
import {TodoDataService} from "./services/todo-data.service";
import  {HttpModule} from '@angular/http';
import {FooterComponent} from "./footer/footer.component";
import {GraphComponent} from './graph/graph.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { MenubarComponent } from './menubar/menubar.component';


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthService} from './services/auth.service'
import {LoginGuard} from './guards/login.guard';

import {ChartModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoInfoComponent,
        FooterComponent,
        GraphComponent,
        LoginComponent,
        PageNotFoundComponent,
        MenubarComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        ChartModule,
        RadioButtonModule
    ],
    providers: [TodoDataService,LoginGuard,AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
