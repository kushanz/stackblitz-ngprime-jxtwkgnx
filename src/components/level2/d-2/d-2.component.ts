import { Component, inject } from '@angular/core';
import {ColorChangeService} from '../../../services/colorchange.service'

@Component({
  selector: 'd-2',
  imports: [],
  templateUrl: './d-2.component.html',
  styleUrl: './d-2.component.css'
})
export class D2Component {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

}
