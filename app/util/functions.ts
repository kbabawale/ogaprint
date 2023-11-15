import { InputHTMLAttributes } from "react";

export class UtilFunction {
  static flattenArrayToObj = (
    arr: InputHTMLAttributes<unknown>[] | undefined
  ) => {
    var obj: any = {};

    if (arr) {
      for (var i = 0; i < arr.length; i++) {
        var o: any = arr[i];
        for (var key in o) {
          if (typeof o[key] != "function") {
            obj[key] = o[key];
          }
        }
      }
    }

    return obj;
  };
}
