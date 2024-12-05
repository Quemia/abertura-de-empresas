import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class AppNavbar {
  title = 'Pedidos de Abertura da empresa';
  showButton: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavbar(event.url);
      }
    });
  }

  openRegister() {
    this.router.navigate(['/register-company']);
  }

  updateNavbar(url: string): void {
    if (url.includes('/register-company') || url.includes('/edit-company')) {
      this.title = 'Solicitar Abertura da Empresa';
      this.showButton = false;
    } else {
      this.title = 'Pedidos de Abertura da Empresa';
      this.showButton = true;
    }
  }
}
