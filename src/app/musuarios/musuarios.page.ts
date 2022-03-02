import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-musuarios',
  templateUrl: './musuarios.page.html',
  styleUrls: ['./musuarios.page.scss'],
})
export class MusuariosPage implements OnInit {
  contactos:any = [];
  cod:any;

  txt_cedula:string;
  txt_nombre:string;
  txt_apellido:string;
  txt_email:string;
  txt_telefono:string;
  txt_direccion:string;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController
  ) { 
    this.servicio.getsesion('id_usuario').then(res=>{
      this.cod=res;
      //this.mostrarToast( this.cod);
    });
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.listarContactos();
    }
    listarContactos(){
    let body={
      'accion':'ListarU',
      'cod': this.cod
    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.contactos=res.datos
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
            'accion': 'eliminarU',
            'idusuario': this.cod
          }
          return new Promise (resolve =>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado)
              {
                this.mostrarToast("registro satisfactorio");
                this.navCtrl.navigateRoot(['/usuarios']);
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
  
    public modificar()
    {
        let body={
          'accion': 'modificarU',
          'idusuario': this.cod,
          'cedula': this.txt_cedula,
          'nombre': this.txt_nombre,
          'apellido': this.txt_apellido,
          'email': this.txt_email,
          'telefono': this.txt_telefono,
          'direccion': this.txt_direccion,
        }
        return new Promise (resolve =>{
          this.servicio.postData(body).subscribe((res:any)=>{
            if(res.estado)
            {
              this.mostrarToast("Actualizacion satisfactoria");
              this.navCtrl.navigateRoot(['/usuarios']);
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