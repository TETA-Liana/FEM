import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-admin-inspection-label',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: './admin-inspection-label.html',
    styleUrls: ['./admin-inspection-label.css']
})
export class AdminInspectionLabel implements OnInit {
    labelId: string | null = 'LE-2023-894';
    extinguisherId: string = 'EXT-0045';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.labelId = id;
            }
        });
    }

    historyList = [
        {
            date: 'Oct 24, 2023',
            time: '10:42 AM',
            author: 'James A.',
            reason: 'New Inspection',
            avatar: 'https://ui-avatars.com/api/?name=James+A.&background=E2E8F0&color=475569'
        }
    ];
}
