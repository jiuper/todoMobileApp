import cnBind from "classnames/bind";

import type { IProjectItem } from "../../type/index.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const ProjectItem = ({
    endDate,
    starDate,
    countTasks,
    progress,
    id,
    category,
    title,
    description,
}: IProjectItem) => {
    return (
        <div className={cx("project")}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{id}</div>
        </div>
    );
};
