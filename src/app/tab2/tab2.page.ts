import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name: string = '';

  constructor(private storage: Storage) {
    
  }

  ionViewWillEnter() {
    this.storage.ready().then(
      () => this.storage.get('name').then(
        (value) => this.name = value
      )
    );
  }
}
