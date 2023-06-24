import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeRoomsComponent } from './home/home-rooms/home-rooms.component';
import { HomeServicesComponent } from './home/home-services/home-services.component';
import { HomeCtaComponent } from './home/home-cta/home-cta.component';
import { SharedPagesModule } from '../shared-pages/shared-pages.module';
import { WhyUsService } from 'src/app/services/why-us.service';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeAboutComponent,
    HomeRoomsComponent,
    HomeServicesComponent,
    HomeCtaComponent,
    ServicesComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SharedPagesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    ServicesComponent
  ]
})
export class PagesModule { }
