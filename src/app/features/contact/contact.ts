import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;

  onSubmit(): void {
    // Replace with a real form service or API call
    console.log('Form submitted:', this.form);
    this.submitted = true;
  }
}
