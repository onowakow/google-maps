import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlpacaComponent } from './alpaca/alpaca.component';
import { DirectionsComponent } from './directions/directions.component';

const routes: Routes = [
  {
    path: 'alpaca',
    component: AlpacaComponent,
  },
  {
    path: 'directions',
    component: DirectionsComponent,
  },
  // {
  //   path: '**', // Wildcard
  //   component:
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
