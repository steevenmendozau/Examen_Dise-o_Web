import { Component } from '@angular/core';
import { TemperatureConverterComponent } from "./temperature-converter/temperature-converter.component";

@Component({
  selector: 'app-root',
  imports: [TemperatureConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen1';
}
