import { Component } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
 
  constructor( private service: GalleryService ){}
  galleryData:any;

  ngOnInit(): void {
    this.galleryData=this.service.galleryDetails;
  }

}
