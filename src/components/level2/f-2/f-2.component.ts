import { Component, inject } from '@angular/core';
import {ColorChangeService} from '../../../services/colorchange.service'

@Component({
  selector: 'f-2',
  imports: [],
  templateUrl: './f-2.component.html',
  styleUrl: './f-2.component.css'
})
export class F2Component {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

}
