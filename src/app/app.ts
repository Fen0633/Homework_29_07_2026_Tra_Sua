import { Component, signal, computed } from '@angular/core';
import { JsonPipe} from '@angular/common';
import { DrinkModel, Topping } from './models';
import { MOCK_DRINKS } from './mock-drinks';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bai-tap-tra-sua');
  protected readonly name = signal('Trà Sữa bru');

  protected readonly chonMon = signal<DrinkModel>(MOCK_DRINKS[0]);
  protected readonly soLy = signal(1);

  protected tongTien = computed(() => {
    const loaiTra = this.chonMon();
    const soPhan = this.soLy();
    return loaiTra.giaCoBan * soPhan;
  });

  protected tongTienSpecial = computed(() => {
    const loaiTra = this.chonMon();
    const soPhan = this.soLy();
    if(this.soLy() >= 5)
    {
      return (loaiTra.giaCoBan * soPhan) - (loaiTra.giaCoBan * soPhan)* 0.1;
    }
    return loaiTra.giaCoBan * soPhan;
  });
  
  protected tongTopping = computed(()=> {
    const loaiTra = this.chonMon();
    const soPhan = this.soLy();
    return loaiTra.toppings.reduce((acc, toppings: Topping) => acc + toppings.quantity, 0) * soPhan;
  });



  protected readonly toppingCanDung = computed(() =>{
    const loaiTra = this.chonMon();
    const soLuong = this.soLy();
    return loaiTra.toppings.map((toppings: Topping) => {
      return {
        name: toppings.name,
        quantity: toppings.quantity * soLuong,
        unit: toppings.unit,
      };
    });
  });

  protected chonTraChanTrauDen(): void {
    this.chonMon.set(MOCK_DRINKS[0]);
  }

  protected chonTraSuaMatcha(): void {
    this.chonMon.set(MOCK_DRINKS[1]);
  }

  protected chonHongTra(): void {
    this.chonMon.set(MOCK_DRINKS[2]);
  }

  protected giamSoLuong(): void{
    if(this.soLy() === 1)
    {
      return;
    }
    this.soLy.update((soLyHienTai) => soLyHienTai - 1);
  }

  protected tangSoLuong(): void{
    this.soLy.update((soLyHienTai) => soLyHienTai + 1);
  }
}
