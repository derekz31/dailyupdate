import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ToastComponent } from './shared/toast/toast.component';
import { HealthComponent } from './components/health/health.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FinanceComponent } from './components/finance/finance.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const routing = RouterModule.forRoot([
    { path: '',        component: HomeComponent },
    { path:'register', component: RegisterComponent},
    { path:'login',    component: LoginComponent},
    { path:'health',   component: HealthComponent},
    { path:'finance',  component: FinanceComponent},
    { path:'profile',  component: ProfileComponent},
    { path:'tasks',    component: TasksComponent},
    { path:'**',       component: HomeComponent}
]);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ToastComponent,
    HealthComponent,
    TasksComponent,
    FinanceComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
