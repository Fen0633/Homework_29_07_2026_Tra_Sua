import { Component, signal, computed, input } from '@angular/core';
import { DrinkModel, Topping } from '../models';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-drink-detail',
  imports: [DecimalPipe],
  templateUrl: './drink-detail.html',
  styleUrl: './drink-detail.css',
})
export class DrinkDetail {
  readonly chonNuoc = input.required<DrinkModel>();
  
  protected readonly soLy = signal(1);

  protected tongTien = computed(() => {
    const loaiTra = this.chonNuoc();
    const soPhan = this.soLy();
    return loaiTra.giaCoBan * soPhan;
  });

  protected tongTienSpecial = computed(() => {
    const loaiTra = this.chonNuoc();
    const soPhan = this.soLy();
    if(this.soLy() >= 5)
    {
      return (loaiTra.giaCoBan * soPhan) - (loaiTra.giaCoBan * soPhan)* 0.1;
    }
    return loaiTra.giaCoBan * soPhan;
  });
  
  protected tongTopping = computed(()=> {
    const loaiTra = this.chonNuoc();
    const soPhan = this.soLy();
    return loaiTra.toppings.reduce((acc, toppings: Topping) => acc + toppings.quantity, 0) * soPhan;
  });



  protected readonly toppingCanDung = computed(() =>{
    const loaiTra = this.chonNuoc();
    const soLuong = this.soLy();
    return loaiTra.toppings.map((toppings: Topping) => {
      return {
        name: toppings.name,
        quantity: toppings.quantity * soLuong,
        unit: toppings.unit,
      };
    });
  });

  

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
