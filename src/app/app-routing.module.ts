import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GraphComponent} from './graph/graph.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {LoginGuard} from "./guards/login.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'todo', component: TodoListComponent,canActivate:[LoginGuard]},
    { path: 'graph', component: GraphComponent, canActivate:[LoginGuard]},
    {path:'todo/:id',component:TodoListComponent},
    {path:'dashboard', component:DashboardComponent,
        children:[
            {path: 'todo',component:TodoListComponent}
        ]
    },
    {path: '' , component: LoginComponent},
    { path: '**', component: PageNotFoundComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
