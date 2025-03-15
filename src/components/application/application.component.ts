import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'application',
  imports: [CommonModule, InputTextModule, FormsModule, MessageModule, ButtonModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {
  text = '';

  msg = '';

  onClick() {
    this.msg = 'Welcome ' + this.text;
  }
}
