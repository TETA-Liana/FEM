import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtinguisher } from './add-extinguisher';

describe('AddExtinguisher', () => {
  let component: AddExtinguisher;
  let fixture: ComponentFixture<AddExtinguisher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExtinguisher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExtinguisher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
