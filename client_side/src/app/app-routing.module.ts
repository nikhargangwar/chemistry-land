import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { HomeComponent } from './pages/home/home.component';
import { AddNewCompoundComponent } from './pages/add-new-compound/add-new-compound.component';
import { UpdateCompoundComponent } from './pages/update-compound/update-compound.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
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
  path:'compounds/update/:id',
  component: UpdateCompoundComponent
},
  {
    path: 'compounds',
    component: HomeComponent
  },
  { path: '**', 
  component:NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
