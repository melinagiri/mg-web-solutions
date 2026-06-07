import { Injectable } from '@angular/core';
import { ContactForm } from '../models/project.model';

// Replace these with your real EmailJS credentials
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'aBcDeFgHiJkLmNoP'

declare const emailjs: any;

@Injectable({ providedIn: 'root' })
export class ContactService {
  async send(form: ContactForm): Promise<void> {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  form.name,
      from_email: form.email,
      service:    form.service || 'Not specified',
      message:    form.message,
      to_email:   'mgwebhg@gmail.com'
    });
  }
}