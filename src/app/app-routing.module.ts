import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastDetailsComponent } from './forecast-details/forecast-details.component';
import { UnknownLocationComponent } from './unknown-location/unknown-location.component';

const routes: Routes = [
  { path: 'unknown', component: UnknownLocationComponent },
  { path: ':location', component: ForecastDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
