import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyDetail } from '../companyDetail/companyDetail';
import { CompanyService } from '../services/service';
import { Company } from '../../types/companies/company';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterOutlet, CompanyDetail, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class AppOrder implements OnInit {
  @Input() Company: any;
  companyData: any;
  isDetailOpen = false;
  selectedCompany: any;

  constructor(private companyService: CompanyService) {}

  company = {} as Company;
  companies: Company[] | any;

  ngOnInit() {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyService.getCompany().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  openCompanyDetail(company: Company) {
    this.selectedCompany = company;
    this.isDetailOpen = true;
  }

  closeDetail(): void {
    this.isDetailOpen = !this.isDetailOpen;
  }
}
