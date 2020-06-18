import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SwapiListComponent } from "./swapi-list/swapi-list.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },

  {
    path: "list",
    component: SwapiListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
