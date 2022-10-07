import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  displayStyle = "none";
  loading!: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.Loading.subscribe((v) => {
      this.loading = v;
    });
  }
  ngOnInit(): void {
  }

}
