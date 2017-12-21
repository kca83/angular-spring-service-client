import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserInputTableComponent } from './components/user-input-table/user-input-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddUserService } from './services/add-user.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserInputTableComponent
      ],
      imports: [
        HttpModule,
        BrowserModule,
        FormsModule
      ],
      providers: [
        AddUserService
      ]

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
