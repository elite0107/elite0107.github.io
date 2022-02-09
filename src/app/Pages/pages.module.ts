import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [ CommonModule ],
  exports: [
    DashboardComponent,
    NotFoundComponent
  ]
})

export class PagesModule { };