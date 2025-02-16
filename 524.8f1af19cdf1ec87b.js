"use strict";(self.webpackChunkmill_shop=self.webpackChunkmill_shop||[]).push([[524],{7653:(l,g,t)=>{t.d(g,{i:()=>c});var n=t(138);class c{static createCategory(e){return{name:e.name,slug:e.slug,image:n.$.createImage(e.image),productCount:e.product?e.product.length:0}}}},776:(l,g,t)=>{t.d(g,{I:()=>_});var n=t(4438),c=t(9797),a=t(3981),e=t(345);let _=(()=>{class r{router=(0,n.WQX)(c.Ix);sanitizer=(0,n.WQX)(e.up);categorySignal=(0,n.hFB)();isLoadingSignal=(0,n.hFB)(!1);backgroundImageSignal(){return this.sanitizer.bypassSecurityTrustUrl(`${this.categorySignal()?.image?.url||""}`)}onClick(){this.categorySignal()&&this.router.navigate(["/","categories",this.categorySignal()?.slug])}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=n.VBU({type:r,selectors:[["app-category-card"]],inputs:{categorySignal:[1,"categorySignal"],isLoadingSignal:[1,"isLoadingSignal"]},decls:6,vars:5,consts:[[1,"category",3,"click","isLoading"],[1,"category-image",3,"src","alt"],[1,"category-name"],[1,"category-product-count"]],template:function(i,o){if(1&i&&(n.j41(0,"lib-clickbox",0),n.bIt("click",function(){return o.onClick()}),n.nrm(1,"img",1),n.j41(2,"div",2),n.EFF(3),n.k0s(),n.j41(4,"div",3),n.EFF(5),n.k0s()()),2&i){let m,d,p;n.Y8G("isLoading",o.isLoadingSignal()),n.R7$(),n.Y8G("src",o.backgroundImageSignal(),n.B4B)("alt",null==(m=o.categorySignal())?null:m.name),n.R7$(2),n.JRh(null==(d=o.categorySignal())?null:d.name),n.R7$(2),n.SpI("Check ",null==(p=o.categorySignal())?null:p.productCount," products")}},dependencies:[a.D],styles:['\nhtml[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit;cursor:pointer}button[_ngcontent-%COMP%]{background-color:transparent;color:inherit;border-width:0;padding:0;cursor:pointer}figure[_ngcontent-%COMP%]{margin:0}input[_ngcontent-%COMP%]::-moz-focus-inner{border:0;padding:0;margin:0}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0;font-size:inherit;font-weight:inherit}p[_ngcontent-%COMP%]{margin:0}cite[_ngcontent-%COMP%]{font-style:normal}fieldset[_ngcontent-%COMP%]{border-width:0;padding:0;margin:0}body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{margin:0;padding:0}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}fieldset[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{border:0}address[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], th[_ngcontent-%COMP%], var[_ngcontent-%COMP%]{font-style:normal;font-weight:400}caption[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:left}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:100%;font-weight:400}q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after{content:""}abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%]{border:0}html[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-variant-ligatures:none;-webkit-font-variant-ligatures:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-shadow:rgba(0,0,0,.01) 0 0 1px}[_ngcontent-%COMP%]:root{--font-type-default: Inter, sans-serif;--font-weight-regular: 400;--font-weight-bold: 700;--font-size-default: .75rem;--font-size-1: .75rem;--font-size-2: .875rem;--font-size-3: 1rem;--font-size-4: 1.25rem;--font-size-5: 1.5rem;--font-size-6: 2rem;--font-size-7: 2.5rem;--font-size-8: 3rem;--font-size-9: 3.75rem;--line-height-1: 1.2;--line-height-2: 1.3;--line-height-3: 1.5;--line-height-4: 1.75;--space-0: 0rem;--space-1: .25rem;--space-2: .5rem;--space-3: .75rem;--space-4: 1rem;--space-5: 1.25rem;--space-6: 1.5rem;--space-7: 2rem;--space-8: 2.5rem;--space-9: 3rem;--space-10: 4rem;--shadow-light: 0px 1px 3px rgba(0, 0, 0, .1);--shadow-medium: 0px 3px 6px rgba(0, 0, 0, .12);--shadow-strong: 0px 6px 12px rgba(0, 0, 0, .15);--shadow-hover: 0px 4px 8px rgba(0, 0, 0, .18);--shadow-focus: 0px 0px 2px 2px rgba(1, 110, 244, .3);--primary-1: #e3f2fd;--primary-2: #bbdefb;--primary-3: #90caf9;--primary-4: #64b5f6;--primary-5: #42a5f5;--primary-6: #2196f3;--primary-7: #1e88e5;--secondary-1: #e0f2f1;--secondary-2: #b2dfdb;--secondary-3: #80cbc4;--secondary-4: #4db6ac;--secondary-5: #26a69a;--secondary-6: #009688;--secondary-7: #00796b;--neutral-1: #f5f5f5;--neutral-2: #e0e0e0;--neutral-3: #bdbdbd;--neutral-4: #9e9e9e;--neutral-5: #757575;--neutral-6: #616161;--neutral-7: #424242;--neutral-8: #212121;--success: #4caf50;--warning: #ff9800;--error: #f44336;--info: #2196f3;--border-default: inset 0 0 0 2px #9e9e9e;--border-hover: inset 0 0 0 2px #42a5f5;--border-focus: 0 0 2px 2px rgba(8, 118, 254, .3), inset 0 0 0 2px #2196f3;--border-active: inset 0 0 0 2px #1e88e5;--border-error: inset 0 0 0 2px #f44336;--border-disabled: inset 0 0 0 2px #bdbdbd;--border-highlighted: inset 0 0 0 2px #80cbc4;--system-default: #0a0a0a;--system-negative: #fff;--system-background: #fff;--system-link: #1e88e5;--bp-mobile: 375px;--bp-tablet: 768px;--bp-desktop: 1024px;--bp-large: 1440px;--grid-columns-desktop: 12;--grid-columns-mobile: 4;--grid-gap: 1rem}.border--border-none[_ngcontent-%COMP%]{position:relative}.border--border-none[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:none,0 1px 3px #0000001a}.border--border-default[_ngcontent-%COMP%]{position:relative}.border--border-default[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:inset 0 0 0 2px #9e9e9e,0 1px 3px #0000001a}.border--border-hover[_ngcontent-%COMP%]{position:relative}.border--border-hover[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:inset 0 0 0 2px #42a5f5,0 1px 3px #0000001a}.border--border-focus[_ngcontent-%COMP%]{position:relative}.border--border-focus[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:0 0 2px 2px #0876fe4d,inset 0 0 0 2px #2196f3,0 1px 3px #0000001a}.border--border-active[_ngcontent-%COMP%]{position:relative}.border--border-active[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:inset 0 0 0 2px #1e88e5,0 1px 3px #0000001a}.border--border-error[_ngcontent-%COMP%]{position:relative}.border--border-error[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:inset 0 0 0 2px #f44336,0 1px 3px #0000001a}.border--border-disabled[_ngcontent-%COMP%]{position:relative}.border--border-disabled[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:inset 0 0 0 2px #bdbdbd,0 1px 3px #0000001a}.border--border-highlighted[_ngcontent-%COMP%]{position:relative}.border--border-highlighted[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--border-index, 1);border-radius:var(--radius, 8px);box-shadow:inset 0 0 0 2px #80cbc4,0 1px 3px #0000001a}.text-primary-1[_ngcontent-%COMP%]{color:#e3f2fd}.border-primary-1[_ngcontent-%COMP%]{border-color:#e3f2fd}.text-primary-2[_ngcontent-%COMP%]{color:#bbdefb}.border-primary-2[_ngcontent-%COMP%]{border-color:#bbdefb}.text-primary-3[_ngcontent-%COMP%]{color:#90caf9}.border-primary-3[_ngcontent-%COMP%]{border-color:#90caf9}.text-primary-4[_ngcontent-%COMP%]{color:#64b5f6}.border-primary-4[_ngcontent-%COMP%]{border-color:#64b5f6}.text-primary-5[_ngcontent-%COMP%]{color:#42a5f5}.border-primary-5[_ngcontent-%COMP%]{border-color:#42a5f5}.text-primary-6[_ngcontent-%COMP%]{color:#2196f3}.border-primary-6[_ngcontent-%COMP%]{border-color:#2196f3}.text-primary-7[_ngcontent-%COMP%]{color:#1e88e5}.border-primary-7[_ngcontent-%COMP%]{border-color:#1e88e5}.text-secondary-1[_ngcontent-%COMP%]{color:#e0f2f1}.border-secondary-1[_ngcontent-%COMP%]{border-color:#e0f2f1}.text-secondary-2[_ngcontent-%COMP%]{color:#b2dfdb}.border-secondary-2[_ngcontent-%COMP%]{border-color:#b2dfdb}.text-secondary-3[_ngcontent-%COMP%]{color:#80cbc4}.border-secondary-3[_ngcontent-%COMP%]{border-color:#80cbc4}.text-secondary-4[_ngcontent-%COMP%]{color:#4db6ac}.border-secondary-4[_ngcontent-%COMP%]{border-color:#4db6ac}.text-secondary-5[_ngcontent-%COMP%]{color:#26a69a}.border-secondary-5[_ngcontent-%COMP%]{border-color:#26a69a}.text-secondary-6[_ngcontent-%COMP%]{color:#009688}.border-secondary-6[_ngcontent-%COMP%]{border-color:#009688}.text-neutral-1[_ngcontent-%COMP%]{color:#f5f5f5}.border-neutral-1[_ngcontent-%COMP%]{border-color:#f5f5f5}.text-neutral-2[_ngcontent-%COMP%]{color:#e0e0e0}.border-neutral-2[_ngcontent-%COMP%]{border-color:#e0e0e0}.text-neutral-3[_ngcontent-%COMP%]{color:#bdbdbd}.border-neutral-3[_ngcontent-%COMP%]{border-color:#bdbdbd}.text-neutral-4[_ngcontent-%COMP%]{color:#9e9e9e}.border-neutral-4[_ngcontent-%COMP%]{border-color:#9e9e9e}.text-neutral-5[_ngcontent-%COMP%]{color:#757575}.border-neutral-5[_ngcontent-%COMP%]{border-color:#757575}.text-neutral-6[_ngcontent-%COMP%]{color:#616161}.border-neutral-6[_ngcontent-%COMP%]{border-color:#616161}.text-neutral-7[_ngcontent-%COMP%]{color:#424242}.border-neutral-7[_ngcontent-%COMP%]{border-color:#424242}.text-neutral-8[_ngcontent-%COMP%]{color:#212121}.border-neutral-8[_ngcontent-%COMP%]{border-color:#212121}.text-status-success[_ngcontent-%COMP%]{color:#4caf50}.border-status-success[_ngcontent-%COMP%]{border-color:#4caf50}.text-status-warning[_ngcontent-%COMP%]{color:#ff9800}.border-status-warning[_ngcontent-%COMP%]{border-color:#ff9800}.text-status-error[_ngcontent-%COMP%]{color:#f44336}.border-status-error[_ngcontent-%COMP%]{border-color:#f44336}.text-status-info[_ngcontent-%COMP%]{color:#2196f3}.border-status-info[_ngcontent-%COMP%]{border-color:#2196f3}.grid[_ngcontent-%COMP%]{display:grid;grid-gap:1rem;grid-template-columns:repeat(4,1fr)}@media (min-width: 1024px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(12,1fr)}}.col-m-1[_ngcontent-%COMP%]{grid-column:span 1}.col-m-2[_ngcontent-%COMP%]{grid-column:span 2}.col-m-3[_ngcontent-%COMP%]{grid-column:span 3}.col-m-4[_ngcontent-%COMP%]{grid-column:span 4}@media (min-width: 1024px){.col-d-1[_ngcontent-%COMP%]{grid-column:span 1}}@media (min-width: 1024px){.col-d-2[_ngcontent-%COMP%]{grid-column:span 2}}@media (min-width: 1024px){.col-d-3[_ngcontent-%COMP%]{grid-column:span 3}}@media (min-width: 1024px){.col-d-4[_ngcontent-%COMP%]{grid-column:span 4}}@media (min-width: 1024px){.col-d-5[_ngcontent-%COMP%]{grid-column:span 5}}@media (min-width: 1024px){.col-d-6[_ngcontent-%COMP%]{grid-column:span 6}}@media (min-width: 1024px){.col-d-7[_ngcontent-%COMP%]{grid-column:span 7}}@media (min-width: 1024px){.col-d-8[_ngcontent-%COMP%]{grid-column:span 8}}@media (min-width: 1024px){.col-d-9[_ngcontent-%COMP%]{grid-column:span 9}}@media (min-width: 1024px){.col-d-10[_ngcontent-%COMP%]{grid-column:span 10}}@media (min-width: 1024px){.col-d-11[_ngcontent-%COMP%]{grid-column:span 11}}@media (min-width: 1024px){.col-d-12[_ngcontent-%COMP%]{grid-column:span 12}}.col-1[_ngcontent-%COMP%]{grid-column:span 1}.col-2[_ngcontent-%COMP%]{grid-column:span 2}.col-3[_ngcontent-%COMP%]{grid-column:span 3}.col-4[_ngcontent-%COMP%]{grid-column:span 4}.col-5[_ngcontent-%COMP%]{grid-column:span 5}.col-6[_ngcontent-%COMP%]{grid-column:span 6}.col-7[_ngcontent-%COMP%]{grid-column:span 7}.col-8[_ngcontent-%COMP%]{grid-column:span 8}.col-9[_ngcontent-%COMP%]{grid-column:span 9}.col-10[_ngcontent-%COMP%]{grid-column:span 10}.col-11[_ngcontent-%COMP%]{grid-column:span 11}.col-12[_ngcontent-%COMP%]{grid-column:span 12}.offset-m-1[_ngcontent-%COMP%]{grid-column-start:2}.offset-m-2[_ngcontent-%COMP%]{grid-column-start:3}.offset-m-3[_ngcontent-%COMP%]{grid-column-start:4}@media (min-width: 1024px){.offset-d-1[_ngcontent-%COMP%]{grid-column-start:2}}@media (min-width: 1024px){.offset-d-2[_ngcontent-%COMP%]{grid-column-start:3}}@media (min-width: 1024px){.offset-d-3[_ngcontent-%COMP%]{grid-column-start:4}}@media (min-width: 1024px){.offset-d-4[_ngcontent-%COMP%]{grid-column-start:5}}@media (min-width: 1024px){.offset-d-5[_ngcontent-%COMP%]{grid-column-start:6}}@media (min-width: 1024px){.offset-d-6[_ngcontent-%COMP%]{grid-column-start:7}}@media (min-width: 1024px){.offset-d-7[_ngcontent-%COMP%]{grid-column-start:8}}@media (min-width: 1024px){.offset-d-8[_ngcontent-%COMP%]{grid-column-start:9}}@media (min-width: 1024px){.offset-d-9[_ngcontent-%COMP%]{grid-column-start:10}}@media (min-width: 1024px){.offset-d-10[_ngcontent-%COMP%]{grid-column-start:11}}@media (min-width: 1024px){.offset-d-11[_ngcontent-%COMP%]{grid-column-start:12}}.shadow-light[_ngcontent-%COMP%]{box-shadow:0 1px 3px #0000001a}.shadow-medium[_ngcontent-%COMP%]{box-shadow:0 3px 6px #0000001f}.shadow-strong[_ngcontent-%COMP%]{box-shadow:0 6px 12px #00000026}.shadow-hover[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0000002e}.shadow-focus[_ngcontent-%COMP%]{box-shadow:0 0 2px 2px #016ef44d}.m-0[_ngcontent-%COMP%]{margin:0rem}.m-t-0[_ngcontent-%COMP%]{margin-top:0rem}.m-b-0[_ngcontent-%COMP%]{margin-bottom:0rem}.m-l-0[_ngcontent-%COMP%]{margin-left:0rem}.m-r-0[_ngcontent-%COMP%]{margin-right:0rem}.m-x-0[_ngcontent-%COMP%]{left:0rem;right:0rem}.m-y-0[_ngcontent-%COMP%]{top:0rem;bottom:0rem}.m-1[_ngcontent-%COMP%]{margin:.25rem}.m-t-1[_ngcontent-%COMP%]{margin-top:.25rem}.m-b-1[_ngcontent-%COMP%]{margin-bottom:.25rem}.m-l-1[_ngcontent-%COMP%]{margin-left:.25rem}.m-r-1[_ngcontent-%COMP%]{margin-right:.25rem}.m-x-1[_ngcontent-%COMP%]{left:.25rem;right:.25rem}.m-y-1[_ngcontent-%COMP%]{top:.25rem;bottom:.25rem}.m-2[_ngcontent-%COMP%]{margin:.5rem}.m-t-2[_ngcontent-%COMP%]{margin-top:.5rem}.m-b-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.m-l-2[_ngcontent-%COMP%]{margin-left:.5rem}.m-r-2[_ngcontent-%COMP%]{margin-right:.5rem}.m-x-2[_ngcontent-%COMP%]{left:.5rem;right:.5rem}.m-y-2[_ngcontent-%COMP%]{top:.5rem;bottom:.5rem}.m-3[_ngcontent-%COMP%]{margin:.75rem}.m-t-3[_ngcontent-%COMP%]{margin-top:.75rem}.m-b-3[_ngcontent-%COMP%]{margin-bottom:.75rem}.m-l-3[_ngcontent-%COMP%]{margin-left:.75rem}.m-r-3[_ngcontent-%COMP%]{margin-right:.75rem}.m-x-3[_ngcontent-%COMP%]{left:.75rem;right:.75rem}.m-y-3[_ngcontent-%COMP%]{top:.75rem;bottom:.75rem}.m-4[_ngcontent-%COMP%]{margin:1rem}.m-t-4[_ngcontent-%COMP%]{margin-top:1rem}.m-b-4[_ngcontent-%COMP%]{margin-bottom:1rem}.m-l-4[_ngcontent-%COMP%]{margin-left:1rem}.m-r-4[_ngcontent-%COMP%]{margin-right:1rem}.m-x-4[_ngcontent-%COMP%]{left:1rem;right:1rem}.m-y-4[_ngcontent-%COMP%]{top:1rem;bottom:1rem}.m-5[_ngcontent-%COMP%]{margin:1.25rem}.m-t-5[_ngcontent-%COMP%]{margin-top:1.25rem}.m-b-5[_ngcontent-%COMP%]{margin-bottom:1.25rem}.m-l-5[_ngcontent-%COMP%]{margin-left:1.25rem}.m-r-5[_ngcontent-%COMP%]{margin-right:1.25rem}.m-x-5[_ngcontent-%COMP%]{left:1.25rem;right:1.25rem}.m-y-5[_ngcontent-%COMP%]{top:1.25rem;bottom:1.25rem}.m-6[_ngcontent-%COMP%]{margin:1.5rem}.m-t-6[_ngcontent-%COMP%]{margin-top:1.5rem}.m-b-6[_ngcontent-%COMP%]{margin-bottom:1.5rem}.m-l-6[_ngcontent-%COMP%]{margin-left:1.5rem}.m-r-6[_ngcontent-%COMP%]{margin-right:1.5rem}.m-x-6[_ngcontent-%COMP%]{left:1.5rem;right:1.5rem}.m-y-6[_ngcontent-%COMP%]{top:1.5rem;bottom:1.5rem}.m-7[_ngcontent-%COMP%]{margin:2rem}.m-t-7[_ngcontent-%COMP%]{margin-top:2rem}.m-b-7[_ngcontent-%COMP%]{margin-bottom:2rem}.m-l-7[_ngcontent-%COMP%]{margin-left:2rem}.m-r-7[_ngcontent-%COMP%]{margin-right:2rem}.m-x-7[_ngcontent-%COMP%]{left:2rem;right:2rem}.m-y-7[_ngcontent-%COMP%]{top:2rem;bottom:2rem}.m-8[_ngcontent-%COMP%]{margin:2.5rem}.m-t-8[_ngcontent-%COMP%]{margin-top:2.5rem}.m-b-8[_ngcontent-%COMP%]{margin-bottom:2.5rem}.m-l-8[_ngcontent-%COMP%]{margin-left:2.5rem}.m-r-8[_ngcontent-%COMP%]{margin-right:2.5rem}.m-x-8[_ngcontent-%COMP%]{left:2.5rem;right:2.5rem}.m-y-8[_ngcontent-%COMP%]{top:2.5rem;bottom:2.5rem}.m-9[_ngcontent-%COMP%]{margin:3rem}.m-t-9[_ngcontent-%COMP%]{margin-top:3rem}.m-b-9[_ngcontent-%COMP%]{margin-bottom:3rem}.m-l-9[_ngcontent-%COMP%]{margin-left:3rem}.m-r-9[_ngcontent-%COMP%]{margin-right:3rem}.m-x-9[_ngcontent-%COMP%]{left:3rem;right:3rem}.m-y-9[_ngcontent-%COMP%]{top:3rem;bottom:3rem}.m-10[_ngcontent-%COMP%]{margin:4rem}.m-t-10[_ngcontent-%COMP%]{margin-top:4rem}.m-b-10[_ngcontent-%COMP%]{margin-bottom:4rem}.m-l-10[_ngcontent-%COMP%]{margin-left:4rem}.m-r-10[_ngcontent-%COMP%]{margin-right:4rem}.m-x-10[_ngcontent-%COMP%]{left:4rem;right:4rem}.m-y-10[_ngcontent-%COMP%]{top:4rem;bottom:4rem}.p-0[_ngcontent-%COMP%]{padding:0rem}.p-t-0[_ngcontent-%COMP%]{padding-top:0rem}.p-b-0[_ngcontent-%COMP%]{padding-bottom:0rem}.p-l-0[_ngcontent-%COMP%]{padding-left:0rem}.p-r-0[_ngcontent-%COMP%]{padding-right:0rem}.p-x-0[_ngcontent-%COMP%]{left:0rem;right:0rem}.p-y-0[_ngcontent-%COMP%]{top:0rem;bottom:0rem}.p-1[_ngcontent-%COMP%]{padding:.25rem}.p-t-1[_ngcontent-%COMP%]{padding-top:.25rem}.p-b-1[_ngcontent-%COMP%]{padding-bottom:.25rem}.p-l-1[_ngcontent-%COMP%]{padding-left:.25rem}.p-r-1[_ngcontent-%COMP%]{padding-right:.25rem}.p-x-1[_ngcontent-%COMP%]{left:.25rem;right:.25rem}.p-y-1[_ngcontent-%COMP%]{top:.25rem;bottom:.25rem}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-t-2[_ngcontent-%COMP%]{padding-top:.5rem}.p-b-2[_ngcontent-%COMP%]{padding-bottom:.5rem}.p-l-2[_ngcontent-%COMP%]{padding-left:.5rem}.p-r-2[_ngcontent-%COMP%]{padding-right:.5rem}.p-x-2[_ngcontent-%COMP%]{left:.5rem;right:.5rem}.p-y-2[_ngcontent-%COMP%]{top:.5rem;bottom:.5rem}.p-3[_ngcontent-%COMP%]{padding:.75rem}.p-t-3[_ngcontent-%COMP%]{padding-top:.75rem}.p-b-3[_ngcontent-%COMP%]{padding-bottom:.75rem}.p-l-3[_ngcontent-%COMP%]{padding-left:.75rem}.p-r-3[_ngcontent-%COMP%]{padding-right:.75rem}.p-x-3[_ngcontent-%COMP%]{left:.75rem;right:.75rem}.p-y-3[_ngcontent-%COMP%]{top:.75rem;bottom:.75rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.p-t-4[_ngcontent-%COMP%]{padding-top:1rem}.p-b-4[_ngcontent-%COMP%]{padding-bottom:1rem}.p-l-4[_ngcontent-%COMP%]{padding-left:1rem}.p-r-4[_ngcontent-%COMP%]{padding-right:1rem}.p-x-4[_ngcontent-%COMP%]{left:1rem;right:1rem}.p-y-4[_ngcontent-%COMP%]{top:1rem;bottom:1rem}.p-5[_ngcontent-%COMP%]{padding:1.25rem}.p-t-5[_ngcontent-%COMP%]{padding-top:1.25rem}.p-b-5[_ngcontent-%COMP%]{padding-bottom:1.25rem}.p-l-5[_ngcontent-%COMP%]{padding-left:1.25rem}.p-r-5[_ngcontent-%COMP%]{padding-right:1.25rem}.p-x-5[_ngcontent-%COMP%]{left:1.25rem;right:1.25rem}.p-y-5[_ngcontent-%COMP%]{top:1.25rem;bottom:1.25rem}.p-6[_ngcontent-%COMP%]{padding:1.5rem}.p-t-6[_ngcontent-%COMP%]{padding-top:1.5rem}.p-b-6[_ngcontent-%COMP%]{padding-bottom:1.5rem}.p-l-6[_ngcontent-%COMP%]{padding-left:1.5rem}.p-r-6[_ngcontent-%COMP%]{padding-right:1.5rem}.p-x-6[_ngcontent-%COMP%]{left:1.5rem;right:1.5rem}.p-y-6[_ngcontent-%COMP%]{top:1.5rem;bottom:1.5rem}.p-7[_ngcontent-%COMP%]{padding:2rem}.p-t-7[_ngcontent-%COMP%]{padding-top:2rem}.p-b-7[_ngcontent-%COMP%]{padding-bottom:2rem}.p-l-7[_ngcontent-%COMP%]{padding-left:2rem}.p-r-7[_ngcontent-%COMP%]{padding-right:2rem}.p-x-7[_ngcontent-%COMP%]{left:2rem;right:2rem}.p-y-7[_ngcontent-%COMP%]{top:2rem;bottom:2rem}.p-8[_ngcontent-%COMP%]{padding:2.5rem}.p-t-8[_ngcontent-%COMP%]{padding-top:2.5rem}.p-b-8[_ngcontent-%COMP%]{padding-bottom:2.5rem}.p-l-8[_ngcontent-%COMP%]{padding-left:2.5rem}.p-r-8[_ngcontent-%COMP%]{padding-right:2.5rem}.p-x-8[_ngcontent-%COMP%]{left:2.5rem;right:2.5rem}.p-y-8[_ngcontent-%COMP%]{top:2.5rem;bottom:2.5rem}.p-9[_ngcontent-%COMP%]{padding:3rem}.p-t-9[_ngcontent-%COMP%]{padding-top:3rem}.p-b-9[_ngcontent-%COMP%]{padding-bottom:3rem}.p-l-9[_ngcontent-%COMP%]{padding-left:3rem}.p-r-9[_ngcontent-%COMP%]{padding-right:3rem}.p-x-9[_ngcontent-%COMP%]{left:3rem;right:3rem}.p-y-9[_ngcontent-%COMP%]{top:3rem;bottom:3rem}.p-10[_ngcontent-%COMP%]{padding:4rem}.p-t-10[_ngcontent-%COMP%]{padding-top:4rem}.p-b-10[_ngcontent-%COMP%]{padding-bottom:4rem}.p-l-10[_ngcontent-%COMP%]{padding-left:4rem}.p-r-10[_ngcontent-%COMP%]{padding-right:4rem}.p-x-10[_ngcontent-%COMP%]{left:4rem;right:4rem}.p-y-10[_ngcontent-%COMP%]{top:4rem;bottom:4rem}.h1[_ngcontent-%COMP%]{font-size:2.5rem;line-height:2}@media (min-width: 768px){.h1-d[_ngcontent-%COMP%]{font-size:3.75rem;line-height:2}}.h2[_ngcontent-%COMP%]{font-size:2rem;line-height:1.75}@media (min-width: 768px){.h2-d[_ngcontent-%COMP%]{font-size:3rem;line-height:1.75}}.body1[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5}@media (min-width: 768px){.body1-d[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.5}}.body2[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.3}@media (min-width: 768px){.body2-d[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5}}.small[_ngcontent-%COMP%]{font-size:.75rem;line-height:1.2}@media (min-width: 768px){.small-d[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.3}}.title1[_ngcontent-%COMP%]{font-size:3.75rem;line-height:2}@media (min-width: 768px){.title1-d[_ngcontent-%COMP%]{font-size:3.75rem;line-height:2}}.title2[_ngcontent-%COMP%]{font-size:2rem;line-height:1.75}@media (min-width: 768px){.title2-d[_ngcontent-%COMP%]{font-size:2.5rem;line-height:1.75}}.price1[_ngcontent-%COMP%]{font-size:2.5rem;line-height:1.75}@media (min-width: 768px){.price1-d[_ngcontent-%COMP%]{font-size:3rem;line-height:1.75}}.price2[_ngcontent-%COMP%]{font-size:1.5rem;line-height:1.5}@media (min-width: 768px){.price2-d[_ngcontent-%COMP%]{font-size:2rem;line-height:1.5}}.text--regular[_ngcontent-%COMP%]{font-weight:400}.text--bold[_ngcontent-%COMP%]{font-weight:700}.lib-container[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:0 .5rem;margin:0 auto}@media (min-width: 768px) and (max-width: 1023px){.lib-container[_ngcontent-%COMP%]{max-width:768px;padding-left:.75rem;padding-right:.75rem}}@media (min-width: 1024px) and (max-width: 1439px){.lib-container[_ngcontent-%COMP%]{max-width:1024px;padding-left:1rem;padding-right:1rem}}@media (min-width: 1440px){.lib-container[_ngcontent-%COMP%]{max-width:1440px;padding-left:1.25rem;padding-right:1.25rem}}.lib-container-fluid[_ngcontent-%COMP%]{width:100%;padding:0 .5rem}.category[_ngcontent-%COMP%]{width:100%;max-height:30vh;overflow:hidden}.category-name[_ngcontent-%COMP%]{position:absolute;top:10%;left:5%;font-weight:700;font-size:2rem;line-height:1.75}@media (min-width: 1024px){.category-name[_ngcontent-%COMP%]{font-size:2.5rem;line-height:1.75}}.category-product-count[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;background-color:#0a0a0a;color:#fff;padding:.25rem .5rem;border-radius:.25rem;font-weight:700;transform:translateY(100%);opacity:0;transition:opacity .3s ease-in-out,transform .3s ease-in-out;width:100%;height:50px;display:flex;justify-content:center;align-items:center;font-size:.875rem;line-height:1.3}@media (min-width: 1024px){.category-product-count[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5}}.category-image[_ngcontent-%COMP%]{display:block;min-width:auto;object-fit:cover;object-position:center center;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:.75rem;transition:transform .3s ease-in-out}.category[_ngcontent-%COMP%]:hover   .category-image[_ngcontent-%COMP%]{transform:scale(1.2)}.category[_ngcontent-%COMP%]:hover   .category-product-count[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}']})}return r})()}}]);