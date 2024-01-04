
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../services/subject.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-studentmanager',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './studentmanager.component.html',
  styleUrl: './studentmanager.component.css',
})
export class StudentmanagerComponent implements OnInit {
  listStd: any;
  constructor(private sub: SubjectService) { }

  ngOnInit(): void {
    this.sub.getList().subscribe((res: any) => {
      this.listStd = res.data;
    });
  }

  deleteData(id: String) {
    if (confirm("Bạn có chắc chắn xóa?")) {
      this.sub.deleteStd(id).subscribe(data => {
      })
      alert("Xóa thành công");
      this.ngOnInit();
    }
  }
}
