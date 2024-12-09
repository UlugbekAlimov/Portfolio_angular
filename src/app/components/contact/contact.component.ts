import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

export interface contactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  contactForm: FormGroup;   
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(0)]],
      email:['', [Validators.required, Validators.email]],
      message:['', [Validators.required, Validators.minLength(0)]],
    })
  }


  sendEmail(): void {
    if (this.contactForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    // Привязываем интерфейс
    const formValues: contactForm = this.contactForm.value;

    emailjs
      .send(
        'service_eyoffha', // Замените на ваш Service ID
        'template_rna03el', // Замените на ваш Template ID
        {
          user_name: formValues.name,
          user_email: formValues.email,
          message: formValues.message,
        },
        'FNz5CGqKh4n-VsU5U' // Замените на ваш Public Key
      )
      .then(
        () => {
          console.log('Email sent successfully!');
          alert('Email sent successfully!');
          this.contactForm.reset(); // Сброс формы
        },
        (error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send email. Please try again.');
        }
      );
  }
}
