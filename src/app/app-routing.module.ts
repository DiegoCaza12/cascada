import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'loggin',
    loadChildren: () => import('./loggin/loggin.module').then( m => m.LogginPageModule)
  },
  {
    path: 'admenu',
    loadChildren: () => import('./admenu/admenu.module').then( m => m.AdmenuPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'recliente',
    loadChildren: () => import('./recliente/recliente.module').then( m => m.ReclientePageModule)
  },
  {
    path: 'musuarios',
    loadChildren: () => import('./musuarios/musuarios.module').then( m => m.MusuariosPageModule)
  },
  {
    path: 'ecliente',
    loadChildren: () => import('./client/ecliente/ecliente.module').then( m => m.EclientePageModule)
  },  {
    path: 'producto',
    loadChildren: () => import('./productos/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'reproductos',
    loadChildren: () => import('./productos/reproductos/reproductos.module').then( m => m.ReproductosPageModule)
  },
  {
    path: 'acproducto',
    loadChildren: () => import('./productos/acproducto/acproducto.module').then( m => m.AcproductoPageModule)
  },
  {
    path: 'eproducto',
    loadChildren: () => import('./productos/eproducto/eproducto.module').then( m => m.EproductoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


