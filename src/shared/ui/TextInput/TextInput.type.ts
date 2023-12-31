export interface ITextInput {
    placeholder?: string;
    name?: string;
    className?: string;
    value: string | undefined;
    disabled?: boolean;
    type?: string;
    error?: string | null;
    maxLength?: number | undefined;
    isBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
