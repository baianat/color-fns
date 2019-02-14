export abstract class Color {
  public invalid: boolean;
  public model: string;

  public constructor (value: any) {
    this.model = '__none__';
    this.invalid = false;
  }

  public abstract validate (value: any): boolean;
}
