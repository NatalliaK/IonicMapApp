import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { PopUpText, PopupTextValueType } from '../PopUpText/PopUpText';

const ObjectValue: PopupTextValueType = {
  objectName: 'Детский сад',
  socialValue: 'Высокая',
  materialValue: 'Низкая',
  description: 'Описание объекта',
};

export const ValueMap: React.FC = () => (
  <>
    <Marker position={[52.3, 104]}>
      <Popup>
        <PopUpText {...ObjectValue} />
      </Popup>
    </Marker>
    <Marker position={[52.08, 104.15]}>
      <Popup>
        <PopUpText {...ObjectValue} />
      </Popup>
    </Marker>
  </>
);
