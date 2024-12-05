import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CompanyService } from '../services/service';
import { Company } from '../../types/companies/company';

@Component({
  selector: 'register-company',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterCompany {
  isModalOpen = false;
  companies: Company[] | any;
  registrationEntities: any[] = [];

  company:
    | {
        solicitante: {
          ds_responsavel: '';
          nu_cpf: '';
          date_nascimento: '';
        };
        empresa: {
          ds_nome_fantasia: '';
          co_entidade_registro: '';
          co_natureza_juridica: '';
          endereco: {
            co_cep: '';
            ds_logradouro: '';
            co_numero: '';
            ds_complemento: '';
            ds_bairro: '';
            ds_municipio: '';
            co_uf: '';
          };
        };
      }
    | any;

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    this.company = {
      solicitante: {
        ds_responsavel: '',
        nu_cpf: '',
        date_nascimento: '',
      },
      empresa: {
        ds_nome_fantasia: '',
        co_entidade_registro: '',
        co_natureza_juridica: '',
        endereco: {
          co_cep: '',
          ds_logradouro: '',
          co_numero: '',
          ds_complemento: '',
          ds_bairro: '',
          ds_municipio: '',
          co_uf: '',
        },
      },
    };

    this.getResgistration()
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.router.navigate(['']);
  }

  onSubmit(forms: FormGroup) {
    this.companyService.postCompany(this.company).subscribe((response) => {
      this.companies.push(response);
      this.openModal();
      forms.reset();
    });
  }

  getResgistration() {
    this.companyService.listRegistrationEntity().subscribe((entities) => {
      this.registrationEntities = entities;
    });
  }
}
