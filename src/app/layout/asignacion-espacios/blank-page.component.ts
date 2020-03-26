import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    constructor(private servicio: ServiceService) {}

    ngOnInit() {}

    crearCliente(){
        
    }
}
