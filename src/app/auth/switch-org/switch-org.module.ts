import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwitchOrgPageRoutingModule } from './switch-org-routing.module';
import { SwitchOrgPage } from './switch-org.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchOrgPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    SharedModule,
  ],
  declarations: [SwitchOrgPage],
})
export class SwitchOrgPageModule {}
