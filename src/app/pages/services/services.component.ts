import { Component } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor( private service: FeaturesService ){}
 featureData:any;

  ngOnInit(): void {
    this.featureData=this.service.featureDetails;
  }

}
