import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements  OnInit {

  ContactId:string = ''
  contact:any
  groupId:any
  groupName:any
  
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}
  ngOnInit():void{
    this.activatedRoute.params
    .subscribe((data:any)=>{

      this.ContactId=data.contactId

      console.log(data);
      
    })

    this.api.viewContact(this.ContactId).subscribe((data:any)=>{
      this.contact=data
      this.groupId=data.groupId

      this.api.getGroupName(this.groupId).subscribe((result:any)=>{
        this.groupName=result.name
      })




      })






      

  
 
      

   
   


  }

}
