import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from './vigilante.guard';
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
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'recliente',
    loadChildren: () => import('./recliente/recliente.module').then( m => m.ReclientePageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'musuarios',
    loadChildren: () => import('./musuarios/musuarios.module').then( m => m.MusuariosPageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'ecliente',
    loadChildren: () => import('./client/ecliente/ecliente.module').then( m => m.EclientePageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'producto',
    loadChildren: () => import('./productos/producto/producto.module').then( m => m.ProductoPageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'reproductos',
    loadChildren: () => import('./productos/reproductos/reproductos.module').then( m => m.ReproductosPageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'acproducto',
    loadChildren: () => import('./productos/acproducto/acproducto.module').then( m => m.AcproductoPageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'eproducto',
    loadChildren: () => import('./productos/eproducto/eproducto.module').then( m => m.EproductoPageModule)
    ,canActivate:[VigilanteGuard]
  },
  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: 'registrarventas',
    loadChildren: () => import('./registrarventas/registrarventas.module').then( m => m.RegistrarventasPageModule)
  },  {
    path: 'usumenu',
    loadChildren: () => import('./usumenu/usumenu.module').then( m => m.UsumenuPageModule)
  },
  {
    path: 'usu-loggin',
    loadChildren: () => import('./usu-loggin/usu-loggin.module').then( m => m.UsuLogginPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


