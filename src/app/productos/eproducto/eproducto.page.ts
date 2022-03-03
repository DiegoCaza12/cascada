import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-eproducto',
  templateUrl: './eproducto.page.html',
  styleUrls: ['./eproducto.page.scss'],
})
export class EproductoPage implements OnInit {
  productos:any = [];
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
      'accion':'ListarP',
      'cod': this.cod
    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.productos=res.datos
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
            'accion': 'eliminarP',
            'idproducto': this.cod
          }
          return new Promise (resolve =>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado)
              {
                this.mostrarToast("registro satisfactorio");
                this.navCtrl.navigateRoot(['/producto']);
              }
              else
              {
                this.mostrarToast('error al eliminar');
              }
            }, (err)=>{
              this.mostrarToast('Error de Conexion');
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
