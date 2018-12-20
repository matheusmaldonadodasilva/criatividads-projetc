import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  HomePage = true;
  SearchPage = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public appCtrl: App) {

      if(this.SearchPage == true && this.HomePage == false){
        this.navCtrl.push(TabsPage);
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
