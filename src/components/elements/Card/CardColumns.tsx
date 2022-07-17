import React, { PropsWithChildren } from "react";

export interface ICardColumnsProps {
	className?: string;
}

const CardColumns: React.FC<PropsWithChildren<ICardColumnsProps>> = ({ children, className }) => {
	return <div className={`card-columns ${className ?? ""}`}>{children}</div>;
};

export { CardColumns };
