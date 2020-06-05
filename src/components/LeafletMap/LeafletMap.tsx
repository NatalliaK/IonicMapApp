import React, { createRef } from 'react';
import { LayerGroup, LayersControl, Map, TileLayer } from 'react-leaflet';
import RiskMapCont from '../../containers/RiskMap';
import ValueMapCont from '../../containers/ValueMap';
import './LeafletMap.scss';

export const LeafletMap: React.FC = () => {
  const mapRef: any = createRef();
  // componentDidMount(): void {
  //   setTimeout(() => this.mapRef.leafletElement.invalidateSize(), 100);
  // }

  return (
    <Map className="map" center={[52.3, 104]} zoom={10} ref={mapRef}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStretMap" checked={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Object Map">
          <LayerGroup name="layer2">
            <ValueMapCont />
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Risk Map">
          <LayerGroup name="layer2">
            <RiskMapCont />
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </Map>
  );
};
