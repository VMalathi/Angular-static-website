import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { PhoneComponent } from './phone/phone.component';
import { MailComponent } from './mail/mail.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeadingComponent } from './heading/heading.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SocialLinksComponent,
    PhoneComponent,
    MailComponent,
    FooterComponent,
    BreadcrumbComponent,
    HeadingComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ButtonComponent,
    HeadingComponent
  ]
})
export class SharedPagesModule { }
