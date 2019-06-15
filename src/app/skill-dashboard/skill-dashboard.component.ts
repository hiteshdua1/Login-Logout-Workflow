import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-skill-dashboard',
  templateUrl: './skill-dashboard.component.html',
  styleUrls: ['./skill-dashboard.component.css']
})
export class SkillDashboardComponent implements OnInit {

  objectKeys = Object.keys;

  skillGroups: any;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    const skills = await this.dataService.getSkills();
    debugger;
    this.skillGroups = _(skills).groupBy('category.name').valueOf();
    debugger;
  }

}
