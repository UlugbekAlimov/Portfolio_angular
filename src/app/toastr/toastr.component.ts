import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  standalone: true,
  imports: [],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss'
})
export class ToastrComponent {
  constructor( private toastr: ToastrService ) {}

  showSucces(){
    this.toastr.success('Success message', 'Success! )')
  }

  showError(){
    this.toastr.error('Error message', 'Error (')
  }
}
