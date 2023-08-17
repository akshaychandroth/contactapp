import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mycontact } from 'src/model/myContact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) {}


  // function for get allcontacts

  getAllContacts():Observable<Mycontact>{
    return this.http.get(this.baseUrl)

  }


  // function for viewing a particular contact


  viewContact(ContactId:string){
   return this.http.get(`${this.baseUrl}/${ContactId}`)
  }


  // function for getting a particular groupname
  getGroupName(groupId:string){
   return this.http.get('http://localhost:3000/groups/'+groupId)

  }


  // function for getting allgroups

  getAllGroups(){
   return this.http.get('http://localhost:3000/groups')
  }

  // function for adding newcontact to server

  addContact(contactBody:any){
   return this.http.post(this.baseUrl,contactBody)

  }

  // function for deleting a contact

  deleteContact(ContactId:any){
    return this.http.delete(`${this.baseUrl}/${ContactId}`)
  }

  // function for update

  updateContact(ContactId:any,contactBody:any){
    return this.http.put(`${this.baseUrl}/${ContactId}`,contactBody)

  }


  }
