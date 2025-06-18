import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})

export class RegisterPage implements OnInit {

  //user: User;
  name = '';
  email = '';
  password = '';
  
  registerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.min(8), Validators.required]]
  });
 
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async register() {
    try {
      await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      this.router.navigateByUrl('/login');
    } catch (e) {
    }
  }

  ngOnInit() {
  }
}
