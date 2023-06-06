const generate = require('./generate');

generate('react', component => `import React from 'react';
import { v4 as uuid } from 'uuid';

const ${component.name} = ({ color = 'currentColor', size = 24, children, title, ...props }) => {
  const className = 'mdi-icon ' + (props.className || '');
  const titleId = title?.id ? title.id + '-' + uuid() : uuid();

  return (
    <svg {...props} aria-labelledby={title.id} className={className} width={size} height={size} fill={color} viewBox="0 0 24 24">
      <title id={titleId}>{title.name}</title>
      <path d="${component.svgPath}" />
    </svg>
  );
};

export default React.memo ? React.memo(${component.name}) : ${component.name};
`, component => `import { MdiReactIconComponentType } from './dist/typings';

declare const ${component.name}: MdiReactIconComponentType;
export = ${component.name};
`, () => `import { ComponentType, SVGProps } from 'react';

type AllSVGProps = SVGProps<SVGSVGElement>

type ReservedProps = 'color' | 'size' | 'width' | 'height' | 'fill' | 'viewBox'

export interface MdiReactIconProps extends Pick<AllSVGProps, Exclude<keyof AllSVGProps, ReservedProps>> {
  color?: string;
  size?: number | string;
  // should not have any children
  children?: never;
}
export type MdiReactIconComponentType = ComponentType<MdiReactIconProps>;
`).catch(err => console.error(err));
