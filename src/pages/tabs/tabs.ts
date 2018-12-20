import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage} from '../home/home';
import { DepartPage } from '../depart/depart';
import { AccountPage } from '../account/account';
import { PromoPage } from '../promo/promo';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DepartPage;
  tab3Root = PromoPage;
  tab4Root = CartPage;
  tab5Root = AccountPage;
  

  constructor(public navCtrl: NavController) {}

}
