import { ADD_PROJECT } from "../../entitys/Project/lib/module/store";
import type { IProjectItem } from "../../entitys/Project/type/index.type";
import { ListProject } from "../../entitys/Project/ui/ListProject/ListProject";
import { Form } from "../../features/ui/Form/Form";
import { isOpen } from "../../shared/lib/module/reducers/generalReducer";
import { useHookDispatch } from "../../shared/lib/module/store/configStore";
import { GeneralPageLayout } from "../../widgets/GeneralPageLayout/GeneralPageLayout";
import { Modal } from "../../widgets/Modal";

export const Home = () => {
    const dispatch = useHookDispatch();
    const onSubmit = (date: IProjectItem) => {
        dispatch(ADD_PROJECT(date));
        dispatch(isOpen());
    };

    return (
        <GeneralPageLayout>
            <div>Home</div>
            <div>
                <ListProject />
            </div>
            <Modal>
                <Form onSubmit={onSubmit} />
            </Modal>
        </GeneralPageLayout>
    );
};
