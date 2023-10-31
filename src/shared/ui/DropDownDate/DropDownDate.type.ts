export interface IDropDownDateType {
    value: string;
    title: string;
    type: string;
    handleChange: (value: string, type: string) => void;
}
