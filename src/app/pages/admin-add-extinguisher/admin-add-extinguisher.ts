import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
  selector: 'app-admin-add-extinguisher',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './admin-add-extinguisher.html',
  styleUrl: './admin-add-extinguisher.css',
})
export class AdminAddExtinguisher implements AfterViewInit {
  purchaseType: string = 'Fixed Price';

  formData = {
    title: 'Fire extinguisher',
    price: '30',
    capacity: '6kg',
    category: 'Powder',
    origin: 'China',
    currency: 'Dollars',
    description: ''
  };

  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    const run = () => {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    };
    run();
    [100, 300, 600, 1000, 2000].forEach((delay) => {
      setTimeout(run, delay);
    });
  }

  setPurchaseType(type: string) {
    this.purchaseType = type;
  }
}
