import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { F2Component } from '../../level2/f-2/f-2.component'
import {ColorChangeService} from '../../../services/colorchange.service'
import { signalService } from '../../../services/signalSrvc.service';

@Component({
  selector: 'c-1',
  imports: [F2Component],
  templateUrl: './c-1.component.html',
  styleUrl: './c-1.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class C1Component {
  private colorchange = inject(ColorChangeService)
  private signalSrvc = inject(signalService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

  signalIncrementButton() {
    this.signalSrvc.incrementCount()
  }

}
