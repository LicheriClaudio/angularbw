import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fattura } from 'src/app/auth-m/interface/fattura';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './fatture.page.html',
  styleUrls: ['./fatture.page.scss'],
})
export class FatturePage implements OnInit {
  fatt:Fattura[] = []
  constructor(private authService: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.authService.getAllFatture();
  }
}
