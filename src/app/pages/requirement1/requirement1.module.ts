import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Requirement1PageRoutingModule } from './requirement1-routing.module';

import { Requirement1Page } from './requirement1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Requirement1PageRoutingModule
  ],
  declarations: [Requirement1Page]
})
export class Requirement1PageModule {}
