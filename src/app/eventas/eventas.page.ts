import { AccesoService } from 'src/app/servicios/acceso.service';
import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventas',
  templateUrl: './eventas.page.html',
  styleUrls: ['./eventas.page.scss'],
})
export class EventasPage implements OnInit {
  ventas:any = [];
  cod:any;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController
  ) {
    this.servicio.getsesion('id_usuario').then(res=>{
      this.cod=res;
      });
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.listarContactos();
    }
    listarContactos(){
    let body={
      'accion':'mostrarV',
      'idventa': this.cod
    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.ventas=res.datos
        }else{
          this.mostrarToast('Error al cargar datos');
        }
      },(error)=>{
        this.mostrarToast('Error de conexion')
      });
    });
    }
    public eliminar()
      {
          let body={
            'accion': 'eliminarV',
            'idventa': this.cod
          }
          return new Promise (resolve =>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado)
              {
                this.mostrarToast("Venta eliminada");
                this.navCtrl.navigateRoot(['/usuventas']);
              }
              else
              {
                this.mostrarToast('error al eliminar');
              }
            }, (err)=>{
              this.mostrarToast('Error de Conexion');
              console.log(err);
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

