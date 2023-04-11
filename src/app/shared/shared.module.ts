import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastModule } from "primeng/toast";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { DropdownModule } from "primeng/dropdown";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";
import { HttpClient } from "@angular/common/http";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";

const PRIMENG_MODULES = [
  BreadcrumbModule,
  DropdownModule,
  ToastModule,
  MenubarModule,
  ButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PRIMENG_MODULES,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [PRIMENG_MODULES, TranslateModule],
})
export class SharedModule {}
