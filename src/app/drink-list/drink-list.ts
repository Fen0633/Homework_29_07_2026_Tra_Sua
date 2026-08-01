import { Component, signal, computed } from '@angular/core';
import { DrinkDetail } from "../drink-detail/drink-detail";
import { DrinkModel, Topping } from '../models';
import { MOCK_DRINKS } from '../mock-drinks';

@Component({
  selector: 'app-drink-list',
  imports: [DrinkDetail],
  templateUrl: './drink-list.html',
  styleUrl: './drink-list.css',
})
export class DrinkList {

  protected readonly chonMon = signal<DrinkModel>(MOCK_DRINKS[0]);
  protected readonly loaiTras = MOCK_DRINKS;

  protected readonly monDatNhat = computed(() => {
    const giaCaoNhat = Math.max(...this.loaiTras.map((mon) => mon.giaCoBan));
    return this.loaiTras.find((mon) => mon.giaCoBan === giaCaoNhat)?.id;
  });

  protected chonNuoc(loaiTra : DrinkModel) : void{
    this.chonMon.set(loaiTra);
  }

  protected chonTraChanTrauDen(): void {
    this.chonMon.set(MOCK_DRINKS[0]);
  }

  protected chonTraSuaMatcha(): void {
    this.chonMon.set(MOCK_DRINKS[1]);
  }

  protected chonHongTra(): void {
    this.chonMon.set(MOCK_DRINKS[2]);
  }
}
