import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { LanguageService } from '../../../services/language/service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private languageService: LanguageService) { }

  changeLanguage(): void {
    const nextLanguage = this.languageService.getNextLanguage();
    this.languageService.changeLanguage(nextLanguage);
  }
}
