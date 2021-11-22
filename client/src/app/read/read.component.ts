import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private api: ApiServicesService) { }
  readUser: any
  /// get data users
  ngOnInit(): void {
    this.api.getAllUsers().subscribe((res) => {
      this.readUser = res.data
    })
  }

}
