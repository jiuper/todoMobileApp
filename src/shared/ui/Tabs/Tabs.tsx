import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import cnBind from "classnames/bind";

import { useActiveClass } from "../../lib/hooks/useActiveClass";
import { Button } from "../Button/Button";

import type { TabsType } from "./tabs.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Tabs = ({ tabsRoutes }: TabsType) => {
    const { indexBtn, setIsIndex } = useActiveClass(0);
    console.log(indexBtn);

    return (
        <div className={cx("tabs")}>
            {tabsRoutes.map((btn, i) => (
                <Button className={cx("tabs__tab")} handleClick={() => setIsIndex(i)} key={i}>
                    {btn.href && (
                        <Link className={cx("tabs__link", indexBtn === i ? "tabs__link-isActive" : "")} to={btn.href}>
                            <IonIcon icon={btn.icon} size="large" />
                        </Link>
                    )}
                </Button>
            ))}
        </div>
    );
};
