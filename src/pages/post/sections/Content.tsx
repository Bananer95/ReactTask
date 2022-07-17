import React, { PropsWithChildren } from 'react';

const Content: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="article-post">{children}</div>;
};

export default Content;
