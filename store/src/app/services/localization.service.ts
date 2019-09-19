import { Injectable } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  currentLang = 'en';
  availableLang = ['en', 'he', 'fr'];
  menuItem$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.menuItem$ = new BehaviorSubject<any>({});
    this.http.get('/assets/localization.json').toPromise().then(
      (res: any[]) => {
        // Success
        this.menuItem$.next(res);
      }
    );
  }

  changeLang(event: MatSelectChange) {
    this.currentLang = event.value;
  }
}
