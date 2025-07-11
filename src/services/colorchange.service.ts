import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorChangeService {
  private colors = ['lightblue', 'lightgreen', 'yellow', 'pink', 'orange', 'lightcoral'];
  private colorIndex = 0;

  getNextColor(): string {
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    return this.colors[this.colorIndex];
  }

  getCurrentColor(): string {
    return this.colors[this.colorIndex];
  }

  reset(): void {
    this.colorIndex = 0;
  }
}