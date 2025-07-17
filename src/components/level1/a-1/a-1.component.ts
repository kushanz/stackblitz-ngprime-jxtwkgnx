import { ChangeDetectorRef, Component, DoCheck, inject } from '@angular/core';
import {D2Component} from '../../level2/d-2/d-2.component'
import {ColorChangeService} from '../../../services/colorchange.service'
import {InteractionService} from '../../../services/interaction.service'

@Component({
  selector: 'a-1',
  imports: [D2Component],
  templateUrl: './a-1.component.html',
  styleUrl: './a-1.component.css'
})
export class A1Component implements DoCheck {
  private colorchange = inject(ColorChangeService)
  private interaction = inject(InteractionService)
  private cdRef = inject(ChangeDetectorRef)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }
  incremtneSubjectCount() {
    // setInterval(() => {
      this.interaction.increment()
      // this.cdRef.markForCheck()
    // },1000)
    
  }
}
