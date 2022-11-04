import {ButtonComponent} from './components/Button/Button';
import {InputComponent} from './components/Input/Input';
import {LinkComponent} from './components/Link/Link';
import {ProfileDataComponent} from './components/ProfileData/ProfileData';

export type NestedComponents = {
  [key: string]: NestedComponent;
};

export type NestedComponent =
  | InputComponent
  | ButtonComponent
  | LinkComponent
  | ProfileDataComponent;

export const onSubmitFomsHandler = (
    button: HTMLElement,
    nestedComponents: NestedComponents
) => {
  let validationResult: boolean[] = [];
  let userInputData: { [key: string]: string } = {};
  let isFormValid = false;

  const typeGuard = (
      component: NestedComponent
  ): InputComponent | ProfileDataComponent | false =>
    (component instanceof InputComponent ||
      component instanceof ProfileDataComponent) &&
    component;

  button.addEventListener('click', (event) => {
    event.preventDefault();
    validationResult = [];
    for (const component in nestedComponents) {
      const input = typeGuard(nestedComponents[component]);
      if (input) {
        input.runValidation();
        validationResult.push(input.isValid);
        userInputData = {
          ...userInputData,
          [input.name]: input.value,
        };
      }
    }
    isFormValid = validationResult.every((elem) => !!elem);
    console.log({
      ...userInputData,
      isFormValid,
    });
  });
};
