import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Producto } from '../../Model/Producto';
@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  productos : Producto[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getProductos().subscribe(
      data => {this.productos = data; }
    );
  }

}
