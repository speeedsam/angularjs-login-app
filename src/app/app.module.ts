import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AuthgeardGuard } from './authgeard.guard';
import { UserService } from './user.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes:Routes = [

  {
    path: 'users',
      pathMatch: 'prefix',
    //component: UserComponent,
      children: [
          {
              path: ':name',
              component: UserComponent
          },
          {
              path: ':name/:id',
              component: UserComponent
          }
      ]

  },
  {
      path: 'dashboard',
      canActivate: [AuthgeardGuard],
      component: DashboardComponent
  },
    { path: '',
        component: LoginFormComponent
    },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthgeardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
