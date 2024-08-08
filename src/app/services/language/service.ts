// language.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languages = ['es', 'en'];

  constructor(private translateService: TranslateService) { }

  getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }

  getNextLanguage(): string {
    const currentLanguage = this.getCurrentLanguage();
    const currentIndex = this.languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % this.languages.length;
    return this.languages[nextIndex];
  }

}