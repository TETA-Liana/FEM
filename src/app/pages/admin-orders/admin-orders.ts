import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService, Order } from '../../services/order.service';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.css',
})
export class AdminOrders implements AfterViewInit, OnInit {
  inspectionsOpen = true;
  searchQuery = '';
  filterStatus = 'all';

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.orders$.subscribe(orders => {
      this.orders = orders;
    });
  }

  toggleInspections() {
    this.inspectionsOpen = !this.inspectionsOpen;
    this.initIcons();
  }

  get pendingCount() {
    return this.orders.filter(o => o.status === 'Pending Approval').length;
  }

  get completedCount() {
    return this.orders.filter(o => o.status === 'Complete').length;
  }

  get cancelledCount() {
    return this.orders.filter(o => o.status === 'Cancelled').length;
  }

  get filteredOrders(): Order[] {
    return this.orders.filter(o => {
      const matchesSearch =
        !this.searchQuery ||
        o.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        o.companyName.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesStatus =
        this.filterStatus === 'all' || o.status === this.filterStatus;
      return matchesSearch && matchesStatus;
    });
  }

  approveOrder(id: string) {
    this.orderService.approveOrder(id);
    this.initIcons();
  }

  cancelOrder(id: string) {
    this.orderService.cancelOrder(id);
    this.initIcons();
  }

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
    [100, 300, 600, 1000, 2000].forEach(delay => setTimeout(run, delay));
  }
}
