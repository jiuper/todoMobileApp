export interface ITextInputType {
    label?: string;
    placeholder: string;
    type?:
        | "date"
        | "datetime-local"
        | "email"
        | "month"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
    value: string;
    onChange: () => void;
    fill?: "solid" | "outline";
    labelPlacement?: "end" | "fixed" | "floating" | "stacked" | "start";
    onBlur?: () => void;
    required?: boolean;
    multiple?: boolean;
    name?: string;
}
