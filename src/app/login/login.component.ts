import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  nama = 'Rivaldo Briliandy';
  nim = '222102510';
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnInit(): void {}
}
