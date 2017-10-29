import {Component, OnInit} from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
  query allMembers {
    allMembers {
       name
     }
   }
`;

@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.html']
})
export class ApolloComponent implements OnInit {
  items$: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    const query = this.apollo.watchQuery<any>({
      query: CurrentUserForProfile
    });

    this.items$ = query.valueChanges;
  }
}
