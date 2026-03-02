import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-admin-view-extinguisher',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: './admin-view-extinguisher.component.html',
    styleUrls: ['./admin-view-extinguisher.component.css']
})
export class AdminViewExtinguisherComponent implements OnInit {
    extinguisherId: string | null = 'FE-2024-X9';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.extinguisherId = id;
            }
        });
    }

    maintenanceHistory = [
        {
            date: 'Sep 15, 2023',
            action: 'Inspection',
            inspector: 'John Doe',
            inspectorInitials: 'JD',
            result: 'Passed',
            notes: 'Pressure gauge verified'
        },
        {
            date: 'Jan 10, 2023',
            action: 'Refill',
            inspector: 'Agency Service',
            inspectorInitials: 'AS',
            result: 'Complete',
            notes: 'Scheduled 5-year refill'
        },
        {
            date: 'Sep 12, 2022',
            action: 'Inspection',
            inspector: 'John Doe',
            inspectorInitials: 'JD',
            result: 'Passed',
            notes: 'Routine annual check.'
        }
    ];

    activityLog = [
        { height: '40%' },
        { height: '65%' },
        { height: '45%' },
        { height: '85%' }
    ];
}
