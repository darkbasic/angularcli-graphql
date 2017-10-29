import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HelloComponent } from './hello/hello.component';
import {ApolloComponent} from './apollo/apollo.component';

const routes: Routes = [
  {path: '', component: HelloComponent, pathMatch: 'full'},
  {path: 'apollo', component: ApolloComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ApolloComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    IonicModule.forRoot(AppComponent, {locationStrategy: 'path'}),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [IonicApp]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:3000/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
