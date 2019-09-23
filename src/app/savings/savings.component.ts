import { Component, OnInit } from '@angular/core';
import {InterestService} from '../Services/interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private interestService:InterestService) { }

   Total: number;
  // Amount: number = 5000;
  // interestRate: number = 0.01;
  // annualCompound: number = 1;
   years: number;
  
   calculateinterest(): void {
  // for (var counter: number = 1; counter < this.years + 1; counter++) {
  // this.Total = this.Amount * Math.pow((1 +
  // this.interestRate / this.annualCompound),
  // (this.annualCompound * counter));
  //  }
  this.Total = this.interestService.calculateinterest(this.years);
  }

  ngOnInit() {
  }

}
