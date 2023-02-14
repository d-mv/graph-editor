export function makeMarkdown(v: string): string {
  return `
\`\`\`mermaid
${v}
\`\`\`
  `;
}
