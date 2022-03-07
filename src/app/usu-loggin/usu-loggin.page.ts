import { AccesoService } from 'src/app/servicios/acceso.service';
import { NavController, ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usu-loggin',
  templateUrl: './usu-loggin.page.html',
  styleUrls: ['./usu-loggin.page.scss'],
})
export class UsuLogginPage implements OnInit {
  usuario:any;
  txt_usuario:string;
  txt_clave:string;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    private cookie:CookieService
  ) { }

  ngOnInit() {
  }

  public irRecuperar(){
    this.navCtrl.navigateRoot(['/registro'])
  }

  public verificar(){
    if(this.txt_usuario=='')
    {
          this.mostrarToast("Usuario Requerido");
    }
    else if(this.txt_clave=='')
    {
        this.mostrarToast("Clave Requerida");
    }
    else
    {
        let body={
          'accion': 'logginusu',
          'usuario':this.txt_usuario,
          'clave': this.txt_clave
        }
        return new Promise(resolve => {
          this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado)
              {
                this.usuario=res.datos;
                this.servicio.setsesion('id_usuario', this.usuario[0].idusuario);
                this.mostrarToast("Ingreso Satisfactorio");
                this.navCtrl.navigateRoot(['/usumenu'])
                this.cookie.set('token',res.token);
              }
              else
              {
                this.mostrarToast("Usuario o Clave Incorrecto");
              }
          }, (err)=>{
            this.mostrarToast('Error de Conexion');
          });
        });
    }
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

