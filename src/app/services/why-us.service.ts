import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhyUsService {
 
  constructor() { }

  //Why us details

  whyUsDetails = [
    { list: "Home made food" },
    { list: "Barbeque night" },
    { list: "Indoor games" },
    { list: "Playground garden" },
    { list: "Camp fire" },
    { list: "Hot water facility" }
  ]

  exploreDetails = [
    { list: "Elk falls Suspension bridge" },
    { list: "Long wood shola" },
    { list: "Catherine falls" },
    { list: "Kodanad estate view point" }
  ]
}
