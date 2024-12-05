import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar';
import { AppOrder } from './orderDeatails/order';
import { CompanyDetail } from './companyDetail/companyDetail';
import { RegisterCompany } from './registerPage/register';
import { FormsModule } from '@angular/forms';
import { FirebaseConfigModule } from './firebase.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    AppOrder,
    CompanyDetail,
    RegisterCompany,
    FormsModule,
    FirebaseConfigModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'abertura-de-empresas';
}
