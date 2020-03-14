import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { VoterComponent } from "./1-voter/voter.component";
import { TodosComponent } from "./2-todos/todos.component";
import { UserDetailsComponent } from "./3-user-details/user-details.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { NavComponent } from "./nav/nav.component";
import { TodoService } from "./2-todos/todo.service";
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    NavComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
