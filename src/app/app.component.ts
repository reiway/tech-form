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

  constructor(private toastr: ToastrService) { }


  submit() {

  }
}
