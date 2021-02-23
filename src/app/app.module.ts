import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './pages/main/main.component';
import { TestComponent } from './pages/test/test.component';
import { HeaderComponent } from './pages/header/header.component';
import { CounterComponent } from './pages/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent,
    HeaderComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
