import React, {PropsWithChildren} from "react";

const SectionHeader = ({children}: PropsWithChildren) => {
    return <div className="container py-10 fs-40-85">{children}</div>;
};

export default SectionHeader;
