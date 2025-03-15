import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config'
import { ApplicationComponent } from './components/application/application.component'

@Component({
  selector: 'app-root',
  imports: [ApplicationComponent],
  template: `
    <application></application>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig).catch((err) => console.log(err));
