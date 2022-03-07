import { Router } from '@angular/router';
import { AccesoService } from './../servicios/acceso.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuclientes',
  templateUrl: './usuclientes.page.html',
  styleUrls: ['./usuclientes.page.scss'],
})
export class UsuclientesPage implements OnInit {
  clientes:any = [];
  cod: any;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    private router: Router
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
    this.router.navigate(['/recliente']);
  }
  ionViewDidEnter(){
    this.MostrarClientes();
    }
    MostrarClientes(){
      let body={
        'accion':'ListarC',
        
      }
      return new Promise(resolve=> {
        this.servicio.postData(body).subscribe((res:any)=>{
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

