import {NestedComponent} from 'src/utils';

export type ErrorProps = {
  error: string;
  errorMessage: string;
};

export type ComponentData = {
  [key: string]: string | NestedComponent;
};
