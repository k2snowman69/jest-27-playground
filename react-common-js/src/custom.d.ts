declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: { [key: string]: string };
  export default content;
}
