import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoomifyComponent } from './boomify/boomify.component';

const routes: Routes = [
  { path: 'boomify', component: BoomifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
