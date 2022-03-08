import { AccesoService } from './../servicios/acceso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usumenu',
  templateUrl: './usumenu.page.html',
  styleUrls: ['./usumenu.page.scss'],
})
export class UsumenuPage implements OnInit {

  constructor(private servicio:AccesoService) { }

  ngOnInit() {
  }
  logout()
  {
    this.servicio.logout('id_usuario');
  }
}
