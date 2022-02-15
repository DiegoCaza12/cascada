import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:any;
  txt_usuario:string;
  txt_clave:string;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController
  ) {}

  ngOnInit() {
  }

  public Loggin(){
    this.navCtrl.navigateRoot(['/loggin'])
  }
}