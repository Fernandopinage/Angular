import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  usuario: Usuario[] = [
    {id:1, nome:'luiz', idade:32, email:'luizernandoluck@hotmail.com'}
  ];

  displayedColumns = [
    'id','nome', 'idade','email' 
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
