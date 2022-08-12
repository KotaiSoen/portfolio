import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  focus: boolean[] = [];

  emailForm = this.fb.group({
    name : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    content : ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  submit(e: Event) {
    emailjs.sendForm('service_hkrgpsp', 'template_4wi4qce', e.target as HTMLFormElement, '5n41wNUDqdMw4HnvM')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  onFocus(index: number) {
    this.focus[index] = true;
  }

  onBlur(index: number) {
    this.focus[index] = false;
  }

}
