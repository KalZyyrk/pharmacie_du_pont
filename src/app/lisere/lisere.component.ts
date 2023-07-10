import { Component } from '@angular/core';

@Component({
  selector: 'app-lisere',
  templateUrl: './lisere.component.html',
  styleUrls: ['./lisere.component.css'],
})
export class LisereComponent {
  list = [
    'Prévention & Conseils en matière de Santé',
    'Compléments alimentaires',
    'Cosmétiques & Maquillages',
    'Spagyrie (plantes naturelles)',
    'Homéopathie',
  ];
  flags = [
    { name: 'Français', language: 'fr', flag: '../../assets/fr_flag.svg' },
    { name: 'German', language: 'de', flag: '../../assets/de_flag.svg' },
  ];
}
