import React from 'react';

export interface PopupTextValueType {
  objectName: string;
  socialValue?: string;
  materialValue?: string;
  start?: string;
  description: string;
}

export const PopUpText: React.FC<PopupTextValueType> = (props: PopupTextValueType) => (
  <div>
    <p>
      <strong>Объект: </strong>
      {props.objectName}
    </p>
    {props.socialValue && (
      <>
        <p>
          <strong>Материальная ценность: </strong>
          {props.socialValue}
        </p>
        <p>
          <strong>Социальная ценность: </strong>
          {props.materialValue}
        </p>
      </>
    )}

    {props.start && (
      <p>
        <strong>Начало возгорания: </strong>
        {props.start}
      </p>
    )}

    <p>
      <strong>Описание: </strong>Описание объекта
    </p>
  </div>
);
