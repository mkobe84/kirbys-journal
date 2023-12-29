import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
    { path: '', component: HomePageComponent},
    {path: 'journal', component: JournalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
