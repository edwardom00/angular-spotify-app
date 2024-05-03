import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'auth', // Todo: localhost:4200/
    loadChildren:() => 
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '', // Todo: localhost:4200/
    component: HomePageComponent, //Se está llamando al home pages y se está cagando un componente.
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
