import React, { PropsWithChildren } from 'react';

const SectionTitle: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="section-title">
      <h2>
        <span>{children}</span>
      </h2>
    </div>
  );
};

export { SectionTitle };
