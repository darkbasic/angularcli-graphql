import {Component, OnInit} from '@angular/core';

import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs/Observable';
import {AllMembers} from '../../types';
import {ApolloQueryResult} from 'apollo-client';
import {CurrentUserForProfile} from '../../graphql/allMembers.query';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.html']
})
export class ApolloComponent implements OnInit {
  items$: Observable<AllMembers.AllMembers[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    const query = this.apollo.watchQuery<AllMembers.Query>({
      query: CurrentUserForProfile
    });

    this.items$ = query.valueChanges.map((result: ApolloQueryResult<AllMembers.Query>) => result.data.allMembers);
  }
}
