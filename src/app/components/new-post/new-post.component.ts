import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewPostService } from './new-post.service'
import { PostsClass } from '../../models/interface'


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  signupForm
  

  
  constructor(
    private _builder: FormBuilder,
    private dataSvc: NewPostService
  ) 
  {
    this.signupForm = this._builder.group({
      userId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    })
  }
  

  ngOnInit(): void {
  } 

    
  enviar(values){ 
    this.dataSvc.addNewPost(values).subscribe(data => { 
      console.log(values)
    }) 
  }
}
