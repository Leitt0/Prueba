import { Component, OnInit} from '@angular/core';
import { DataService } from './dataservice'
import { PostPorID, DatosPersonaPorID } from '../../models/interface'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-get-por-id',
  templateUrl: './get-por-id.component.html',
  styleUrls: ['./get-por-id.component.css']
})
export class GetPorIdComponent implements OnInit {

  LosPostsPorID: PostPorID[];
  id = '';
  postPrincipal;
  DatosPostPrincipal: DatosPersonaPorID[];
  loadingPost = false
  loadingComments = false

  constructor(
    private dataSvc: DataService,
    private router: Router,
    private route: ActivatedRoute,
    ) { 
      this.id = this.route.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    
    //POST PRINCIPAL
    this.loadingPost = true    
    this.dataSvc.getPostPrincipalPorID(this.id).subscribe(data => {
      this.postPrincipal = data
      this.dataSvc.getDatosUsersPorID(this.postPrincipal.userId).subscribe(data => {
        this.DatosPostPrincipal = data
        this.loadingPost = false
      })
    })
    
    //COMENTARIOS
    this.loadingComments = true
    this.dataSvc.getCommentsPorID(this.id).subscribe(data => {
      this.LosPostsPorID = data
      this.loadingComments = false
    })
  } 
}