import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

interface Car {
  // value: string;
  viewValue: string;
  price:number;
}



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['2W', '4W'];
  filteredOptions!: Observable<string[]>;

  cars: Car[] = [
    {viewValue: 'Volvo',price:2000},
    {viewValue: 'Saab',price:3000},
    {viewValue: 'porche',price:4000},
    {viewValue: 'bmw',price:5000},
    {viewValue: 'audi',price:6000},
    {viewValue: 'mustang',price:7000},

  ];
  selectedCar:any

  
  rValue: '2' | '1' = '2';

  constructor() { }

  ngOnInit(): void {
console.log(this.rValue);


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
