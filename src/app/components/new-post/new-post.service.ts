import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../../models/interface'

@Injectable({
  providedIn: 'root'
})
export class NewPostService {
  
  private Url = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private _http: HttpClient) { }

  addNewPost(newpost: Posts):Observable<Posts>{
    return this._http.post<Posts>(this.Url, newpost,{
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  } 
}