import {Component, OnInit} from '@angular/core';
import {Newsletter} from "../../../core/models/newsletter";
import {SubscribersService} from "../../../core/services/subscribers.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
constructor(private subService: SubscribersService, private toast: NgToastService) {
}
  ngOnInit(): void {
  }
  onSubmit(value: any) {
    const subData: Newsletter = {
      name: value.name,
      email: value.email
    }

    this.subService.checkSubs(subData.email).subscribe(val => {
      if (val.empty) {
        this.subService.addSubs(subData);

      } else {
        this.toast.warning({detail: 'Warning', summary: 'The email is already subscribed', duration: 3000});
      }
    })
  }
}
