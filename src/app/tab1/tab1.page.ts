import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  driver: string = '';
  name: string = '';

  constructor(private storage: Storage) {
    this.storage.ready().then(
      () => this.driver = this.storage.driver
    );
  }

  save() {
    this.storage.set('name',this.name);
  }
}
