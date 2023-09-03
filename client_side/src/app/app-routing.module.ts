import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { HomeComponent } from './pages/home/home.component';
import { AddNewCompoundComponent } from './pages/add-new-compound/add-new-compound.component';

const routes: Routes = [
  {
    path:'compounds/addCompound',
    component:AddNewCompoundComponent
  },
  {
    path: 'compounds/:id',

    component: CardDetailsComponent
  }
,
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
