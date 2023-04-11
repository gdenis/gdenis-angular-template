import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { CoreComponent } from "./core.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { NavigationService } from "./services/navigation-service/navigation.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CoreComponent, NavigationComponent, BreadcrumbComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  providers: [NavigationService],
  exports: [NavigationComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log("parentModule", parentModule);
    this.throwIfAlreadyLoaded(parentModule, `CoreModule`);
  }

  throwIfAlreadyLoaded(parentModule: CoreModule, moduleName: string) {
    if (parentModule) {
      throw new Error(
        `${moduleName} has already been loaded. Import core module in the app module only.`
      );
    }
  }
}
