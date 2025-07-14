import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {E2Component} from '../../level2/e-2/e-2.component'
import {ColorChangeService} from '../../../services/colorchange.service'

@Component({
  selector: 'b-1',
  imports: [E2Component],
  templateUrl: './b-1.component.html',
  styleUrl: './b-1.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class B1Component {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

}
