import React from 'react';
import * as L from 'leaflet';
import './CustomMarker.scss';

export const CustomMarker = new L.Icon({
  iconUrl: '../assets/svg/fire.svg',
  className: 'fire-icon',
  iconSize: [30, 40],
  shadowSize: [35, 45],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76],
});
