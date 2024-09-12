import { useState } from "react"

export const useAsset = () => {
    const [assets, setAsset] = useState();

    const addAsset = ({
        asset
    }) => {

        setAsset((prevState) => {
            return [
                ...prevState,
                asset
            ]
        })
    }

    return { assets, setAsset }
}