import { Router } from '@angular/router';
import { AccesoService } from './../servicios/acceso.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuventas',
  templateUrl: './usuventas.page.html',
  styleUrls: ['./usuventas.page.scss'],
})
export class UsuventasPage implements OnInit {
  ventas:any = [];
  cod:any;
  idventa:any;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    private router:Router
  ) { 
    this.servicio.getsesion('idventa').then(res=>{
      this.cod=res;
      console.log(this.cod);
      //this.mostrarToast( this.cod);
    });
  }
  

  ngOnInit() {
  }
  public registrar(){
    this.navCtrl.navigateRoot(['/registrarventas'])
  }
  ionViewDidEnter(){
    this.MostrarUsuarios();
    }
    MostrarUsuarios(){
      let body={
        'accion':'ListarV',
        'cod':this.cod
      }
      return new Promise(resolve=> {
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado)
          {
            this.ventas=res.datos;
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
  public editar(idventa){
    this.servicio.setsesion('idventa',idventa);
    this.navCtrl.navigateRoot(['/acventas'])
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
                this.router.navigate(['/usuventas']);
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
  public volver(){
    this.router.navigate(['/usumenu']);
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
