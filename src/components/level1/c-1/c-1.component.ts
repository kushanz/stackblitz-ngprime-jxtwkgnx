import { Component, inject } from '@angular/core';
import { F2Component } from '../../level2/f-2/f-2.component'
import {ColorChangeService} from '../../../services/colorchange.service'

@Component({
  selector: 'c-1',
  imports: [F2Component],
  templateUrl: './c-1.component.html',
  styleUrl: './c-1.component.css'
})
export class C1Component {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

}
