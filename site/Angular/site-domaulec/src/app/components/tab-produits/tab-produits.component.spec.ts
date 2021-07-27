import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProduitsComponent } from './tab-produits.component';

describe('TabProduitsComponent', () => {
  let component: TabProduitsComponent;
  let fixture: ComponentFixture<TabProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
