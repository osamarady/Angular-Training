import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  users: object;

  constructor(private results: DataService, private router: Router) { }

  ngOnInit() {
    this.results.getUsers().subscribe(results => {
      this.users = results;
    }
  );
  }
  select_user(user) {
    const id = user.id.value;
    this.router.navigate(['/pricingDetail', id]);
  }

}
