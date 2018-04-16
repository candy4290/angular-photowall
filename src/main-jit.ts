import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/index';

if (environment.production) {
  enableProdMode();
}

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    enableProdMode();
  }

console.log('Running JIT compiled');
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
