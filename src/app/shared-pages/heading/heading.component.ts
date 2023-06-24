import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  @Input('subheading')
  subheading = '';

  @Input('headingText1')
  headingText1 = '';

  @Input('headingText2')
  headingText2 = '';

  @Input('headingText3')
  headingText3 = '';

  @Input('align')
  align = '' //center, Left
}
