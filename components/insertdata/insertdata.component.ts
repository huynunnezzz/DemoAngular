

import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-insertdata',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './insertdata.component.html',
  styleUrl: './insertdata.component.css'
})

export class InsertdataComponent {
  file: any;
  getimg: any;
  insertForm = new FormGroup({
    msv: new FormControl(''),
    name: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl(''),
    classroom: new FormControl(''),
  });
  constructor(private sub: SubjectService) { }

  insertStd() {
    this.sub.insertStd(this.insertForm.value).subscribe((data) => {
      if (data) {
        alert("Thêm thành công");
      }
    });

  }
}
