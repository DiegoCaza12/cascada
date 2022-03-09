import { AccesoService } from 'src/app/servicios/acceso.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admregistroven',
  templateUrl: './admregistroven.page.html',
  styleUrls: ['./admregistroven.page.scss'],
})
export class AdmregistrovenPage implements OnInit {
  usuario:any=[];
  cod:any;
  txt_fecha:string;
  txt_idusuario:string;
  txt_idcliente:string;
  txt_total:string;
  txt_producto:string;
  txt_precio:string;
  txt_cantidad:string;
  constructor(
    private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    private router: Router
  ) {
    this.servicio.getsesion('id_adm').then(res=>{
      this.cod=res;
      this.mostrarToast( this.cod);
    });
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.MostrarUsuarios();
    }
    MostrarUsuarios(){
      let body={
        'accion':'mostrarAdm',
        'cod':this.cod
      }
      return new Promise(resolve=> {
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado)
          {
            this.usuario=res.datos;
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
  public guardar(){
    
    if(this.txt_fecha=='')
    {
     this.mostrarToast('fecha requerida');
    }
    else if(this.txt_idusuario=='')
    {
      this.mostrarToast('idusuario requerido');
    }
    else if(this.txt_idcliente=='')
    {
      this.mostrarToast('idcliente requerido');
    }
    else if(this.txt_precio=='')
    {
      this.mostrarToast('precio requerido');
    }
    else if(this.txt_total=='')
    {
      this.mostrarToast('email requerido');
    }
    
    else
    {
      if(this.txt_producto=='Botellones'){
        this.txt_precio='0.95'
        var r=parseFloat(this.txt_cantidad)*parseFloat(this.txt_precio);
        this.txt_total=r.toString();
      }else{
        this.txt_precio='0.95'
        var r=parseFloat(this.txt_cantidad)*parseFloat(this.txt_precio);
      
        this.txt_total=r.toString();
      }
      console.log(this.txt_total);
      let body={
        'accion': 'insertarVe',
        'fecha': this.txt_fecha,
        'idusuario': this.txt_idusuario,
        'idcliente': this.txt_idcliente,
        'total': this.txt_total
        
      }
      return new Promise (resolve =>{
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado)
          {
            this.mostrarToast("registro satisfactorio");
            this.router.navigate(['/ventas']);
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