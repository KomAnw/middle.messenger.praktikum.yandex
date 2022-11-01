import CustomHTML from '../customHTML/customHTML';
import Templator from '../tempator/Templator';

type ComponentProps = {
  template: string;
  componentData: any;
  nestedComponents?: any;
  script?: any;
};

class Component {
  private template;
  private componentData;
  private nestedComponents;
  private script;

  constructor({template, componentData, nestedComponents, script}: ComponentProps) {
    this.template = template;
    this.componentData = componentData;
    this.nestedComponents = nestedComponents;
    this.script = script;
  }

  public createComponent() {
    const compiledTemplate = new Templator(this.template).compile(this.componentData);
    const markup = this.generateMarkup(compiledTemplate);

    if (this.script) {
      return this.script && new CustomHTML(markup, this.script);
    }

    return markup;
  }

  private generateMarkup(compiledTemplate: string) {
    const node = new DOMParser().parseFromString(compiledTemplate, 'text/html').body
        .firstElementChild!;

    if (this.nestedComponents) {
      return this.replaceNodesToComponents(node);
    }

    return node;
  }

  private replaceNodesToComponents(node: Element) {
    const components = node.querySelectorAll('component');
    components?.forEach((oldComponent) => {
      const componentId = oldComponent.id;
      const newComponent = this.nestedComponents[componentId];
      oldComponent.replaceWith(newComponent);
    });
    return node;
  }
}

export default Component;
