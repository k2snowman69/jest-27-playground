import React from "react";

import { add as addCommon } from "lib-common-js";
import { add as addModule } from "lib-module";
import { ExampleComponent as ExampleCommonComponent } from "react-common-js";
import { ExampleComponent as ExampleModuleComponent } from "react-module";

export interface ExampleComponentProps {
  className?: string;
}

export function ExampleComponent(props: ExampleComponentProps) {
  const { className } = props;

  return (
    <div className={`example-component ${className}`}>
      <div className="lib-common-js">{addCommon(1, 2)}</div>
      <div className="lib-module">{addModule(1, 2)}</div>
      <div className="react-common-js">
        <ExampleCommonComponent />
      </div>
      <div className="react-module">
        <ExampleModuleComponent />
      </div>
    </div>
  );
}
