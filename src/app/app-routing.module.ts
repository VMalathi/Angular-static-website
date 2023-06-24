import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:'', component:HomeComponent, data: { breadcrumb: 'Home' }},
  {path:'hillNest', component:AboutComponent, data: { breadcrumb: 'About' }},
  {path:'contact', component:ContactComponent, data: { breadcrumb: 'Contact' }},
  {path:'gallery', component:GalleryComponent, data: { breadcrumb: 'Gallery' }},
  {path:'services', component:ServicesComponent, data: { breadcrumb: 'Services' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 