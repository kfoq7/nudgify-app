import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, RouterLink],
})
export class HomePage {
  constructor() {}
}
