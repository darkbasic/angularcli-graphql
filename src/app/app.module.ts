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
import { ApolloComponent } from './apollo/apollo.component';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

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
    const GRAPHQL_ENDPOINT = 'ws://localhost:3000/graphql_live';
    const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
      reconnect: true,
    });

    apollo.create({
      // link: httpLink.create({uri: 'http://localhost:3000/graphql_live'}),
      link: new WebSocketLink(client),
      cache: new InMemoryCache()
    });
  }
}
