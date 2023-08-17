import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Mycontact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  allContacts:Mycontact[]=[]
  searchKey:string=''

  constructor(private api:ApiService){}

  ngOnInit():void {
    this.getAllContact()


  }

  // search

  getAllContact(){
    this.api.getAllContacts().subscribe((data:any)=>{
      console.log(data);
      this.allContacts=data
      
    })
    
  }

  search(event:any){
    console.log(event.target.value);
    this.searchKey = event.target.value
    
  }


  deleteContact(ContactId:any){
    this.api.deleteContact(ContactId).subscribe((data:any)=>{
      this.getAllContact()

    })
  }

}
