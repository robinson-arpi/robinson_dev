import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  @Input() date!: string;
  @Input() title!: string;
  @Input() url!: string;
  @Input() description!: string;
  @Input() tags!: string[];

  translatedTags: string[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.setTranslatedTags();
  }

  setTranslatedTags() {
    this.tags.forEach(tag => {
      this.translate.get(`tecnologies.${tag.toLowerCase()}`).subscribe((translation: string) => {
        this.translatedTags.push(translation);
      });
    });
  }
}
