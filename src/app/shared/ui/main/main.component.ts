import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienceComponent } from '../experience/experience.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslateModule, ExperienceComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
