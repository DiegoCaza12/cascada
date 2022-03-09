import { Router } from '@angular/router';
import { Team3 } from './../models/teams3';
import { AccesoService } from './../servicios/acceso.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  ventas:any = [];
  cod:any;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    private router:Router
  ) { 
    this.servicio.getsesion('id_usuario').then(res=>{
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
    this.navCtrl.navigateRoot(['/acventas']);
  }
  public eliminar(idventa){
    this.servicio.setsesion('idventa',idventa);
    this.navCtrl.navigateRoot(['/eventas']);
  }
  public volver(){
    this.router.navigate(['/admenu']);
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
