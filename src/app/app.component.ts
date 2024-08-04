import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { MainComponent } from './shared/ui/main/main.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Idioma por defecto
  }

  ngAfterViewInit() {
    const cursor = document.getElementById('cursor') as HTMLDivElement;

    window.onmousemove = (e) => {
      cursor.style.top = `${e.pageY}px`;
      cursor.style.left = `${e.pageX}px`;
    };

    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('mouseover', () => cursor.classList.add('link-hover'));
      link.addEventListener('mouseleave', () => cursor.classList.remove('link-hover'));
    });
  }
}
