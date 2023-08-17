import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Mycontact } from 'src/model/myContact';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  allGroups:any[]=[]
  contactName:string=''
  contact:Mycontact={} as Mycontact

  constructor(private api:ApiService , private router:Router){}

  ngOnInit():void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data
      
    })
  }

  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{

      // navigate to admin page
      this.router.navigateByUrl('')

    })

  }




}
