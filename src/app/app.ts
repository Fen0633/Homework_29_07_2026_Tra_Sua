import { Component, signal, computed } from '@angular/core';
import { DrinkList } from './drink-list/drink-list';

@Component({
  selector: 'app-root',
  imports: [DrinkList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bai-tap-tra-sua');
  protected readonly name = signal('Trà Sữa bru');

  
}
