import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { PasswordValidationComponent } from './components/password-validation/password-validation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { EditNameComponent } from './components/edit-name/edit-name.component';
import { EditPhoneComponent } from './components/edit-phone/edit-phone.component';
import { EditDobComponent } from './components/edit-dob/edit-dob.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { UploadComponent } from './components/upload/upload.component';
import { MatDialogModule } from '@angular/material/dialog';


const components : any[] = [
  ButtonComponent,
  TableComponent,
  HeaderComponent,
  SideNavComponent,
  InputValidationComponent,
  PasswordValidationComponent,
  FooterComponent,
  LineChartComponent,
  PieChartComponent,
  TableComponent,
  EditNameComponent,
  EditPhoneComponent,
  EditDobComponent,
  EditAddressComponent,
  ConfirmationComponent,
  UploadComponent,
]

@NgModule({
  declarations: [
   ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
