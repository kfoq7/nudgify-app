import { Component, OnInit } from '@angular/core'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonContent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
