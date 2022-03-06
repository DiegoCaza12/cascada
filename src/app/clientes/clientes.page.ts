import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes:any = [];
  cod: any;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
  ) { 
    this.servicio.getsesion('id_usuario').then(res=>{
      this.cod=res;
      this.mostrarToast( this.cod);
    });
  }

  ngOnInit(
    
  ) {
  }
  public registrar(){
    this.navCtrl.navigateRoot(['/recliente'])
  }
  ionViewDidEnter(){
    this.MostrarClientes();
    }
    MostrarClientes(){
      let body={
        'accion':'ListarC',
        
      }
      return new Promise(resolve=> {
        this.servicio.getData().subscribe((res:any)=>{
          if(res.estado)
          {
            this.clientes=res.datos;
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
    volver(){
      this.navCtrl.navigateRoot(['/admenu'])
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
