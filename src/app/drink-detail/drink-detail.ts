import { Component, signal, computed, inject } from '@angular/core';
import { DrinkModel, Topping } from '../models';
import { DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DrinkService } from '../drink-service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-drink-detail',
  imports: [DecimalPipe, RouterLink, MatButtonModule, MatCardModule, MatIconModule, MatListModule],
  templateUrl: './drink-detail.html',
  styleUrl: './drink-detail.css',
})
export class DrinkDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly drinkService = inject(DrinkService);

    private readonly params = toSignal(this.route.paramMap);

    protected readonly chonNuocDetail = computed(() => {
      const id = Number(this.params()?.get('id'));
      return this.drinkService.getDrinkById(id);
    })
  
  protected readonly soLy = signal(1);

  protected tongTien = computed(() => {
    const loaiTra = this.chonNuocDetail();
    if(!loaiTra){
      return 0;
    }
    const soPhan = this.soLy();
    return loaiTra.giaCoBan * soPhan;
  });

  protected tongTienSpecial = computed(() => {
    const loaiTra = this.chonNuocDetail();
    if(!loaiTra){
      return 0;
    }
    const soPhan = this.soLy();
    if(this.soLy() >= 5)
    {
      return (loaiTra.giaCoBan * soPhan) - (loaiTra.giaCoBan * soPhan)* 0.1;
    }
    return loaiTra.giaCoBan * soPhan;
  });
  
  protected tongTopping = computed(()=> {
    const loaiTra = this.chonNuocDetail();
    if(!loaiTra){
      return 0;
    }
    const soPhan = this.soLy();
    return loaiTra.toppings.reduce((acc, toppings: Topping) => acc + toppings.quantity, 0) * soPhan;
  });

  protected readonly toppingCanDung = computed(() =>{
    const loaiTra = this.chonNuocDetail();
    if(!loaiTra){
      return [];
    }
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

  protected xoaMon(): void{
    const drink = this.chonNuocDetail();
    if(!drink){
      return;
    }
    this.drinkService.deleteDrink(drink.id);
    this.router.navigate(['/drinks']);
  }

  protected doiYeuThich(): void{
    const drink = this.chonNuocDetail();
    if(!drink)
    {
      return;
    }
    this.drinkService.togglePopular(drink.id);
  }
}
