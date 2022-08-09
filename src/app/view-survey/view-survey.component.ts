import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css']
})
export class ViewSurveyComponent implements OnInit {

  survey:any = null
  isDataAvailable = false
  constructor(private http: HttpClient) { }

  likes = [
    { name: "Students", selected: false },
    { name: "Location", selected: false },
    { name: "Campus", selected: false },
    { name: "Atmosphere", selected: false },
    { name: "Dormrooms", selected: false },
    { name: "Sports", selected: false }
  ]

  recommendations = [
    {name: "Very Likely" ,value: "verylikely"},
    {name: "Likely", value:"likely"},
    {name: "Unlikely", value:'unlikely'}
  ]
  ngOnInit(): void {
    this.fetchStudent()
  }
//Below function is used to extract id from the url and then use http get call to fetch information from the database
// of the corresponding id
  fetchStudent() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    // const url = "https://ec2-54-89-209-114.compute-1.amazonaws.com/k8s/clusters/c-tx8rm/api/v1/namespaces/default/services/http:hw3deploybackend:8080/proxy/SWE645_hw3/students/"
    const url = "http://44.208.161.168:32397/SWE645_hw3/students/"
    let obs = this.http.get(url + id);    
    obs.subscribe((response) => this.loadStudent(response),
    (error) => {
      console.log('oops, error occurred.', console.log(error.status))
      if(error.status==404){
      alert("Student data does not exists");
      }
    })
  }
//below function is used to load data from database
  loadStudent(studentData: any){
    if(studentData.liked !== null){
      let likeArray = studentData.liked.split(',')
      this.likes.forEach(individualLike => {
        if(likeArray.includes(individualLike.name)){
          individualLike.selected = true
        }
      });
    }

    this.survey = studentData
    this.isDataAvailable = true

    let dateArray = studentData.dateOfSurvey.split('T')
    dateArray[0]= dateArray[0].replaceAll('-','/')
    studentData.dateOfSurvey= dateArray[0]
  }
  return(){
    window.history.back();
  }

}
