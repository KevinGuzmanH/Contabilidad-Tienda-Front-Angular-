import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Producto} from "../../Model/Producto";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   producto: Producto=new Producto();

  constructor(private route: Router, private service: ServiceService) { }

  ngOnInit(): void {

  }

  crear(){
    this.service.createProducto(this.producto)
      .subscribe(data => {
        alert('Abastecido con Exito');
        this.route.navigate(['list']);
      });
  }

}
