import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/project/forms.component';
import { CreatepinComponent } from './pages/createpin/createpin.component';
import { UpdatepinComponent } from './pages/updatepin/updatepin.component';
import { CreateActivityComponent } from './pages/activity/create-activity/create-activity.component';
import { PlanComponent } from './pages/planing/plan/plan.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { UpdateplanComponent } from './pages/updateplan/updateplan/updateplan.component';
import { UpdateActivityComponent } from './pages/activity/update-activity/update-activity.component';
import { ReportingComponent } from './pages/reporting/reporting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    CreatepinComponent,
    UpdatepinComponent,
    CreateActivityComponent,
    PlanComponent,
    UpdateplanComponent,
    UpdateActivityComponent,
    ReportingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    MultiSelectAllModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
