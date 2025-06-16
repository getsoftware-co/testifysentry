import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})

export class RegisterPage implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async register(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.router.navigateByUrl('/login');
    } catch (e) {
    }
  }

  ngOnInit() {
  }
}
