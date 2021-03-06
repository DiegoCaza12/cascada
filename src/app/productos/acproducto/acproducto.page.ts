import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-acproducto',
  templateUrl: './acproducto.page.html',
  styleUrls: ['./acproducto.page.scss'],
})
export class AcproductoPage implements OnInit {
  productos:any = [];
  cod:any;
  txt_detalle:string;
  txt_nombre:string;
  txt_precio:string;
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
    public modificar()
    {
        let body={
          'accion': 'modificarP',
          'cod': this.cod,
          'nombre': this.txt_nombre,
          'detalle': this.txt_detalle,
          'precio': this.txt_precio,
         
        }
        return new Promise (resolve =>{
          this.servicio.postData(body).subscribe((res:any)=>{
            if(res.estado)
            {
              this.mostrarToast("Actualizacion satisfactoria");
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