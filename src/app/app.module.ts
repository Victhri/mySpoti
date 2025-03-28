import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { routes } from './app.routes';
import { CategoryPageModule } from './pages/category-page/category-page.module';
import { AccessTokenInterceptor } from '../interceptors/access-token-interceptor';
import { CallbackModule } from './pages/callback/callback.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    RouterModule, FooterModule, HeaderModule, HomePageModule, CategoryPageModule, CallbackModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
