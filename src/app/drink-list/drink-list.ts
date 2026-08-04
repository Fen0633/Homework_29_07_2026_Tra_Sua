import { Component, signal, computed, inject } from '@angular/core';
import { DrinkService } from '../drink-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drink-list',
  imports: [RouterLink],
  templateUrl: './drink-list.html',
  styleUrl: './drink-list.css',
})
export class DrinkList {

  protected readonly drinkService = inject(DrinkService);
  protected readonly searchDrink = signal<string>('');

  protected readonly thuTuSapXepGia = signal<'tang' | 'giam' | null>(null);

  protected readonly chonLocDrink = computed (() => {
    const keyword = this.searchDrink().trim().toLowerCase();
    if(!keyword)
    {
      return this.drinkService.drinks();
    }
    return this.drinkService.drinks().filter((drink) =>
      drink.name.toLowerCase().includes(keyword) ||
      drink.description.toLowerCase().includes(keyword));
  });

  protected readonly dsHienThi = computed(() => {
    const ds = this.chonLocDrink();
    const kieuSapXep = this.thuTuSapXepGia();
    if(!kieuSapXep){
      return ds;
    }
    const banSao = [...ds];
    return banSao.sort((a, b) => 
      kieuSapXep === 'tang' ? a.giaCoBan - b.giaCoBan : b.giaCoBan - a.giaCoBan);
  })

  protected readonly soKetQua = computed(() => this.dsHienThi().length);

  protected sapXepGiaTang(): void{
    this.thuTuSapXepGia.set('tang');
  }

  protected sapXepGiaGiam(): void{
    this.thuTuSapXepGia.set('giam');
  }
  //protected only chonLocDrink = com

  protected readonly monDatNhat = computed(() => {
    const giaCaoNhat = Math.max(...this.drinkService.drinks().map((mon) => mon.giaCoBan));
    return this.drinkService.drinks().find((mon) => mon.giaCoBan === giaCaoNhat)?.id;
  });


  protected timKiem(keyword: string):void{
    this.searchDrink.set(keyword);
  }
}
