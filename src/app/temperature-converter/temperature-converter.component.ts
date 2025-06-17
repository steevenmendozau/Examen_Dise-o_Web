import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TemperatureConverterComponent {
  temperature: number = 0;
  result: number = 0;
  isCelsius: boolean = true;

  convertToFahrenheit(): void {
    this.result = (this.temperature * 9 / 5) + 32;
    this.isCelsius = false;
  }

  convertToCelsius(): void {
    this.result = (this.temperature - 32) * 5 / 9;
    this.isCelsius = true;
  }

  reset(): void {
    this.temperature = 0;
    this.result = 0;
    this.isCelsius = true;
  }
}
