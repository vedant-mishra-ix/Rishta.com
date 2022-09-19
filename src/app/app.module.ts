import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientInterceptor } from './core/interceptor/http-client.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:1000
    }),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:HttpClientInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
