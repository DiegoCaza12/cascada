import { AccesoService } from './../servicios/acceso.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarventas',
  templateUrl: './registrarventas.page.html',
  styleUrls: ['./registrarventas.page.scss'],
})
export class RegistrarventasPage implements OnInit {
  productos:any = [];
  usuarios:any = [];
  clientes:any= [];
  cod:any;
  
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
    this.MostrarClientes();
    
    }
    ionViewDidEnter1(){
      
      this.MostrarUsuarios();
      
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
    MostrarClientes(){
      let body={
        'accion':'ListarC',
        'cod':this.cod
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
    MostrarUsuarios(){
      let body={
        'accion':'ListarU',
        'cod':this.cod
      }
      return new Promise(resolve=> {
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado)
          {
            this.usuarios=res.datos;
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
    /*public modificar()
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
  */
  
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