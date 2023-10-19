export interface IDropDownType {
    options: string[];
    type?: string;
    handleIsValue: (val: string, type: string) => void;
}
