declare module '*.json' {
  const json: any;
  export = json;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const url: string;
  export = url;
}

declare module '*.scss' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare module 'classnames' {
  const module: any;
  export = module;
}

declare module '*.pdf' {
  const module: any;
  export = module;
}

declare module '*.eps' {
  const module: any;
  export = module;
}

declare module '*.jpg' {
  const module: any;
  export = module;
}

declare module 'uuid'