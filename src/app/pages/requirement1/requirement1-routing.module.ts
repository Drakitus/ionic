import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Requirement1Page } from './requirement1.page';

const routes: Routes = [
  {
    path: '',
    component: Requirement1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Requirement1PageRoutingModule {}
