import { Component, OnInit } from '@angular/core';
import { WhyUsService } from 'src/app/services/why-us.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
 constructor(private service : WhyUsService){}
 whyUsData:any;
 exploreData:any;
 
 ngOnInit(): void {
  this.whyUsData = this.service.whyUsDetails;
  this.exploreData = this.service.exploreDetails;
  }
  
}
