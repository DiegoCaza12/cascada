import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-reproductos',
  templateUrl: './reproductos.page.html',
  styleUrls: ['./reproductos.page.scss'],
})
export class ReproductosPage implements OnInit {
  txt_nombre:string;
  txt_detalle:string;
  txt_precio:string;
  producto: any;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController
  ) { }

  ngOnInit( ) 
  {
  }
  public registrar(){
    if(this.txt_nombre=='')
    {
     this.mostrarToast('nombre producto requerida');
    }
    else if(this.txt_nombre=='')
    {
      this.mostrarToast('nombre requerido');
    }
    else if(this.txt_precio=='')
    {
      this.mostrarToast('precio requerido');
    }
    else
    {
      let body={
        'accion': 'insertarP',
        'nombre': this.txt_nombre,
        'detalle': this.txt_nombre,
        'precio': this.txt_precio
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
            this.mostrarToast('erro al guardar');
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
