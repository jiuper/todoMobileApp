import { useMemo, useState } from "react";
import { IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";

import AD from "../../assets/icons/ArrowDown.svg";
import { defaultOptionsDropDown, iconsDropDown } from "../../const/variables";
import { useBooleanState } from "../../lib/hooks/useBooleanState";
import { Button } from "../Button/Button";

import type { IDropDownType } from "./DropDown.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const DropDown = ({ options, handleIsValue, type = "" }: IDropDownType) => {
    const { value, toggleValue, setFalse } = useBooleanState(false);
    const [valueOption, setValueOption] = useState<string>("");
    const handleChange = (val: string) => {
        handleIsValue(val, type);
        setValueOption(val);
        setFalse();
    };
    const defaultOptions = useMemo(() => (options.length ? options : defaultOptionsDropDown), [options]);
    const iconSelect = useMemo(
        () => iconsDropDown[defaultOptions.findIndex((el) => el === valueOption)],
        [defaultOptions, valueOption],
    );

    return (
        <div className={cx("dropdown", "dropdown-md")}>
            <div className={cx("dropdown__container")}>
                <div className={cx("dropdown__content")}>
                    <div className={cx("dropdown__options")}>
                        <div className="dropdown__option-icon">
                            <IonIcon icon={iconSelect} />
                        </div>
                        <div className={cx("dropdown__option-body")}>
                            <div className={cx("dropdown__option-caption")}>Task Group</div>
                            <div className={cx("dropdown__option-caption")}>{valueOption}</div>
                            {value && (
                                <div className={cx("dropdown__option-items", "dropdown__option-md")}>
                                    {defaultOptions.map((option) => (
                                        <span
                                            className={cx("option-item")}
                                            key={option}
                                            onClick={() => handleChange(option)}
                                        >
                                            {option}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="dropdown__btn">
                    <Button handleClick={toggleValue}>
                        <IonIcon icon={AD} size="large" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
