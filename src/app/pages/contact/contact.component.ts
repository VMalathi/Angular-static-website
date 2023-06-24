import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactmailService } from 'src/app/services/contactmail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  
  enquiryForm!: FormGroup ;
  submitted=false;
  mailapi:any;
  phoneNumber: string="+919843059092";
  message!: string;
  
  constructor( private formBuilder: FormBuilder, private mailApi: ContactmailService){}

  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      adult:['',[Validators.required]],
      kids:['', [Validators.required]],
      arrival:['', [Validators.required]],
      departure:['', [Validators.required]]
    });
  }

  generateWhatsAppLink() {
    const encodedMessage = encodeURIComponent("Name: "+this.enquiryForm.value.name+"\n"+"Email: "+this.enquiryForm.value.email+"\n"+"Number of Adults : "+this.enquiryForm.value.adult+"\n"+"Number of Kids: "+this.enquiryForm.value.kids+"\n"+"Date of Arrival: "+this.enquiryForm.value.arrival+"\n"+"Date of Departure: "+this.enquiryForm.value.departure);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;

    const tempInput = document.createElement('input');
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    tempInput.value = whatsappUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Optionally, you can open the WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
  }

  onSubmit(){
    this.submitted = true;
    if(this.enquiryForm.invalid){
      return
    }
    else{
      console.log(this.enquiryForm.value);
       this.mailApi.contactMail(this.enquiryForm.value).subscribe((mailresponse:any)=>{
         console.log(mailresponse);
       });
       alert("Email Sent Successfully");
       this.enquiryForm.reset();
    }
    //alert("Success")
  }

}
