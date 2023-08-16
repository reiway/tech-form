import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comment = '';
  name = '';
  isSubmit = false;
  coment_id = '';
  name_id = '';
  disabled = true;
  ignore = ["Kiếm", "tiền", "Nợ", 'xấu Xổ', "số", "FE CREDIT", "Tiền", "Nợ", "Đắt", "Rẻ"]
  constructor(
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.http.get('https://api.thoikhacgiaothoi.com/api/v1/questions').subscribe((res: any) => {
      if (res?.data) {
        this.coment_id = res.data[1].id;
        this.name_id = res.data[0].id;
      }
    })
  }

  check(event: any) {
    if (this.comment.length >= 4 && this.name.length >= 4) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  submit() {
    if (!this.disabled) {
      this.http.post('https://api.thoikhacgiaothoi.com/api/v1/answers', [
        {
          question_id: this.coment_id,
          answers: [this.comment]
        }, {
          question_id: this.name_id,
          answers: [this.name]
        },
      ]).subscribe((res) => {
        if (res) {
          this.isSubmit = true;
        }
      })
    }
  }
}
