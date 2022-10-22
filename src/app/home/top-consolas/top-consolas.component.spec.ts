import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConsolasComponent } from './top-consolas.component';

describe('TopConsolasComponent', () => {
  let component: TopConsolasComponent;
  let fixture: ComponentFixture<TopConsolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopConsolasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
