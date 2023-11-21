import { Routes } from '@angular/router';
import {CreateComponent} from "./places/create/create.component";
import {HomeComponent} from "./home/home.component";
import {PlaceHomeComponent} from "./places/place-home/place-home.component";
import {CreatetipComponent} from "./places/createtip/createtip.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create', component: CreateComponent},
  { path: 'create/placeHome', component: PlaceHomeComponent},
  { path: 'create/placeHome/createTip', component: CreatetipComponent}
];
