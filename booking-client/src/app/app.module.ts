import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TableComponent } from './components/table/table.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoomComponent } from './pages/admin/room/room.component';
import { AdminRoomAmenityComponent } from './pages/admin/room/amenity/amenity.component';
import { ClientComponent } from './pages/client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FiltersComponent,
    SearchBarComponent,
    TableComponent,
    AdminComponent,
    AdminRoomComponent,
    AdminRoomAmenityComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
