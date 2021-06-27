import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './department/list/list.component';
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { DetailsdepartmentComponent } from './department/detailsdepartment/detailsdepartment.component';
import { HomeComponent } from './shared/home/home.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AdddepartmentComponent,
    DetailsdepartmentComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
