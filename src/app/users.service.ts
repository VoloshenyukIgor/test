import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  constructor (private httpClient:HttpClient) {}

  getUsers() {
    return this.httpClient.get(`https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb`)
    .map(function(response) {
      return response.json();
    })
    //.map(response => Response.resaults)
   //.map(users => {
      //return users.map(u => {
      //  return {
        //  name: u.name.first + ' ' + u.name.last,
          //image: u.picture.large
          //geo: u.location.city +  ' ' + u.location.state + ' ' u.location.street
        //}
      //})
    //})
  }


  users = [
    {name: 'WFM 1' },
    {name: 'WFM 2' },
    {name: 'WFM 3' },
    {name: 'WFM 4' },
    {name: 'WFM 5' }
  ]
}
