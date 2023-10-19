import { useCallback, useState } from "react";

export const useActiveClass = (initState: number) => {
    const [indexBtn, setIndexBtn] = useState<number>(initState);
    const setIsIndex = useCallback((index: number) => setIndexBtn(index), []);

    return { setIsIndex, indexBtn };
};
