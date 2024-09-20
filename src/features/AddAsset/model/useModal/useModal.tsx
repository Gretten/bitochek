
import { useState } from "react"

/** todo перенести */
export const useModal = () => {
    const [isOpened, setIsOpened] = useState(false);
    const toggleModal = () => {
        setIsOpened(isOpened => !isOpened)
    }

    return { isOpened, toggleModal }
}