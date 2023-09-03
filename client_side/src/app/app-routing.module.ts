import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path: 'compounds/:id',

    component: CardDetailsComponent
  },

  {
    path: 'compounds',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
