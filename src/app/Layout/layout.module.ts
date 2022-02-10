import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";

@NgModule({
  imports: [ CommonModule ],
  exports: [
    HeaderModule,
    FooterModule
  ]
})

export class LayoutModule {};