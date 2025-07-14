import { Component, inject } from '@angular/core';
import { ColorChangeService } from '../../../services/colorchange.service';

@Component({
  selector: 'g-3',
  imports: [],
  templateUrl: './g-3.component.html',
  styleUrl: './g-3.component.css'
})
export class G3Component {
  private colorchange = inject(ColorChangeService)
  ch = ''

  ngDoCheck() {
    this.ch = this.colorchange.getNextColor()
  }

}
