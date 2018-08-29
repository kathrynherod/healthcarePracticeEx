import { MembersService } from './../__services/members.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: any;
  constructor(private membersService: MembersService) {}

  ngOnInit() {
    // this.members = this.membersService.getMembersList();
    // console.log(this.members);

    this.membersService
      .getMembersList()
      .subscribe(data => (this.members = data));
  }
}
