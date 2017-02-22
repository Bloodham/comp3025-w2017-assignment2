/*
Ryan Jameson
Assignment 2
COMP3025-W2017
Typescript File
*/
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.listItems = af.database.list('/todoList');
  }

  //methods
  addItem() {
    let prompt = this.alertCtrl.create({
      title: 'To-Do List Item',
      message: "Add a new item to the list!",
      inputs: [
        {
          name: 'item',
          placeholder: 'Item'
        },
        {
          name:'Description',
          placeholder:'Small Item Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.listItems.push({
              item: data.item,
              done: false
            });
          }
        }
      ]
    });
    prompt.present();
  }

  removeItem(itemId: string) {
    this.listItems.remove(itemId);
  }

  updateItem(itemId, itemDescription) {
    let prompt = this.alertCtrl.create({
      title: 'Item Edit',
      message: "Update the item in the List",
      inputs: [
        {
          name: 'item',
          placeholder: 'Item',
          value: itemDescription
        },
        {
          name:'Description',
          placeholder:'Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.listItems.update(itemId, {
              item: data.item
            });
          }
        }
      ]
    });
    prompt.present();
  }

  switchComplete(itemId, itemCompletion) {
    if (itemCompletion == true) {
      this.listItems.update(itemId, {
        done: false
      });
    }
    if (itemCompletion == false) {
      this.listItems.update(itemId, {
        done: true
      });
    }
  }
}
