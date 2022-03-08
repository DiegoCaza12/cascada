import { Team1 } from './../models/teams1';
import { AccesoService } from './../servicios/acceso.service';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarventas',
  templateUrl: './registrarventas.page.html',
  styleUrls: ['./registrarventas.page.scss'],
})
export class RegistrarventasPage implements OnInit {
  id = ''
  team1:Team1 = {cedula:'',nombre:'',apellido:'',email:'', telefono:'', direccion:''}
  ListTeam:Team1 []
  usuarios:any = [];
  clientes:any= [];
  cod:any;
  txt_fecha:string;
  txt_idcliente:string;
  txt_idusuario:string;
  txt_producto:string;
  txt_precio:string;
  txt_cantidad:string;
  txt_total:string;
  time = new Date(null);
  fecha : Date = new Date();
  constructor(
    public toastController: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    public alertController: AlertController
  ) {
    this.servicio.getsesion('id_usuario').then(res=>{
      this.cod=res;
      });

   }

  ngOnInit() {
    
  }
  agregar(){
    
   
    console.log(this.txt_total);
    

  }
  /*
  public getId1(id:string):void{
    this.id = id
    this.presentAlertConfirm()
  }

  public getTeam1(id:string):void{
   this.apiService.getTeam1(id).subscribe(
     (response) => { 
       const {id,cedula, nombre, apellido,email, telefono,direccion} = response
       this.team1.id = id 
       this.team1.cedula = cedula
       this.team1.nombre = nombre
       this.team1.apellido = apellido
       this.team1.email = email
       this.team1.telefono = telefono
       this.team1.direccion = direccion
       this.isUpdate = true
       this.bandera = true
      },
     (error) => { console.log(error) })
  }*/
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
    
    public guardar(){
      if(this.txt_producto=='Botellones'){
        this.txt_precio='0.90'
        var r=parseFloat(this.txt_cantidad)*parseFloat(this.txt_precio);
        this.txt_total=r.toString();
      }else{
        this.txt_precio='0.90'
        var r=parseFloat(this.txt_cantidad)*parseFloat(this.txt_precio);
        this.txt_total=r.toString();
      }
      if(this.txt_fecha=='')
      {
       this.mostrarToast('nombre producto requerida');
      }
      else if(this.txt_idcliente=='')
      {
        this.mostrarToast('nombre requerido');
      }
      else if(this.txt_idusuario=='')
      {
        this.mostrarToast('nombre requerido');
      }
      else if(this.txt_total=='')
      {
        this.mostrarToast('precio requerido');
      }
      else
      {
        let body={
          'accion': 'insertarV',
          'cod':this.cod,
          'fecha': this.fecha.toISOString(),
          'idcliente': this.txt_idcliente,
          'idusuario': this.txt_idusuario,
          'total': this.txt_total
        }
        console.log(this.txt_total);
        console.log(this.fecha);
        return new Promise (resolve =>{
          this.servicio.postData(body).subscribe((res:any)=>{
            if(res.estado)
            {
              this.mostrarToast("registro satisfactorio");
              this.navCtrl.navigateRoot(['/usuventas']);
            }
            else
            {
              this.mostrarToast('erro al guardar');
            }
          }, (err)=>{
            this.mostrarToast('Error de Conexion');
            console.log(err);
          });
        });
      }
    }
  
  async mostrarToast(texto)
  {
    const toast= await this.toastController.create({
      message: texto,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message:message.msg ,
      duration: 2000,
      color:"primary"
    });
    toast.present();
   }
}