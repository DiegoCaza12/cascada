import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios:any = [];
  cod:any;

  constructor(private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    public alertController:AlertController,
    private router: Router) 
    { 
      this.servicio.getsesion('id_usuario').then(res=>{
        this.cod=res;
        this.mostrarToast( this.cod);
      });
    }

  ngOnInit() {
    
  }
  public registrar(){
    this.navCtrl.navigateRoot(['/registro'])
  }
  ionViewDidEnter(){
    this.MostrarUsuarios();
    }
    MostrarUsuarios(){
      let body={
        'accion':'ListarU',
        'cod':this.cod
      }
      return new Promise(resolve=> {
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado)
          {
            this.usuarios=res.datos;
          }
          else
          {
            this.mostrarToast('Error al cargar datos');
          }
        }, (error)=>{
          this.mostrarToast('Error de conexion');
        });
        
      });
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
