import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  productos:any = [];
  cod:any;

  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController
  ) { 
    this.servicio.getsesion('id_usuario').then(res=>{
      this.cod=res;
      this.mostrarToast( this.cod);
    });
  }

  ngOnInit() {
  }
  public registrar(){
    this.navCtrl.navigateRoot(['/reproductos'])
  }
  ionViewDidEnter(){
    this.MostrarUsuarios();
    }
    MostrarUsuarios(){
      let body={
        'accion':'ListarP',
        'cod':this.cod
      }
      return new Promise(resolve=> {
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado)
          {
            this.productos=res.datos;
          }
          else
          {
            this.mostrarToast('Error al cargar datos');
          }
        }, (error)=>{
          this.mostrarToast('Error de conexion');
          console.log(error);
        });
        
      });
    }
  public editar(idproducto){
    this.servicio.setsesion('idproducto',idproducto);
    this.navCtrl.navigateRoot(['/acproducto']);
  }
  public eliminar(idusuario){
    this.servicio.setsesion('idusuario',idusuario);
    this.navCtrl.navigateRoot(['/eproducto']);
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