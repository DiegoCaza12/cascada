import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';


@Component({
  selector: 'app-admenu',
  templateUrl: './admenu.page.html',
  styleUrls: ['./admenu.page.scss'],
})
export class AdmenuPage implements OnInit {
  cod: any;
  constructor(
    private servicio:AccesoService
  ) { 
    
  }
  ngOnInit(): void {
    
  }
  

  logout()
  {
    this.servicio.logout('id_usuario');
  }
  
}
