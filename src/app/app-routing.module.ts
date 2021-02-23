import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CounterComponent } from './pages/counter/counter.component'
​
​
const routes: Routes = [
    //so we are adding paths into our routes array so we can access them on the front end or have them direct to respective component
  { path: "main", component: MainComponent },
  { path: "counter", component: CounterComponent },
  //this is the wildcard to direct 
  { path: "**", component: MainComponent }
];
​
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }