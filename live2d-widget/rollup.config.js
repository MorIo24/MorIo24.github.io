import{nodeResolve as n}from"@rollup/plugin-node-resolve";import{createFilter as u}from"@rollup/pluginutils";function o(e={}){if(!e.include)throw Error("include option should be specified");const r=u(e.include,e.exclude);return{name:"string",transform(i,t){if(r(t))return{code:`export default ${JSON.stringify(i)};`,map:{mappings:""}}},renderChunk(i,t,d={}){return`/*!
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */
`+i}}}export default{input:"src/waifu-tips.js",plugins:[n(),o({include:"**/*.svg"})]};
