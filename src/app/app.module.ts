import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientInterceptor } from './core/interceptor/http-client.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{NgxPaginationModule} from 'ngx-pagination';
<<<<<<< HEAD
import { LoaderInterceptor } from './core/interceptor/loader.interceptor';
import { ShareModule } from './share/share.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut:1000
    }),
    BrowserAnimationsModule,
<<<<<<< HEAD
    NgxPaginationModule,
    ShareModule,
    NgbModule
=======
    NgxPaginationModule
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:HttpClientInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:LoaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
