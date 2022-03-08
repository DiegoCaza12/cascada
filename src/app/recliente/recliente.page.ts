import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-recliente',
  templateUrl: './recliente.page.html',
  styleUrls: ['./recliente.page.scss'],
})
export class ReclientePage implements OnInit {
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
  ) { }

  ngOnInit() {
  }
  public registrar(){
    if(this.txt_cedula=='')
    {
     this.mostrarToast('cedula requerida');
    }
    else if(this.txt_nombre=='')
    {
      this.mostrarToast('nombre requerido');
    }
    else if(this.txt_apellido=='')
    {
      this.mostrarToast('apellido requerido');
    }
    else if(this.txt_email=='')
    {
      this.mostrarToast('email requerido');
    }
    else if(this.txt_telefono=='')
    {
      this.mostrarToast('telefono requerido');
    }
    else if(this.txt_direccion=='')
    {
      this.mostrarToast('direccion requerido');
    }
    
    else
    {
      let body={
        'accion': 'insertarC',
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
            this.mostrarToast("registro satisfactorio");
            this.navCtrl.navigateRoot(['/clientes']);
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
public validarCedula(){
  
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
