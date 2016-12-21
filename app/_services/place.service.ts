/**
 * Created by nikita on 21.12.16.
 */
import { Injectable } from '@angular/core';
import { Place } from '../_models/place';

const placesPromise: Promise<Place[]> = Promise.resolve([
    {
        name: 'Krasnyy Oslik',
        lat: 49,
        lng:36,
        comments:[{
            img:'http://localhost:3000/',
            userName:'Nikita',
            text:'asdadasdasdasd'
        },{
            img:'http://localhost:3000/',
            userName:'Stas',
            text:'Lalalala'
        }],
        status:true,
        userName:'Nikita',
        img:'http://localhost:3000/',
        id:1
    },
    {
        name: 'Krasnyy Oslik2',
        lat: 50,
        lng:36,
        comments:[{
            img:'http://localhost:3000/',
            userName:'Tatas',
            text:'asdadasdasdasd'
        },{
            img:'http://localhost:3000/',
            userName:'Stas',
            text:'Lalalala'
        }],
        status:true,
        userName:'Oleg',
        img:'http://localhost:3000/',
        id:2
    },
    {
        name: 'Krasnyy Oslik3',
        lat: 49.96,
        lng:36,
        comments:[{
            img:'http://localhost:3000/',
            userName:'Nikita',
            text:'123123123'
        }],
        status:true,
        userName:'Stas',
        img:'http://localhost:3000/',
        id:3
    },
]);

@Injectable()
export class PlaceService {

    // get all users
    getPlaces() {
        return placesPromise;
    }

    // find a specific user
    getPlace(name:string) {
        return placesPromise.then(places => places.find(place => place.name === name));

        // let user = usersPromise.then(users => {
        //   return users.find(user => {
        //     return user.username === username;
        //   });
        // });

        // return user;
    }

}