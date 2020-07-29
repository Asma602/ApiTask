import { Component, OnInit } from '@angular/core';
import { DbServiceService } from './db-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  config:any;
  listData :any=[];
  searchTerm : string;
  
  ngOnInit(){
    this._dbService.getList(1)
    .subscribe(
      data => {
        this.listData=data;
        // console.log(this.listData);
      }
    )
    this._router.navigate([''],{ queryParams : {page : 1}});
  }

  constructor(private _dbService : DbServiceService, private _router : Router, private _route : ActivatedRoute){
    this.config ={
      currentPage : 1,
      itemsPerPage : 5,
      totalItems : 25
    };
    this._route.queryParams.subscribe(
      params => this.config.currentPage = params['page']?params['page']:1
    );
  }

  changePage(newPage : number){
    this._dbService.getList(newPage)
    .subscribe(
      data => {
        this.listData=data;
        // console.log(this.listData);
      }
    )
    this._router.navigate([''],{ queryParams : {page : newPage}});
  }
  searchData(){
    console.log(this.searchTerm);
  }
}
