import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@ViewChild('nameField') nameField: ElementRef;
@ViewChild('messageField') messageField: ElementRef;
@ViewChild('emailField') emailField: ElementRef;
@ViewChild('contactButton') contactButton: ElementRef;
@ViewChild('containerContact') containerContact: any;

wait = false;
mailsending = false;
  constructor(public main: AppComponent) { }


  ngOnInit(): void {
  }

 async sendMail(){
    this.wait = true;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let contactButton = this.contactButton.nativeElement;
    this.disabledContactForm(nameField,emailField,messageField,contactButton)
  
 await this.sendingMail(nameField,emailField,messageField);
    this.MailSent();
    this.wait = false;
    this.cleanContactForm(nameField,emailField,messageField);
    this.activContactForm(nameField,emailField,messageField,contactButton) ;
  }


  MailSent(){
      this.mailsending = true;
      setTimeout(() => {
          this.mailsending= false;
      }, 1500);
  }

 async sendingMail(nameField,emailField,messageField){
    let fd = new FormData();
   fd.append('mail', emailField.value);
   fd.append('name',nameField.value);
    fd.append('message',messageField.value);

    await fetch('https://maximilian-bruhn.developerakademie.net/send_mail2/send_mail.php',
  {
  method: 'POST',
  body: fd
  });
  }

  disabledContactForm(nameField,emailField,messageField,contactButton){
    emailField.disabled = true;
    nameField.disabled = true;
    messageField.disabled = true;
    contactButton.disabled = true;
  }


  activContactForm(nameField,emailField,messageField,contactButton){
    emailField.disabled = false;
    nameField.disabled = false;
    messageField.disabled = false;
    contactButton.disabled = false;
  }


  cleanContactForm(nameField,emailField,messageField){
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }
}
