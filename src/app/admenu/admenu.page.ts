import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-admenu',
  templateUrl: './admenu.page.html',
  styleUrls: ['./admenu.page.scss'],
})
export class AdmenuPage implements OnInit {
  cod: any;
  constructor(
    private servicio: AccesoService, 
  ) { 
    this.servicio.getsesion('id_usuario').then(res=>{
      this.cod=res;
      //this.mostrarToast( this.cod);
    });
  }

  ngOnInit() {
  }

}
