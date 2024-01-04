
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editstudent',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editstudent.component.html',
  styleUrl: './editstudent.component.css',
})
export class EditstudentComponent implements OnInit {
  constructor(private sub: SubjectService, private router: ActivatedRoute) { }

  getid: any = '';
  editForm = new FormGroup({
    msv: new FormControl(),
    name: new FormControl(),
    sex: new FormControl(),
    address: new FormControl(),
    classroom: new FormControl(),
  });
  ngOnInit(): void {
    this.router.paramMap.subscribe((query) => {
      this.getid = query.get('id');
      this.sub.getListbyID(this.getid).subscribe((res) => {
        this.editForm = new FormGroup({
          msv: new FormControl({value:res.data.msv,disabled:true}),
          name: new FormControl(res.data.name),
          sex: new FormControl(res.data.sex),
          address: new FormControl(res.data.address),
          classroom: new FormControl(res.data.classroom),
        });
      });
    });
  }

  EditStd() {
    this.sub.editStd(this.getid, this.editForm.value).subscribe();
    alert("Sửa thành công");
  }
}
