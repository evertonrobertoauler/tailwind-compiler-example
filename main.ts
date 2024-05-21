import postcss from "postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

async function compileTailwindTemplate(html: string) {
  const compiler = postcss([
    autoprefixer,
    tailwindcss({ content: [{ raw: html, extension: "hbs" }] }),
  ]);

  const tailwindCss = `
/* @tailwind base; */
/* @tailwind components; */
@tailwind utilities;
`;

  const res = await compiler.process(tailwindCss, { from: "src/main.css" });

  return `
<style type="text/css">
  ${res.css}
</style>
${html}
`;
}

async function main() {
  const template = `
<h1 class="text-[20px] text-[#090909]">hello world</h1>
{{#if MY_VARIABLE }}
  <p class="text-[16px]">{{ MY_VARIABLE  }}</p>
{{/if}}
`;

  const templateCopilado = await compileTailwindTemplate(template);

  console.log("## ORIGINAL TEMPLATE ##");
  console.log(template);
  console.log("## COMPILED TEMPLATE ##");
  console.log(templateCopilado);
}

main().catch((err) => console.error("Erro:", err));
