import { Component, OnInit } from '@angular/core';
import { RolesService, Role } from 'src/app/services/roles.service';
import { WorkersService, Worker } from 'src/app/services/workers.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  workers: Worker[] = [];
  roles: Role[] = [];

  constructor(private serviceWorkers: WorkersService, private serviceRoles: RolesService) {
    this.serviceWorkers.getWorkers()
      .subscribe((workers) => this.workers = workers);
    console.log(this.workers);
    (this.workers);
    this.serviceRoles.getRoles().subscribe((rls) => this.roles = rls);

  }
  getAvg(roleId: number) {
    let sum = 0;
    let ind = 0;
    this.workers.filter(w => w.roleId === roleId).forEach((sw) => {

      sum += sw.salary;

      ind++;
    });
    return sum / ind;
  }


  ngOnInit(): void {
  }

}
