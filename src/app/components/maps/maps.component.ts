import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  isMechanic: any = false;
  constructor(private router: Router) { 
    if (+sessionStorage.getItem("roleId")! == 4) {
      this.isMechanic = true;
    }
  }

  ngOnInit() {
    //mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaWxzb24xOTk4IiwiYSI6ImNscGoycXA5ODA0eTgya28xMTd1cnNhNGMifQ.Taz4Ycm13UZlq61wynrgeQ';
    
    
    
    if (sessionStorage.getItem("gpsLocationLongitudeToShow") != null && sessionStorage.getItem("gpsLocationLatitudeToShow") != null) {
      this.map = new mapboxgl.Map({
        accessToken: environment.mapboxKey,
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [+sessionStorage.getItem("gpsLocationLatitudeToShow")!,+sessionStorage.getItem("gpsLocationLongitudeToShow")!], // starting position [lng, lat] Google maps position(lat, long)
        zoom: 13.5 // starting zoom
      });
      console.log(+sessionStorage.getItem("gpsLocationLongitudeToShow")!);
      console.log(+sessionStorage.getItem("gpsLocationLatitudeToShow")!);
      
      this.createMarkerToShow(+sessionStorage.getItem("gpsLocationLatitudeToShow")!,+sessionStorage.getItem("gpsLocationLongitudeToShow")!);
    }else{
      this.map = new mapboxgl.Map({
        accessToken: environment.mapboxKey,
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-63.17862, -17.785625], // starting position [lng, lat] Google maps position(lat, long)
        zoom: 13.5 // starting zoom
      });
  
      this.createMarker(-63.17862, -17.785625);
    }
  }
  
  createMarkerToShow(lng: any, lat: any){
    const marker = new mapboxgl.Marker({
      draggable: false
    }).setLngLat([lng, lat]).addTo(this.map!);

    
  }

  createMarker(lng: any, lat: any){
      const marker = new mapboxgl.Marker({
        draggable: true
      }).setLngLat([lng, lat]).addTo(this.map!);

      marker!.on("dragend", () => {
        console.log(marker.getLngLat());
        var LngLat = marker.getLngLat();
        sessionStorage.setItem("GpsLocationLatitude", (LngLat.lat as unknown as string));
        sessionStorage.setItem("GpsLocationLongitude", (LngLat.lng as unknown as string));
      });
  }
  confirmLocation(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ubicacion confirmada con exito!',
      showConfirmButton: false,
      timer: 2000
    })

    setTimeout(() => {
      this.router.navigate(["/asistance"]);
    }, 2100);
  }
  
  return(){
    this.router.navigate(["/registerApplications"]);
  }
}
