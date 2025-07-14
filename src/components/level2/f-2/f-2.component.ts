import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {ColorChangeService} from '../../../services/colorchange.service'
import {InteractionService} from '../../../services/interaction.service'

@Component({
  selector: 'f-2',
  imports: [],
  templateUrl: './f-2.component.html',
  styleUrl: './f-2.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class F2Component {
  private colorchange = inject(ColorChangeService)
  private interaction = inject(InteractionService)
  subjectcount:number = 0
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }
  ngOnInit() {
    this.interaction.countSubject.subscribe({
      next:(data)=> {this.subjectcount = data}
    })
  }

}
