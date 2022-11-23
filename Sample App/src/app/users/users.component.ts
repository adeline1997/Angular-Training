import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  routerData: any;

  constructor(private aroute:ActivatedRoute) { }

  ngOnInit(): void {
this.aroute.params.subscribe((data)=>{
  this.routerData=data;
})
  }

}
