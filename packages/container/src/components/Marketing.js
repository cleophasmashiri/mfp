import React, { useEffect, useRef } from "react";

import { mount } from "marketing/Marketing";

export default () => {
  const root = useRef(null);

  useEffect(() => {
    mount(root.current);
  }, []);

  return <div ref={root}></div>;
};
