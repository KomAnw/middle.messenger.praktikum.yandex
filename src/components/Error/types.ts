import { NestedComponent } from 'src/modules/Component/types';

export type ErrorProps = {
  error: string;
  errorMessage: string;
};

export type ComponentData = {
  [key: string]: string | NestedComponent;
};
