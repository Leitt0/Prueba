import { Injectable } from '@angular/core';
import { PostPorID, PostPrincipalPorID, DatosPersonaPorID } from '../../models/interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { } 
      
  getCommentsPorID(id:string){
    let urlAPI = 'http://jsonplaceholder.typicode.com/posts/' + id + '/comments'
    return this.http.get<PostPorID[]>(urlAPI)
  }
  
  getPostPrincipalPorID(id:string){
    let urlAPI = 'http://jsonplaceholder.typicode.com/posts/' + id
    return this.http.get<PostPrincipalPorID[]>(urlAPI)
  }

  getDatosUsersPorID(id:string){
    let urlAPI = "http://jsonplaceholder.typicode.com/users/" + id
    return this.http.get<DatosPersonaPorID[]>(urlAPI)
  }
  
}