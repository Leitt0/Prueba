import { Component, OnInit } from '@angular/core';
import { DataService } from './dataservice'
import { Posts } from '../../models/interface'

@Component({
  selector: 'app-getaplaceholder',
  templateUrl: './getaplaceholder.component.html',
  styleUrls: ['./getaplaceholder.component.css']
})
export class GetaplaceholderComponent implements OnInit {
  LosPosts: Posts[];
  LoadingTable = false
  FalsosPost:Array<{width: Number}> = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.LoadingTable = true
    
    function randomInt(min, max) {
      return min + (max - min) * Math.random();
    }
    
    for(let i =0;i<10;i++){
      
      this.FalsosPost.push({width: randomInt(20,60)})
    }

    this.dataSvc.getAllPosts().subscribe(data => {
      this.LosPosts = data
      this.LoadingTable = false
    })    
  }

}
