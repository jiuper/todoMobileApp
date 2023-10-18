import { useState } from "react";
import cnBind from "classnames/bind";

import type { IProjectItem } from "../../../entitys/Project/type/index.type";
import { Button } from "../../../shared/ui/Button/Button";
import { DropDown } from "../../../shared/ui/DropDown/DropDown";
import { DropDownDate } from "../../../shared/ui/DropDownDate/DropDownDate";
import { TextArea } from "../../../shared/ui/TextArea/TextArea";
import { TextInput } from "../../../shared/ui/TextInput/TextInput";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Form = ({ onSubmit }: { onSubmit: (date: IProjectItem) => void }) => {
    const [isDateForm, setIsDateForm] = useState<IProjectItem>({
        starDate: "",
        title: "",
        endDate: "",
        id: "",
        category: "",
        description: "",
        countTasks: 0,
        progress: 0,
    });
    const handleChange = (value: string, type: string) => setIsDateForm({ ...isDateForm, [type]: value });

    const handleSubmit = () => {
        const date: IProjectItem = {
            ...isDateForm,
            id: Math.random().toString(36).substring(2, 9),
        };

        return onSubmit(date);
    };

    return (
        <div className={cx("form")}>
            <div className={cx("form__field", "form__container")}>
                <div className={cx("form__content")}>
                    <DropDown handleIsValue={handleChange} type="category" options={[]} />
                    <TextInput
                        value={isDateForm.title}
                        handleChange={(e) => handleChange(e.target.value, "title")}
                        maxLength={25}
                    />
                    <TextArea
                        value={isDateForm.description}
                        handleChange={(e) => handleChange(e.target.value, "description")}
                        maxLength={150}
                    />
                    <DropDownDate
                        value={isDateForm.starDate}
                        handleChange={(e) => handleChange(e.target.value, "starDate")}
                        title="Star Date"
                    />
                    <DropDownDate
                        value={isDateForm.endDate}
                        handleChange={(e) => handleChange(e.target.value, "endDate")}
                        title="End Date"
                    />
                </div>
                <div className={cx("form__btn")}>
                    <Button
                        disabled={!isDateForm}
                        className={cx("btn-submit", "btn-action")}
                        handleClick={handleSubmit}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
};
