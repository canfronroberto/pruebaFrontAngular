import { NasaService } from './../../shared/services/nasa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public nasaInfo: any;

  constructor(private infoNasa: NasaService) { }

  ngOnInit(): void {
    this.recuperarInfo();
  }

  private recuperarInfo(): void {
    this.infoNasa.recuperarInfo().subscribe(
      (data) => {
        this.nasaInfo = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

}
