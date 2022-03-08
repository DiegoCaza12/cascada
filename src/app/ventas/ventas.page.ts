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
  id = ''
  bandera = false
  isUpdate = false
  team:Team3 = {fecha:'', idcliente:'', idusuario:'', total:''}
  ListTeam:Team3 []
  txt_fecha:string;
  
  constructor(public apiService:AccesoService,
              public toastController: ToastController,
              public alertController: AlertController) 
  { 
    this.LoadTeam3();
    
  }

  ngOnInit() {
  }
  public openAndCloseModal():void{
    this.bandera = !this.bandera
    this.isUpdate = false
    this.clearInput()
}
public LoadTeam3():void{
  this.apiService.getTeams3().subscribe(
    (response) => { 
      this.ListTeam = response
     },
    (error) => { console.log(error) })
}
public save():void{
  if(this.isUpdate){
    this.apiService.updateTeam3(this.team).subscribe(
      (response) => { 
         this.presentToast(response)
         this.clearInput()
         this.LoadTeam3()
         this.isUpdate = false
       },
      (error) => { console.log(error) }) 

  }else{
    this.apiService.addTeam3(this.team).subscribe(
      (response) => { 
         this.presentToast(response)
         this.clearInput()
         this.LoadTeam3()
       },
      (error) => { console.log(error) })  
  }
  
 }
 public delete():void{
  this.apiService.deleteTeam3(this.id).subscribe(
    (response) => { 
       this.presentToast(response)
       this.LoadTeam3()
     },
    (error) => { console.log(error) })
}

 public getId3(id:string):void{
   this.id = id
   this.presentAlertConfirm()
 }

 public getTeam3(id:string):void{
  this.apiService.getTeam3(id).subscribe(
    (response) => { 
      const {id, fecha, idcliente, idusuario,total} = response
      this.team.id = id 
      this.team.fecha = fecha
      this.team.idcliente = idcliente
      this.team.idusuario = idusuario
      this.team.total = total
      this.isUpdate = true
      this.bandera = true
     },
    (error) => { console.log(error) })
 }

 public clearInput():void{
   this.team.fecha = '';
   this.team.idcliente = '';
   this.team.idusuario = '';
   this.team.total = '';
 }

 async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirmación',
    message: '<strong>Desea Eliminar</strong>!!!',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'danger',
        handler: () => {
          return false;
        }
      }, {
        text: 'Ok',
        handler: () => {
         this.delete()
        }
      }
    ]
  });

  await alert.present();
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