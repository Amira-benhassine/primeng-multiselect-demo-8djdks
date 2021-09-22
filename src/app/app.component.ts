import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { CountryService } from './countryservice';
import { MultiSelect } from 'primeng/multiselect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountryService],
})
export class AppComponent {
  selectedCities: string[] = [];

  selectedCountries1: string[] = [];
  limitSelect: number = 1;
  selectedCountries2: string[] = [];

  items: SelectItem[];

  item: string;

  cities: any[];

  countries: any[];

  constructor(
    private countryService: CountryService,
    private primengConfig: PrimeNGConfig
  ) {
    this.items = [];

    this.countryService.getCountries().then((countries) => {
      this.items = countries;
    });

    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  @ViewChild('dataSelect', { static: true }) dataSelect: MultiSelect; // declare ViewChild

  ngOnInit() {
    this.primengConfig.ripple = true;
    //this.dataSelect.selectionLimit=1;
  }
  test() {
    console.log(this.selectedCountries2);
    this.dataSelect.maxSelectionLimitReached =
      this.selectedCountries2.length >= 1;
    this.limitSelect = this.selectedCountries2.length >= 1 ? 1 : null;
  }
}
