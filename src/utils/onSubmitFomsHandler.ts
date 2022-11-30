import { Props } from "src/modules/Component/types";
import { InputComponent } from "../components/Input/Input";
import { ProfileDataComponent } from "../components/ProfileData/ProfileData";
import { NestedComponent, NestedComponents } from "../modules/Component/types";

export const onSubmitFomsHandler = (
  form: HTMLFormElement,
  nestedComponents: NestedComponents,
  callBack: Function
) => {
  let validationResult: boolean[] = [];
  let userInputData: Record<string, string> = {};
  let isFormValid = false;

  const typeGuard = (
    component: NestedComponent
  ): InputComponent<Props> | ProfileDataComponent<Props> | false =>
    (component instanceof InputComponent ||
      component instanceof ProfileDataComponent) &&
    component;

  form.addEventListener("submit", (event) => {
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
    isFormValid && callBack(userInputData);
    console.log({
      ...userInputData,
      isFormValid,
    });
  });
};
