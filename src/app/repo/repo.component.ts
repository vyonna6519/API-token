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
  
  ngOnInit(): void {
  }

}
