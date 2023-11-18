import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.log('Welcome to my app!')

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
