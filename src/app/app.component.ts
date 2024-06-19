import { Component } from '@angular/core';
import { customers } from './app.model';
type cust={
  id: string;
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEditOn: boolean= false;

  temp!:cust;
  customerData = customers
  title = 'parent-child';
  onEdit(customerData: cust){
    this.isEditOn = true;
    this.temp = customerData
  }
  
  onEditCustomer(customer :cust){
    this.isEditOn= false
    const index = this.customerData.findIndex((c) => c.id === customer.id);
    if (index !== -1) {
      this.customerData[index] = customer;
    }
    this.temp = null!;
  }
  closeEditCustomer(){
    this.isEditOn= false;
  }
}
