import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner/spinner.servicer';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{

  isLoading$ = this.spinnerSvc.isLoading$;
  constructor(private spinnerSvc: SpinnerService){}

  ngOnInit(): void {

  }

}
