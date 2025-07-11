import { Component } from '@angular/core';
import {A1Component} from '../level1/a-1/a-1.component'
import {B1Component} from '../level1/b-1/b-1.component'
import {C1Component} from '../level1/c-1/c-1.component'

@Component({
  selector: 'root',
  imports: [A1Component,B1Component,C1Component],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

}
