import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputTableComponent } from './user-input-table.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserService } from '../../services/add-user.service';

describe('UserInputTableComponent', () => {
  let component: UserInputTableComponent;
  let fixture: ComponentFixture<UserInputTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputTableComponent ],
      imports: [
        HttpModule,
        BrowserModule,
        FormsModule
      ],
      providers: [
        AddUserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
