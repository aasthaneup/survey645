import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-all-surveys',
  templateUrl: './list-all-surveys.component.html',
  styleUrls: ['./list-all-surveys.component.css']
})
export class ListAllSurveysComponent implements OnInit {

  nameStudents:any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  } 
//below function is used to fetch all the data from the database
  getData() {
    // let obs = this.http.get("https://ec2-54-89-209-114.compute-1.amazonaws.com/k8s/clusters/c-tx8rm/api/v1/namespaces/default/services/http:hw3deploybackend:8080/proxy/SWE645_hw3/students/");
    let obs = this.http.get("http://44.208.161.168:32397/SWE645_hw3/students/");
    obs.subscribe((response) => this.viewData(response))
  }

//Below function is used to fetch all the names from the database
  viewData(students:any) {
    try {
      for(var i=0;i<students.length;i++){
        let obj = {id: "", name: ""};
        obj.id=students[i].id;
        obj.name=students[i].firstName;
        this.nameStudents[i]= obj;
      }
    } catch (error) {
      console.log(error)
    }
  }

}
