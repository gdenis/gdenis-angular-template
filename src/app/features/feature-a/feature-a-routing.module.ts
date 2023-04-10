import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Page1Component } from "./pages/page1/page1.component";
import { Page2Component } from "./pages/page2/page2.component";
import { Page3Component } from "./pages/page3/page3.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "Page1",
    },
    children: [
      {
        path: "",
        data: {
          breadcrumb: null,
        },
        component: Page1Component,
      },
      {
        path: "page2/:id",
        data: {
          breadcrumb: "Page2",
        },
        children: [
          {
            path: "",
            data: {
              breadcrumb: null,
            },
            component: Page2Component,
          },
          {
            path: "page3/:id",
            data: {
              breadcrumb: "Page3",
            },
            children: [
              {
                path: "",
                data: {
                  breadcrumb: null,
                },
                component: Page3Component,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureARoutingModule {}
