import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './core/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'adler';
  isLoading = this.loaderService.showLoader$;
  constructor(private loaderService: LoaderService) {}

}
