import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Company } from '../../types/companies/company';
import { CompanyService } from '../services/service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edit-company',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './editCompany.html',
  styleUrl: './editCompany.css',
})
export class EditCompany {
  companyId: any;
  especificCompany: Company[] | any;
  isModalOpen = false;

  registrationEntities: any[] = [];
  selectedEntityKey!: number;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('id');

    this.getCompany();
    this.getResgistration();

    if (
      this.especificCompany &&
      this.especificCompany.solicitante.date_nascimento
    ) {
      this.especificCompany.solicitante.date_nascimento = this.formatDate(
        this.especificCompany.solicitante.date_nascimento
      );
    }
  }

  getCompany() {
    this.companyService
      .getEspecificCompany(this.companyId)
      .subscribe((data) => {
        this.especificCompany = data;
        this.selectedEntityKey =
          this.especificCompany.empresa.co_entidade_registro;
      });
  }

  getResgistration() {
    this.companyService.listRegistrationEntity().subscribe((entities) => {
      this.registrationEntities = entities;
    });
  }

  formatDate(date: string): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  onSubmit() {
    this.companyService
      .updateCompany(this.especificCompany, this.companyId)
      .subscribe();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.router.navigate(['']);
  }
}
