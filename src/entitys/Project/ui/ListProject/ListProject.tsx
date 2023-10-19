import { useHookSelector } from "../../../../shared/lib/module/store/configStore";
import { ProjectItem } from "../ProjectItem/ProjectItem";

export const ListProject = () => {
    const listProjects = useHookSelector((state) => state.projects.projects);

    return (
        <>
            {listProjects.map((p) => (
                <ProjectItem key={p.id} {...p} />
            ))}
        </>
    );
};
