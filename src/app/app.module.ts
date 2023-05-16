import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { AppendDefaultTextDirective } from './directive/append-default-text.directive';
import { StringUppercasePipe } from './pipe/string-uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyDirectiveDirective,
    AppendDefaultTextDirective,
    StringUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
