import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/project/forms.component';
import { CreatepinComponent} from './pages/createpin/createpin.component';
import { UpdatepinComponent} from './pages/updatepin/updatepin.component';
import { CreateActivityComponent} from './pages/activity/create-activity/create-activity.component';
import { PlanComponent} from './pages/planing/plan/plan.component';
import{ UpdateplanComponent } from './pages/updateplan/updateplan/updateplan.component';
import { UpdateActivityComponent} from './pages/activity/update-activity/update-activity.component';

import { ReportingComponent} from './pages/reporting/reporting.component';

const routes: Routes = [
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'createpin', component: CreatepinComponent},
  {path: 'updatepin', component: UpdatepinComponent},
  {path: 'createactivity', component: CreateActivityComponent},
  {path: 'updateactivity', component:UpdateActivityComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'updateplan', component: UpdateplanComponent},
  {path:'reporting', component:ReportingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
