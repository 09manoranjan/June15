import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'June15';
  employee = [
    {
      name: "alok",
      age:26,
      email : "alok@gmail.com",
      gender : "male",
      salary:50000
    },
    {
      name: "anil",
      age:24,
      email : "anil@gmail.com",
      gender : "male",
      salary:56000
    },
    {
      name: "anisha",
      age:23,
      email : "anisha@gmail.com",
      gender : "female",
      salary:60000
    },
    {
      name: "manorama",
      age:27,
      email : "manorama@gmail.com",
      gender : "female",
      salary:70000
    }
  ];
  loadMoreData(){
    this.employee = [
      {
        name: "alok",
        age:26,
        email : "alok@gmail.com",
        gender : "male",
        salary:50000
      },
      {
        name: "anil",
        age:24,
        email : "anil@gmail.com",
        gender : "male",
        salary:56000
      },
      {
        name: "anisha",
        age:23,
        email : "anisha@gmail.com",
        gender : "female",
        salary:60000
      },
      {
        name: "manorama",
        age:27,
        email : "manorama@gmail.com",
        gender : "female",
        salary:70000
      },
      {
        name: "nihal",
        age:28,
        email : "nihal@gmail.com",
        gender : "male",
        salary:75000
      },
      {
        name: "kunita",
        age:22,
        email : "kunita@gmail.com",
        gender : "female",
        salary:32000
      },
      {
        name: "sumit",
        age:24,
        email : "sumit@gmail.com",
        gender : "male",
        salary:40000
      }
    ];
  }
  getEmployeeTrackBy(index:number,employee:any){
    return employee.name;
  }
}
