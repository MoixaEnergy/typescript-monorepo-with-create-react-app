import React from "react";

const Foo: React.FC<{ children?: never }> = () => {
  return <h1>Foo</h1>;
};

export { Foo };
