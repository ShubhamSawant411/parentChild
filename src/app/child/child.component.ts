import { Component, EventEmitter, Input, Output } from '@angular/core';
type cust={
  id: string;
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input({required: true}) customerData!: cust;
  @Output() edit=new EventEmitter<any>();
  @Output() close=new EventEmitter<any>();


  displayCustomerData!: cust;
  ngOnInit() {
    this.displayCustomerData = { ...this.customerData };
  }

  temp!:cust;
  onEditChange(){
    this.edit.emit(this.displayCustomerData); 

  }
  closeEdit(){
    this.close.emit();
  }
  



}
