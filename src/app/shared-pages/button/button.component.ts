import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input('buttonSize')
  size = 'S'; // S-small, M-Medium, L-large

  @Input('buttonShade')
  shade = 'NA'; //D-Dark, W-White, NA

  @Input('buttonAnimation')
  animation = 'NA'; // C-circle, F-Fade, NA

  @Input('buttonName')
  name = '';
}
