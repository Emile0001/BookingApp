import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoomComponent } from './pages/admin/room/room.component';
import { AdminRoomAmenityComponent } from './pages/admin/room/amenity/amenity.component';

const routes: Routes = [
  {path:"", component: ClientComponent},
  {path:"admin", component: AdminComponent, children:[
    {path:"room", component: AdminRoomComponent, children:[
      {path:"amenity", component: AdminRoomAmenityComponent}
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
