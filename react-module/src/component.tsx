import React from "react";

export interface ExampleComponentProps {
  className?: string;
}

export function ExampleComponent(props: ExampleComponentProps) {
  const { className } = props;

  return (
    <div className={`example-component ${className}`}>Content goes here!</div>
  );
}
