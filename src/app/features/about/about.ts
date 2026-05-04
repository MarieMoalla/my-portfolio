import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  skills = ['Angular', 'TypeScript', 'HTML/CSS', 'Node.js', 'SCSS', 'Git'];
}
