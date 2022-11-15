import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

 const childRoutes: Routes = [
    { path: ' ', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
 ]


@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
  
})

export class RoutesChildModule { }
