import { NgModule } from '@angular/core'
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTable, MatTableModule} from '@angular/material/table';


const MaterialComponents=[
MatButtonModule,
MatCheckboxModule,
MatIconModule,
MatInputModule,
MatButtonToggleModule,
MatBadgeModule,
MatProgressSpinnerModule,
MatToolbarModule,
MatSidenavModule,
MatMenuModule,
MatListModule,
MatDividerModule,
MatFormFieldModule,
MatSelectModule,
MatAutocompleteModule,
MatDatepickerModule,
MatTooltipModule,
MatSnackBarModule,
MatDialogModule,
MatTableModule

]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
