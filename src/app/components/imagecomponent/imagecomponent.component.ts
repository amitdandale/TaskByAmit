import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagecomponent',
  templateUrl: './imagecomponent.component.html',
  styleUrls: ['./imagecomponent.component.scss']
})
export class ImagecomponentComponent implements OnInit {
@Input() imgUrl: any;
@Input() imgTitle: any;
  constructor() { }

  ngOnInit(): void {

  }

}
