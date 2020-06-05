import React from 'react';
import { IonSpinner } from '@ionic/react';
import './Preloader.scss';

export const Preloader: React.FC = () => (
  <div className="preload-wrap">
    <IonSpinner name="lines" class="spinner" />
  </div>
);
