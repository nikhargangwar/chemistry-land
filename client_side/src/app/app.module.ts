import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { HomeComponent } from './pages/home/home.component';
import { AddNewCompoundComponent } from './pages/add-new-compound/add-new-compound.component';
import { FormsModule } from '@angular/forms';
import { UpdateCompoundComponent } from './pages/update-compound/update-compound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    CardComponent,
    CardDetailsComponent,
    HomeComponent,
    AddNewCompoundComponent,
    UpdateCompoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
