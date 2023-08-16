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
  ignore = ["Kiếm", "tiền", "Nợ", 'xấu Xổ', "số", "FE CREDIT", "Tiền", "Nợ", "Đắt", "Rẻ"];
  goalsArray = [
    "Đầu tư thành công vào dự án mới",
    "Tiết kiệm đủ để mua căn nhà mới",
    "Đi du lịch Châu Âu",
    "Lần đầu triển khai dự án kinh doanh quy mô lớn",
    "Mua sắm cho gia đình thoải mái",
    "Dành thời gian đưa con đi trải nghiệm cuộc sống",
    "Một mình đi leo núi",
    "Chinh phục đỉnh Everest",
    "Tham gia giải London Marathon 42km",
    "Dành 1 tháng cho bản thân nghỉ ngơi",
    "Tặng mẹ 1 chiếc xe mới",
    "Mua ngôi nhà mới đón em bé",
    "Tiết kiệm cho con đi du học",
    "Có thêm nhiều thời gian cho con",
    "Đưa gia đình đi du lịch nhiều hơn",
    "Chọn đúng cổ phiếu đầu tư",
    "Triển khai ý tưởng kinh doanh mới",
    "Nghỉ hưu sớm ở tuổi 40",
    "Sang Mỹ làm việc và lập công ty",
    "Sky diving",
    "Triển khai dự án xã hội thành công",
    "Giúp đỡ thêm nhiều trẻ em vùng cao",
    "Công ty được niêm yết trên sàn chứng khoán",
    "Xây dựng công ty vững mạnh",
    "Mua sắm đồ Tiffany & Co."
  ];
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
    if (this.comment.length >= 4) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  submit() {
    // this.goalsArray.forEach((ele: any) => {
    //   this.http.post('https://api.thoikhacgiaothoi.com/api/v1/answers', [
    //     {
    //       question_id: this.coment_id,
    //       answers: [ele]
    //     }, {
    //       question_id: this.name_id,
    //       answers: ['demo']
    //     },
    //   ]).subscribe((res) => {
    //     // if (res) {
    //     //   this.isSubmit = true;
    //     // }
    //   })
    // })
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
