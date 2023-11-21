import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetipComponent } from './createtip.component';

describe('CreatetipComponent', () => {
  let component: CreatetipComponent;
  let fixture: ComponentFixture<CreatetipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatetipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatetipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
