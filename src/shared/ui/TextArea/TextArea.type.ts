export interface ITextArea {
    placeholder?: string;
    name?: string;
    className?: string;
    value: string | undefined;
    disabled?: boolean;
    error?: string | null;
    maxLength?: number | undefined;
    isBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
