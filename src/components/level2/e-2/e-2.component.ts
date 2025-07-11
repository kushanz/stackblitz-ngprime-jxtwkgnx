import { Component, inject } from '@angular/core';
import {ColorChangeService} from '../../../services/colorchange.service'

@Component({
  selector: 'e-2',
  imports: [],
  templateUrl: './e-2.component.html',
  styleUrl: './e-2.component.css'
})
export class E2Component {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

}
