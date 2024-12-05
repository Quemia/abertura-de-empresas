import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'company-detail',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './companyDetail.html',
  styleUrl: './companyDetail.css',
})
export class CompanyDetail {
  @Input() companies: any;

  constructor(private router: Router) {}

  editCompany(id: any) {
    console.log('Edit', id);
    this.router.navigate([`edit-company/${id}`]);
  }
}
