import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor() { }

  featureDetails = [
    {
      image:"bi-house",
      name: "Rooms",
      detail: "Lourde Peter Hill Nest has 4 furnished well rooms with all amenities like hot water, television, heater, etc.,"
    },
    {
      image:"bi-tree",
      name: "Garden",
      detail: "The best greenery area in the home stay more suitable for playing, serving breakfast, and relaxing."
    },
    {
      image:"bi-egg-fried",
      name: "Food",
      detail: "Both vegetarian and non-vegetarian food is cooked and served in the hill nest"
    },
    {
      image:"bi-wifi",
      name: "Wifi",
      detail: "24 hours wifi network is available for anyone to explore the internet"
    },
    {
      image:"bi-taxi-front-fill",
      name: "Transport",
      detail: "Pick Up and drop vehicles are available from Coimbatore airport, railway station, Ooty, Coonoor and Kotagiri bus stand. Vehicle can be organised for local visit in Kotagiri"
    },
    {
      image:"bi-people",
      name: "Customer Satisfaction",
      detail: "Whoever visited Lourde Peter Hill nest will love to visit again and again. It is not just a single vacation to explore Kotagiri. People long to visit again to resist the beauty of nature."
    }
  ]
}
