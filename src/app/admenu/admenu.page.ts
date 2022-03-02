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
    private servicio: AccesoService, 
    private ToastCtrl: ToastController
  ) { 
    this.servicio.getsesion('id_usuario').then(res=>{
      this.cod=res;
      //this.mostrarToast( this.cod);
    });
  }

  ngOnInit() {
  }
  async mostrarToast(texto)
  {
    const toast= await this.ToastCtrl.create({
      message: texto,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
}
