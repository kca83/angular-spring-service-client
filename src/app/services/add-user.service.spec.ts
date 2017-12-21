import { TestBed, inject } from '@angular/core/testing';

import { AddUserService } from './add-user.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

describe('AddUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddUserService],
      imports: [
        HttpModule,
        BrowserModule,
        FormsModule
      ]
    });
  });

  it('should be created', inject([AddUserService], (service: AddUserService) => {
    expect(service).toBeTruthy();
  }));
});
