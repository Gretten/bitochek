import { useState } from "react";

export const useTabs = ({ initialState }) => {
    const [activeTab, setActiveTab] = useState(initialState);

    const handleActiveTab = (tab) => {
        setActiveTab(tab)
    }

    return { activeTab, setActiveTab}
}