import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Mycontact } from 'src/model/myContact';
import { Mygroup } from 'src/model/myGroup';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit   {

  contactId:string=''
  contact:Mycontact={} as Mycontact
  groups:Mygroup[]=[] as Mygroup[]
  constructor(private activateRoute:ActivatedRoute,private api:ApiService,private router:Router){}

    ngOnInit():void {


      this.activateRoute.params.subscribe((data:any)=>{
        console.log(data['contactId']);
        this.contactId=data['contactId']
        
      })

      // call for getting particular contact
      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        this.contact=data

      })

      this.api.getAllGroups().subscribe((data:any)=>{
        this.groups=data
      })
    }


    updateContact(){
      this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
        this.router.navigateByUrl('')

      })

    }


}
