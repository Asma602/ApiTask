import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DbServiceService implements OnInit{
  baseUrl = "http://localhost:3000/list";
  constructor(private _httpClient : HttpClient) { }

  ngOnInit(){
    
  }

  getList(pgNo : number){
    return this._httpClient.get(`http://localhost:3000/list?pageNo=${pgNo}`);
  }

}
