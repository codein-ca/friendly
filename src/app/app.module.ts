import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {LoginComponent} from './shared/login/login.component';
import {FbLoginComponent} from './shared/login/fb-login/fb-login.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {ActionScreenComponent} from './action-screen/action-screen.component';
import {ResultsScreenComponent} from './results-screen/results-screen.component';
import {RouterModule, Routes} from '@angular/router';

const myRoutes: Routes = [
  {path: 'welcome', component: WelcomeScreenComponent, pathMatch: 'full'},
  {path: 'me', component: ActionScreenComponent, pathMatch: 'full'},
  {path: 'friends', component: ResultsScreenComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '**', component: WelcomeScreenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FbLoginComponent,
    WelcomeScreenComponent,
    ActionScreenComponent,
    ResultsScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      myRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
