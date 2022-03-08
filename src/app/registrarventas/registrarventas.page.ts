import { AccesoService } from './../servicios/acceso.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarventas',
  templateUrl: './registrarventas.page.html',
  styleUrls: ['./registrarventas.page.scss'],
})
export class RegistrarventasPage implements OnInit {
  
  usuarios:any = [];
  clientes:any= [];
  cod:any;
  txt_producto:string;
  txt_precio:string;
  txt_cantidad:string;
  txt_total:string;
  objetos:any=[];
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
  agregar(){
    
    if(this.txt_producto=='Botellones'){
      this.txt_precio='0.90'
      var r=parseFloat(this.txt_cantidad)*parseFloat(this.txt_precio);
      this.txt_total=r.toString();
    }else{
      this.txt_precio='0.90'
      var r=parseFloat(this.txt_cantidad)*parseFloat(this.txt_precio);
      this.txt_total=r.toString();
    }
    console.log(this.txt_total);
    let list: Array<any> = [];
    {
      this.txt_producto='',
      this.txt_cantidad='',
      this.txt_precio='',
      this.txt_total=''
    }

  }
  ionViewDidEnter(){
    
    this.MostrarClientes();
    
    }
    ionViewDidEnter1(){
      
      this.MostrarUsuarios();
      
      }
    
    MostrarClientes(){
      let body={
        'accion':'ListarC1',
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
        'accion':'mostrar',
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