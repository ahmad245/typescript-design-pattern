import { IMappable } from "./IMappable";
import {Map,TileLayer,Marker,Circle} from "leaflet";

export class CustomMap {
  private map: Map;
  private maker:L.Marker;
  private tileLayer:TileLayer;
  private circle:Circle;
  constructor(mapid) {
    this.map=new Map(document.getElementById(mapid)).setView([0, 0], 1);
    this.map.panTo([0, 0]);

    this.tileLayer=new  TileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
      minZoom: 1,
      maxZoom: 20,
      accessToken:
        "pk.eyJ1IjoiYWhtYWRhbG1hc3JpIiwiYSI6ImNrZTQzeHlibjBwNzMyc29iYnUwdWZwMXUifQ.L_dHuon6uopEKJKlH_kIYg",
    }).addTo(this.map);

     this.circle =new Circle([0, 0], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);

  }

  addMarker(mappable:IMappable):void{
    this.maker=new Marker([mappable.location.lat,mappable.location.lon])
    .addTo(this.map).bindPopup(mappable.markerContent());

  }

}
