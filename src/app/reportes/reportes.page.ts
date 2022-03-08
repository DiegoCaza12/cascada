import { ToastController, NavController } from '@ionic/angular';
import { AccesoService } from './../servicios/acceso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  codusuario:any;
  usuarios: any [];
  
  date:string;
  constructor(private ToastCtrl: ToastController,
    private servicio: AccesoService, private navCtrl:NavController) { 
      this.servicio.getsesion('idventa').then(res=>{
        this.codusuario=res;
        //this.mostrarToast( this.codusuario);
        });
    }

  ngOnInit() {
  }
  public listardiario(){
    let body={
      'accion':'ListarFecha',
      'date':this.date

    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.usuarios=res.datos
          
        }else{
          this.mostrarToast('Error al cargar datos');
        }
      },(error)=>{
        this.mostrarToast('Error de conexion')
        console.log(error);
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
