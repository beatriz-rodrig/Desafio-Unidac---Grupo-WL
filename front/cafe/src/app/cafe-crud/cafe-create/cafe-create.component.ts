import { AlertService } from './../../service/alert.service';
import { CafeService } from './../../service/cafe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cafe } from 'src/app/model/cafe.model';



@Component({
  selector: 'app-cafe-create',
  templateUrl: './cafe-create.component.html',
  styleUrls: ['./cafe-create.component.css']
})
export class CafeCreateComponent implements OnInit {

  cafe: Cafe = new Cafe()

  constructor(
    private router: Router,
    private cafeService: CafeService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
  
  }

  createCafe(){
   
    this.cafeService.postCafe(this.cafe).subscribe((resp: Cafe)=>{
      this.cafe = resp
      this.alert.alertSuccess('Colaborador cadastrado com sucesso.')
      this.router.navigate(['/cafe'])

    }, erro =>{
      if(erro.status == 401){
        this.alert.alertDanger('CPF ou tipo de café já cadastrado. Por favor, cadastrar outro.')
      }
      if(erro.status == 400){
        this.alert.alertInfo('Por favor, preencha todos os campos com dados válidos!')
      }
    })
  }

}

