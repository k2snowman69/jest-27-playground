import { add as addCommon } from "lib-common-js";
import { add as addModule } from "lib-module";

export function addTwice(a: any, b: any): number {
  const result = addCommon(a, b);
  const result2 = addModule(a, b);
  return result + result2;
}
