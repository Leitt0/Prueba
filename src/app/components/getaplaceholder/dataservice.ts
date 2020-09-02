import { Injectable } from '@angular/core';
import { Posts } from '../../models/interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }
  
  
  
    getAllPosts():Observable<Posts[]>{
        return this.http.get<Posts[]>(this.urlAPI);
    }
    
}