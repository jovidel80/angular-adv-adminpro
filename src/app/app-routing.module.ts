import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AuthRoutingModule } from './auth/auth-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
