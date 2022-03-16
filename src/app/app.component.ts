
import { Component } from '@angular/core';

let testname:string ;
   
interface IAccount {
  name: string,
  balance: number,
  status?: string // ? = optional
  deposit?: () => void // ? - optional , return type
};

const account: IAccount = {
  name: 'Luis',
  balance: 10
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'gs1_asw_angular';
  testname = "hello Chris";
}


// @ts-ignore
testname = 123;