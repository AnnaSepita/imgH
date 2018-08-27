import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { MyQuotesComponent } from './pages/my-quotes/my-quotes.component';
import { NewQuoteComponent } from './pages/new-quote/new-quote.component';
import { OrderModule } from 'ngx-order-pipe';
import { EditComponent } from './pages/edit/edit.component';
import { SelectKioskComponent } from './pages/select-kiosk/select-kiosk.component';
import { CustomComponent } from './pages/custom/custom.component';
import { FullKioskComponent } from './pages/full-kiosk/full-kiosk.component';
import { CompactKioskComponent } from './pages/compact-kiosk/compact-kiosk.component';
import { SelectTabletComponent } from './pages/select-tablet/select-tablet.component';
import { SelectCustomisationsComponent } from './pages/select-customisations/select-customisations.component';
import { SelectEnclosureComponent } from './pages/select-enclosure/select-enclosure.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'pages', component: PagesComponent},
    { path: 'NewQuote', component: MyQuotesComponent },
    { path: 'myQuotes', component:  NewQuoteComponent },
    { path: 'edit', component: EditComponent },
    { path: 'selectKiosk', component: SelectKioskComponent},
    { path: 'custom', component: CustomComponent},
    { path: 'fullKiosk', component: FullKioskComponent},
    { path: 'selectTablet', component: SelectTabletComponent},
    { path: 'selectCustomisations', component: SelectCustomisationsComponent},
    { path: 'selectEnclosure', component: SelectEnclosureComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    MyQuotesComponent,
    NewQuoteComponent,
    EditComponent,
    SelectKioskComponent,
    CustomComponent,
    FullKioskComponent,
    CompactKioskComponent,
    SelectTabletComponent,
    SelectCustomisationsComponent,
    SelectEnclosureComponent
  ],
  imports: [
    BrowserModule,
      OrderModule,
      RouterModule.forRoot(appRoutes)
  ],
    exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
