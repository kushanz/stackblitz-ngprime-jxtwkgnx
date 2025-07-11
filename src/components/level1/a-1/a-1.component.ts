import { Component, DoCheck, inject } from '@angular/core';
import {D2Component} from '../../level2/d-2/d-2.component'
import {ColorChangeService} from '../../../services/colorchange.service'

@Component({
  selector: 'a-1',
  imports: [D2Component],
  templateUrl: './a-1.component.html',
  styleUrl: './a-1.component.css'
})
export class A1Component implements DoCheck {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }
}
