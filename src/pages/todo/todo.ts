import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';


@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  constructor(public mDBProvider: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mDBProvider.createDatas();
  }

  onItemChanged(item) {
    console.log("xxxx", item);

  }
  onClickDelete(item) {
    this.mDBProvider.removeItem(item);
  }

  onClickCreateTodo() {
    console.log("xxx");
    this.navCtrl.push("TodoDetailPage");
  }

}
