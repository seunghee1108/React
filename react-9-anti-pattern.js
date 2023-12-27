function vanillaComponent(tagName, attributes, style, events, children) {
  let attributeString = "";
  for (const [key, value] of Object.entries(attributes)) {
    attributeString += `${key}="${value}"`;
  }

  let styleString = "";
  for (const [key, value] of Object.entries(style)) {
    styleString += `${key}: "${value}"`;
  }

  let eventString = "";
  for (const [key, value] of Object.entries(events)) {
    eventString += `${key}="${value}"`;
  }

  let childrenString = "";
  for (const child of children) {
    if (typeof (child) === "string" || typeof (child) === "number") {
      childrenString += child;
    } else {
      childrenString += child.outerHTML;
    }
  }

  const htmlString = `
    <${tagName}${attributeString} style="${styleString}"${eventString}>
      ${childrenString}
      </${tagName}>
      `;

      return htmlString;
}
