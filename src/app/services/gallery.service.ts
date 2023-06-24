import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  galleryDetails = [
    {
      image:"../../assets/img/hillnest-garden.webp",
      name: "Resorts",
      category: "Resort"
    },
    {
      image:"../../assets/img/garden-view.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/resort.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/balcony-view.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/sit-out-1.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/hall.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/living-room.jpg",
      name: "Resort3",
      category: "Resort"
    },
    {
      image:"../../assets/img/room-2.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/room-3.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/room-4.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/room1.jpg",
      name: "Resort6",
      category: "Resort"
    },
    {
      image:"../../assets/img/dining.jpg",
      name: "Resort2",
      category: "Resort"
    },
    {
      image:"../../assets/img/garden1.jpg",
      name: "Resort4",
      category: "Resort"
    },
    {
      image:"../../assets/img/garden2.jpg",
      name: "Resort5",
      category: "Resort"
    },
    {
      image:"../../assets/img/roof-top.jpg",
      name: "Resort5",
      category: "Resort"
    },
    {
      image:"../../assets/img/rest-room.jpg",
      name: "Resort5",
      category: "Resort"
    }
  ]
}
