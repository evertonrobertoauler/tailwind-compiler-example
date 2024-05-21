# Tailwind Template (HTML;Handlebars) Compiler Example

## Install Dependêncies

```sh
npm install
```

## Run Demo

```sh
npm run start
```

## Output

```
> tailwind-compiler-example@1.0.0 start
> ts-node main.ts

## ORIGINAL TEMPLATE ##

<h1 class="text-[20px] text-[#090909]">hello world</h1>
{{#if MY_VARIABLE }}
  <p class="text-[16px]">{{ MY_VARIABLE  }}</p>
{{/if}}

## COMPILED TEMPLATE ##

<style type="text/css">
  .text-\[16px\] {
    font-size: 16px
}
.text-\[20px\] {
    font-size: 20px
}
.text-\[\#090909\] {
    --tw-text-opacity: 1;
    color: rgb(9 9 9 / var(--tw-text-opacity))
}

</style>

<h1 class="text-[20px] text-[#090909]">hello world</h1>
{{#if MY_VARIABLE }}
  <p class="text-[16px]">{{ MY_VARIABLE  }}</p>
{{/if}}
```
