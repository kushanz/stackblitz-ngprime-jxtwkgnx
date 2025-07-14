import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {ColorChangeService} from '../../../services/colorchange.service'
import {G3Component} from '../../level3/g-3/g-3.component'

@Component({
  selector: 'd-2',
  imports: [G3Component],
  templateUrl: './d-2.component.html',
  styleUrl: './d-2.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class D2Component {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

}
