import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {LogoPage} from '../pages/logo/logo';
import { FavoritePage} from '../pages/favorite/favorite';
import { TabsPage} from '../pages/tabs/tabs';
import {DepartPage} from '../pages/depart/depart';
import { AccountPage} from '../pages/account/account';
import {PromoPage} from '../pages/promo/promo';
import { SearchPage} from '../pages/search/search';
import {CartPage} from '../pages/cart/cart';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LogoPage,
    FavoritePage,
    TabsPage,
    DepartPage,
    AccountPage,
    PromoPage,
    SearchPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LogoPage,
    FavoritePage,
    TabsPage,
    DepartPage,
    AccountPage,
    PromoPage,
    SearchPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

