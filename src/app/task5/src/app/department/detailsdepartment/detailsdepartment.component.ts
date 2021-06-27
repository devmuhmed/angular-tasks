import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-detailsdepartment',
  templateUrl: './detailsdepartment.component.html',
  styleUrls: ['./detailsdepartment.component.css']
})
export class DetailsdepartmentComponent implements OnInit {

  constructor(public deptser:DepartmentService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.deptser.getDepartmentDetails(this.ar.snapshot.params["id"])
    console.log(this.ar.snapshot.params["id"])
  }

}
