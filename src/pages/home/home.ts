import { Component } from '@angular/core';
import { NavController, ViewController, App } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  secondPage = TabsPage;
  HomePage = true;
  SearchPage = true;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public appCtrl: App) {
 
  
 
  }
  


  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  goToTabsPage3(){
    this.navCtrl.push(SearchPage);
  }

  

}
