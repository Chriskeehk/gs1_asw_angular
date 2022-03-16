import { Component} from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent {

  state = {
    data:   {
                table1: 
                [
                    {
                                id: 0,
                                firstname : "",
                                surname: "",
                                 email: ""
                    },
                    {
                                id: 1,
                                firstname : "Chris",
                                surname: "Ho",
                                email: "chris@hkmouse.com"
                    },
                    {
                                id: 2,
                                firstname : "Yoie",
                                surname: "Cheung",
                                email: "yoie@hkmouse.com"
                    },
                    {
                                id: 3,
                                firstname : "Evellin",
                                surname: "Ho",
                                email: "evellin@hkmouse.com"
                    },
                    {
                                id: 4,
                                firstname : "Jason",
                                surname: "Ho",
                                email: "jason@hkmouse.com"
                                }
                ],
                table2: 
                    [
                      {
                        id: 0,
                        firstname : "",
                        surname: "",
                        email: ""
            },
            {
                        id: 1,
                        firstname : "Chris",
                        surname: "Ho",
                        email: "chris@hkmouse.com"
            },
            {
                        id: 2,
                        firstname : "Yoie",
                        surname: "Cheung",
                        email: "yoie@hkmouse.com"
            } 
                    ]
            },
    user:   {
            currentUser: 'Chris Ho'
            }
    }

    myTable1 = this.state.data.table1
    // myTable2 = this.state.data.table2

    getName() {
      return 'Loading JSON'
    }

    // Avoid keyvalue to sort the object
    unsorted(a: any, b: any): number { 
      return 0; 
    } 
  
    onClickButtonDeleteRow = (e : MouseEvent, table: any, row: number) => {
      console.log('Start onClickButtonDeleteRow. You are deleting table = ', table.key, 'row = ', row );
      table.value.splice(row,1);
    };

    onClickButtonAddRow = (e : MouseEvent, table: any) => {
      console.log("Start onClickButtonAddRow. You are adding row at table = ", table.key);
      const firstRow = JSON.parse(JSON.stringify(table.value[0])); // Deep Copy
      const lastIndex  = table.value.length ;
      firstRow.id      = table.value[lastIndex - 1].id + 1 ;
      table.value.push(firstRow);
    }
}
