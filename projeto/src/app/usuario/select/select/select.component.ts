import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {


  usuario: Usuario[] = [

    {id:1, nome:'luiz fernando pinage coutinho',sexo:'m',idade:32},
    {id:2, nome:'paulo victor pinage coutinho',sexo:'m',idade:32},
    {id:3, nome:'marcus vinicius coutinho',sexo:'m',idade:65},
    {id:4, nome:'barbara veronica evangelista pinage',sexo:'f',idade:70},
    {id:5, nome:'supino pipico pinage coutinho',sexo:'f',idade:7},
  ];

  displayedColumns = ['id', 'nome', 'sexo', 'idade'];

  constructor() { }

  ngOnInit(): void {
  }

}
