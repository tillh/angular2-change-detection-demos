import {Component, NgZone, ElementRef} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-twelve',
  template: `
    <a>Cmp12</a>
  `
})
export class ComponentTwelve {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
