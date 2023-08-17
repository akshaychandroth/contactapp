import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [

  {
    path: '',redirectTo:'/contacts/admin', pathMatch:'full'

  },
  {
    path : 'contacts/admin', component:ContactManagerComponent
  },
{
  path : 'contacts/add',component:AddContactComponent

},
{
  path:'contacts/edit/:contactId', component :UpdatecontactComponent 
}, 
{
  path : 'contacts/view/:contactId', component:ViewContactComponent
},
 {

  path:'**' , component:PageNotfoundComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
