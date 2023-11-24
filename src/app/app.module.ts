import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from "./share/share.module"
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { SpinnerInterceptorInterceptor } from './interceptor/spinner-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
