
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myexperience',
  templateUrl: './myexperience.component.html',
  styleUrls: ['./myexperience.component.css']
})
export class MyexperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myexperience= [
    {'id':1, 'name':'Python','description':'First we took a look inside Python Which is often used to build websites and software, automate tasks, and conduct data analysis.','image':'../../assets/PYTHON.png'},
    {'id':2, 'name':'HTML and CSS','description':'Then we moved to Front-end languages such as HTML and CSS. HTML is used to structure a website and CSS is used to style and give webpage a layout. .','image':'../../assets/html_css3.jpg'},
    {'id':3, 'name':'Javascript','description':'Next we moved to JavaScript which has evolved from only building interactive webpages to building full apps and even Games.','image':'../../assets/js2.jpg'},
    {'id':4, 'name':'MySQL','description':'Finnally we moved to MySQL which is a database management system (DBMS) it is a software that interacts with user, applications and the database itself.','image':'../../assets/mysql1.png'}
  ]
}
