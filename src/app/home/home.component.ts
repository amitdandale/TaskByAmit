import { Component, OnInit } from '@angular/core';
import { imageDetails } from '../constants'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public url:string = "../../assets/images/cta-3-368x420.jpg";
  public title:string = "Baloon Flights";
public imageDetails = imageDetails;

  constructor() { }

  ngOnInit(): void {
  }
  public check:boolean= false;
  toggleMenu(){
    this.check = !this.check;
    console.log("working ")
  }

}
