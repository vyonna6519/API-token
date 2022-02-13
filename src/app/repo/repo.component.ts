import { Component, OnInit } from '@angular/core';
import { SearchRepoService } from '../search-repo.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  searchRepoQuery!: string;
  repos!:any;
  SearchRepoRequestService: any;

  constructor(private SearchRepoService: SearchRepoService) { }
  search(){
    this.searchrepo(this.searchRepoQuery)
  }
  searchrepo(searchRepoQuery: string) {
    this.SearchRepoRequestService.reporequest(searchRepoQuery).subscribe(
      (response: any) => {
        this.repos = response.items;
        console.log(this.repos);
      }
    );
    ;
  }

  ngOnInit(): void {
  }

}
