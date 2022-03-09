import { AccesoService } from 'src/app/servicios/acceso.service';
import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acventas',
  templateUrl: './acventas.page.html',
  styleUrls: ['./acventas.page.scss'],
})
export class AcventasPage implements OnInit {
  ventas:any = [];
  cod:any;
  txt_fecha:string;
  txt_idcliente:string;
  txt_idusuario:string;
  txt_total:string;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController
  ) { 
    this.servicio.getsesion('idventa').then(res=>{
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
        console.log(error);
      });
    });
    }
    public modificar()
    {
        let body={
          'accion': 'modificarV',
          'idventa': this.cod,
          'fecha': this.txt_fecha,
          'idcliente': this.txt_idcliente,
          'idusuario': this.txt_idusuario,
          'total': this.txt_total,
         
        }
        return new Promise (resolve =>{
          this.servicio.postData(body).subscribe((res:any)=>{
            if(res.estado)
            {
              this.mostrarToast("Actualizacion satisfactoria");
              this.navCtrl.navigateRoot(['/usuventas']);
            }
            else
            {
              this.mostrarToast('erro al guardar');
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