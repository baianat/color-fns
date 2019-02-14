export declare abstract class Color {
    invalid: boolean;
    model: string;
    constructor(value: any);
    abstract validate(value: any): boolean;
}
