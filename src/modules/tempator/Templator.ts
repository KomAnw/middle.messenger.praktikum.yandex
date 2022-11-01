import parseTemplate from './parseTemplate';

class Templator {
  private TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  private SCRIPT_REGEXP = /<script(.*?)><\/script>/gi;
  private template: string;
  public markup: string | null;

  constructor(template: string) {
    this.template = template;
    this.markup = null;
  }

  public compile(data: any) {
    return this.compileTemplate(data);
  }

  private compileTemplate(data: any) {
    const tempateWitoutScript = this.template.replace(this.SCRIPT_REGEXP, '');
    const matchedVariables = [...tempateWitoutScript.matchAll(this.TEMPLATE_REGEXP)];

    return matchedVariables.reduce((template, current) => {
      const [variable, path] = current;
      const trimedPath = path.trim();
      const value = parseTemplate(data, trimedPath);
      const result = template.replace(variable, value);
      return result;
    }, tempateWitoutScript);
  }
}

export default Templator;
