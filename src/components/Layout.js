import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Add the AuthButton or other header components here */}
      </header>
      <main>{children}</main> {/* Content of the page */}
    </div>
  );
};

export default Layout;
