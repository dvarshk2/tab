import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordianComponent } from './accordian/accordian.component';
import { CheckInStatusComponent } from './check-in-status/check-in-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AccordianComponent,
    CheckInStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
