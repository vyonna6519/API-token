import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../search-user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchuserQuery!: string;
  user!: User;
  repos!: any[]
  SearchUserRequestService: any;
  constructor(
    private SearchUserService: SearchUserService,
    private HttpClient: HttpClient
  ) {
    
  }

   search(){
     this.searchUser(),
     this.searchRepos(this.searchuserQuery)
   }

  searchUser() {
    this.SearchUserRequestService.getUsers(this.searchuserQuery);
    this.user = this.SearchUserRequestService.users;
    console.log(this.user);
  }
  searchRepos(searchuserQuery: string) {
    this.SearchUserRequestService.searchrepos(searchuserQuery).subscribe(
      (response: any) => {
        this.repos = (response);
        console.log(this.repos)
      }
    );
  }

  ngOnInit(): void {
  }

}
