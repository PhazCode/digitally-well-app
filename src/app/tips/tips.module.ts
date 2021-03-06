import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TipsPage } from './tips.page';
import { TipComponentModule } from '../tip/tip.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: TipsPage
      }
    ])
  ],
  declarations: [TipsPage]
})
export class TipsPageModule {}
