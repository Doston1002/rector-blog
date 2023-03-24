import { lazy } from "react";

export function lazyImport(path, name) {
  return lazy(() => {
    const promise = import(/* @vite-ignore */ path);
    if (name == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[name] }));
    }
  });
}
