import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBPA92HCscdujyuKQVcygiz-PRvKf3ZlK4",
      authDomain: "bookshelves-ba023.firebaseapp.com",
      databaseURL: "https://bookshelves-ba023.firebaseio.com",
      projectId: "bookshelves-ba023",
      storageBucket: "bookshelves-ba023.appspot.com",
      messagingSenderId: "712007443950",
      appId: "1:712007443950:web:80ee5bdae3c2e7fad55aff",
      measurementId: "G-4R80GRDZ1B"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
