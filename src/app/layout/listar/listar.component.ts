import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'
import { Asignacion } from '../modelos/asignacion';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  asignaciones: Asignacion[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.obtenerEspacios();
  }

  obtenerEspacios(){
    this.service.get('asignaciones')
      .subscribe(data => {
  //      this.asignaciones = data as Array<Asignacion>;
  console.log(data);
      });
  }
  
}
