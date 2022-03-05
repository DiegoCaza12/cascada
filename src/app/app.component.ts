import { NavController } from '@ionic/angular';
import { AccesoService } from 'src/app/servicios/acceso.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private servicio: AccesoService,
    private navCtrl:NavController
  ) {}
  logout()
  {
    this.servicio.logout('id_usuario');
  }
  public Loggin(){
    this.navCtrl.navigateRoot(['/loggin']);
  }
}