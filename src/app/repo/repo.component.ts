import { Component, OnInit } from '@angular/core';
import { SearchRepoService } from '../search-repo.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  searchRepoQuery!: string;
  repos!:any;

  constructor(private SearchRepoService: SearchRepoService) { }
  search(){
    this.searchrepo(this.searchRepoQuery)
  }
  searchrepo(searchRepoQuery: string) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
