import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing-detail',
  templateUrl: './pricing-detail.component.html',
  styleUrls: ['./pricing-detail.component.css']
})
export class PricingDetailComponent implements OnInit {
  public userDetail;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const getName = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.userDetail = getName;
  }

}
