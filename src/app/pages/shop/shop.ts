import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements AfterViewInit {

  constructor(private router: Router) { }

  filterType = '';
  filterCapacity = '';
  filterAvailability = '';
  filterSupplier = '';
  maxPrice = 900;

  showModal = false;
  selectedProduct: any = null;
  quantity = 1;

  products = [
    {
      name: 'ProSafe CO₂ Extinguisher',
      model: 'PS-CO2-5000',
      badge: 'CO₂',
      badgeClass: 'bg-[#E0E7FF] text-[#4F46E5]',
      status: 'In Stock',
      statusClass: 'bg-[#22C55E] text-white',
      capacity: '5kg',
      warranty: '3 Years',
      supplier: 'FireTek Industries',
      price: 129,
      oldPrice: 99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80',
      imgBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      soldOut: false
    },
    {
      name: 'AquaGuard Water Type',
      model: 'AG-H2O-9000',
      badge: 'WATER',
      badgeClass: 'bg-[#DBEAFE] text-[#2563EB]',
      status: 'In Stock',
      statusClass: 'bg-[#22C55E] text-white',
      capacity: '9L',
      warranty: '5 Years',
      supplier: 'SafeGuard Pro',
      price: 89,
      oldPrice: 99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80',
      imgBg: 'bg-gradient-to-br from-slate-700 to-slate-800',
      soldOut: false
    },
    {
      name: 'FoamMax Premium',
      model: 'FM-PRO-6000',
      badge: 'FOAM',
      badgeClass: 'bg-[#FEF3C7] text-[#D97706]',
      status: 'Low Stock',
      statusClass: 'bg-[#F97316] text-white',
      capacity: '6L',
      warranty: '4 Years',
      supplier: 'Extinguish Co.',
      price: 149,
      oldPrice: 99,
      image: '',
      imgBg: 'bg-gradient-to-br from-pink-100 to-pink-200',
      soldOut: false
    },
    {
      name: 'DryShield ABC Powder',
      model: 'DS-ABC-12K',
      badge: 'POWDER',
      badgeClass: 'bg-[#E0E7FF] text-[#4F46E5]',
      status: 'In Stock',
      statusClass: 'bg-[#22C55E] text-white',
      capacity: '12kg',
      warranty: '5 Years',
      supplier: 'FireTek Industries',
      price: 179,
      oldPrice: 99,
      image: '',
      imgBg: 'bg-gradient-to-br from-red-100 to-red-200',
      soldOut: false
    },
    {
      name: 'CompactPro CO₂ Mini',
      model: 'CP-CO2-2000',
      badge: 'CO₂',
      badgeClass: 'bg-[#E0E7FF] text-[#4F46E5]',
      status: 'In Stock',
      statusClass: 'bg-[#22C55E] text-white',
      capacity: '2kg',
      warranty: '2 Years',
      supplier: 'SafeGuard Pro',
      price: 69,
      oldPrice: 99,
      image: '',
      imgBg: 'bg-gradient-to-br from-slate-200 to-slate-300',
      soldOut: false
    },
    {
      name: 'IndustrialMax Heavy',
      model: 'IM-PWD-25K',
      badge: 'POWDER',
      badgeClass: 'bg-[#E0E7FF] text-[#4F46E5]',
      status: 'Out of Stock',
      statusClass: 'bg-[#EF4444] text-white',
      capacity: '25kg',
      warranty: '7 Years',
      supplier: 'Extinguish Co.',
      price: 329,
      oldPrice: 99,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&q=80',
      imgBg: 'bg-gradient-to-br from-orange-100 to-orange-200',
      soldOut: true
    }
  ];

  currentPage = 1;
  totalPages = [1, 2, 3, 4];

  openProductModal(p: any) {
    if (p.soldOut) return;
    this.selectedProduct = p;
    this.quantity = 1;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }

  addToCartAndGo() {
    this.showModal = false;
    this.router.navigate(['/cart']);
  }

  increaseQty() { this.quantity++; }
  decreaseQty() { if (this.quantity > 1) this.quantity--; }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    }, 100);
  }
}
