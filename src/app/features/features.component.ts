import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  users: object;

  @Input() public parentData;
  constructor(private results: DataService) { }

  ngOnInit() {
    this.results.getUsers().subscribe(results => {
        this.users = results;
      }
    );
  }

}
