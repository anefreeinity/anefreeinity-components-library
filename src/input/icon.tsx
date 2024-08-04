import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IInputProperty } from './i-input-property';

export interface IconProps {
    property: IInputProperty;
}

export const Icon: React.FC<IconProps> = ({ property }) => {
    return <FontAwesomeIcon icon={property.Icon!} className={`absolute ${property.IconPosition} ${property.IconFontSize} ${property.IconColor}`} />;
};
