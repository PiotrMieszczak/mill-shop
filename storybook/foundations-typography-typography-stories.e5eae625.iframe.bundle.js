"use strict";(self.webpackChunk_mill_shop_source=self.webpackChunk_mill_shop_source||[]).push([[619],{"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./libs/src/lib/design-system/stories/foundations/typography/typography.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Typography:()=>Typography,__namedExportsOrder:()=>__namedExportsOrder,default:()=>foundations_typography_typography_stories});const typographyUtilities=[{type:"h1",mobileFontSize:"2.5rem",mobileLineHeight:"2",desktopFontSize:"3.75rem",desktopLineHeight:"2",mobileClassName:".h1",desktopClassName:".h1-d"},{type:"h2",mobileFontSize:"2rem",mobileLineHeight:"1.75",desktopFontSize:"3rem",desktopLineHeight:"1.75",mobileClassName:".h2",desktopClassName:".h2-d"},{type:"body1",mobileFontSize:"1rem",mobileLineHeight:"1.5",desktopFontSize:"1.25rem",desktopLineHeight:"1.5",mobileClassName:".body1",desktopClassName:".body1-d"},{type:"body2",mobileFontSize:"0.875rem",mobileLineHeight:"1.3",desktopFontSize:"1rem",desktopLineHeight:"1.5",mobileClassName:".body2",desktopClassName:".body2-d"},{type:"small",mobileFontSize:"0.75rem",mobileLineHeight:"1.2",desktopFontSize:"0.875rem",desktopLineHeight:"1.3",mobileClassName:".small",desktopClassName:".small-d"},{type:"title1",mobileFontSize:"3.75rem",mobileLineHeight:"2",desktopFontSize:"3.75rem",desktopLineHeight:"2",mobileClassName:".title1",desktopClassName:".title1-d"},{type:"title2",mobileFontSize:"2rem",mobileLineHeight:"1.75",desktopFontSize:"2.5rem",desktopLineHeight:"1.75",mobileClassName:".title2",desktopClassName:".title2-d"},{type:"price1",mobileFontSize:"2.5rem",mobileLineHeight:"1.75",desktopFontSize:"3rem",desktopLineHeight:"1.75",mobileClassName:".price2",desktopClassName:".price2-d"},{type:"price2",mobileFontSize:"1.5rem",mobileLineHeight:"1.5",desktopFontSize:"2rem",desktopLineHeight:"1.5",mobileClassName:".price1",desktopClassName:".price1-d"}];var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),typography_stories=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./libs/src/lib/design-system/stories/foundations/typography/typography.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(typography_stories.A,options);typography_stories.A&&typography_stories.A.locals&&typography_stories.A.locals;const foundations_typography_typography_stories={title:"Foundation/Typography"},Typography=()=>({template:'\n    <div class="typography-palette" [ngClass]="view">\n      <h1>Typography System</h1>\n      <div class="typography-tabs">\n        <button \n          class="tab-button" \n          [class.active]="view===\'mobile\'" \n          (click)="view=\'mobile\'">\n          Mobile\n        </button>\n        <button \n          class="tab-button" \n          [class.active]="view===\'desktop\'" \n          (click)="view=\'desktop\'">\n          Desktop\n        </button>\n      </div>\n      <table class="typography-table">\n        <thead>\n          <tr>\n            <th>Sample</th>\n            <th>Type</th>\n            <th *ngIf="view===\'mobile\'">Class</th>\n            <th *ngIf="view===\'desktop\'">Class</th>\n            <th *ngIf="view===\'mobile\'">Mobile Font Size</th>\n            <th *ngIf="view===\'desktop\'">Font Size</th>\n            <th *ngIf="view===\'mobile\'">Line Height</th>\n            <th *ngIf="view===\'desktop\'">Line Height</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let util of typographyUtilities">\n            <td class="typography-cell">\n              <div *ngIf="view===\'mobile\'" \n                   class="typography-sample" \n                   [ngStyle]="{\'font-size\': util.mobileFontSize, \'line-height\': util.mobileLineHeight}">\n                {{ util.type }}\n              </div>\n              <div *ngIf="view===\'desktop\'" \n                   class="typography-sample" \n                   [ngStyle]="{\'font-size\': util.desktopFontSize, \'line-height\': util.desktopLineHeight}">\n                {{ util.type }}\n              </div>\n            </td>\n            <td class="typography-cell"><code>{{ util.type }}</code></td>\n            <td class="typography-cell" *ngIf="view===\'mobile\'">\n              <code>{{ util.mobileClassName }}</code>\n            </td>\n            <td class="typography-cell" *ngIf="view===\'desktop\'">\n              <code>{{ util.desktopClassName }}</code>\n            </td>\n            <td class="typography-cell" *ngIf="view===\'mobile\'">{{ util.mobileFontSize }}</td>\n            <td class="typography-cell" *ngIf="view===\'desktop\'">{{ util.desktopFontSize }}</td>\n            <td class="typography-cell" *ngIf="view===\'mobile\'">{{ util.mobileLineHeight }}</td>\n            <td class="typography-cell" *ngIf="view===\'desktop\'">{{ util.desktopLineHeight }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  ',props:{view:"mobile",typographyUtilities}}),__namedExportsOrder=["Typography"];Typography.parameters={...Typography.parameters,docs:{...Typography.parameters?.docs,source:{originalSource:'() => ({\n  // The template uses Angular bindings.\n  template: `\n    <div class="typography-palette" [ngClass]="view">\n      <h1>Typography System</h1>\n      <div class="typography-tabs">\n        <button \n          class="tab-button" \n          [class.active]="view===\'mobile\'" \n          (click)="view=\'mobile\'">\n          Mobile\n        </button>\n        <button \n          class="tab-button" \n          [class.active]="view===\'desktop\'" \n          (click)="view=\'desktop\'">\n          Desktop\n        </button>\n      </div>\n      <table class="typography-table">\n        <thead>\n          <tr>\n            <th>Sample</th>\n            <th>Type</th>\n            <th *ngIf="view===\'mobile\'">Class</th>\n            <th *ngIf="view===\'desktop\'">Class</th>\n            <th *ngIf="view===\'mobile\'">Mobile Font Size</th>\n            <th *ngIf="view===\'desktop\'">Font Size</th>\n            <th *ngIf="view===\'mobile\'">Line Height</th>\n            <th *ngIf="view===\'desktop\'">Line Height</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let util of typographyUtilities">\n            <td class="typography-cell">\n              <div *ngIf="view===\'mobile\'" \n                   class="typography-sample" \n                   [ngStyle]="{\'font-size\': util.mobileFontSize, \'line-height\': util.mobileLineHeight}">\n                {{ util.type }}\n              </div>\n              <div *ngIf="view===\'desktop\'" \n                   class="typography-sample" \n                   [ngStyle]="{\'font-size\': util.desktopFontSize, \'line-height\': util.desktopLineHeight}">\n                {{ util.type }}\n              </div>\n            </td>\n            <td class="typography-cell"><code>{{ util.type }}</code></td>\n            <td class="typography-cell" *ngIf="view===\'mobile\'">\n              <code>{{ util.mobileClassName }}</code>\n            </td>\n            <td class="typography-cell" *ngIf="view===\'desktop\'">\n              <code>{{ util.desktopClassName }}</code>\n            </td>\n            <td class="typography-cell" *ngIf="view===\'mobile\'">{{ util.mobileFontSize }}</td>\n            <td class="typography-cell" *ngIf="view===\'desktop\'">{{ util.desktopFontSize }}</td>\n            <td class="typography-cell" *ngIf="view===\'mobile\'">{{ util.mobileLineHeight }}</td>\n            <td class="typography-cell" *ngIf="view===\'desktop\'">{{ util.desktopLineHeight }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  `,\n  props: {\n    // Initialize the view property to \'mobile\'\n    view: \'mobile\',\n    typographyUtilities\n  }\n})',...Typography.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./libs/src/lib/design-system/stories/foundations/typography/typography.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".typography-palette{padding:1.5rem}.typography-palette h1{font-size:2rem;line-height:1.75;color:#0a0a0a}.typography-palette .typography-tabs{margin-bottom:.75rem}.typography-palette .tab-button{padding:.5rem 1rem;margin-right:.5rem;border:none;background-color:#bdbdbd;cursor:pointer;border-radius:4px;font-size:.875rem;color:#fff}.typography-palette .tab-button.active{background-color:#0a0a0a;font-weight:bold;color:#fff}.typography-palette .typography-palette.mobile-view .desktop-only{display:none}.typography-palette .typography-palette.desktop-view .mobile-only{display:none}.typography-palette .typography-table{width:100%;border-collapse:collapse;text-align:left;background-color:#fff;border:1px solid #fff}.typography-palette .typography-table th,.typography-palette .typography-table td{padding:.75rem;border-bottom:1px solid #bdbdbd}.typography-palette .typography-table th{background-color:#0a0a0a;color:#fff;font-weight:bold}.typography-palette .typography-table tbody tr:hover{background-color:#e0e0e0}","",{version:3,sources:["webpack://./libs/src/lib/design-system/stories/foundations/typography/typography.stories.scss","webpack://./libs/src/lib/design-system/foundations/space/_variables.scss","webpack://./libs/src/lib/design-system/foundations/typography/_mixins.scss","webpack://./libs/src/lib/design-system/foundations/colors/_variables.scss"],names:[],mappings:"AAIA,oBACE,cCEQ,CAAA,uBCHR,cAAA,CACA,gBAAA,CFIE,aG8Ba,CH1BjB,qCACE,oBCVQ,CDaV,gCACE,kBAAA,CACA,kBChBQ,CDiBR,WAAA,CACA,wBGFU,CHGV,cAAA,CACA,iBAAA,CACA,iBAAA,CACA,UGegB,CHZlB,uCACE,wBGUe,CHTf,gBAAA,CACA,UGSgB,CHNlB,kEACE,YAAA,CAGF,kEACE,YAAA,CAGF,sCACE,UAAA,CACA,wBAAA,CACA,eAAA,CACA,qBGNgB,CHOhB,qBAAA,CAGF,kFAEE,cChDQ,CDiDR,+BAAA,CAGF,yCACE,wBGlBe,CHmBf,UGlBgB,CHmBhB,gBAAA,CAGF,qDACE,wBG7CU",sourcesContent:["@use '../../../foundations/variables.scss' as foundation;\n@use '../../../foundations/mixins.scss' as mixins;\n\n\n.typography-palette {\n  padding: foundation.$space-6;\n\n  h1 {\n    @include mixins.font(h2, mobile);\n    color: foundation.$color-system-default;\n  }\n\n  \n.typography-tabs {\n  margin-bottom: foundation.$space-3;\n}\n\n.tab-button {\n  padding: foundation.$space-2 foundation.$space-4;\n  margin-right: foundation.$space-2;\n  border: none;\n  background-color: foundation.$color-neutral-3;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  color: foundation.$color-system-negative;\n}\n\n.tab-button.active {\n  background-color: foundation.$color-system-default;\n  font-weight: bold;\n  color: foundation.$color-system-negative;\n}\n\n.typography-palette.mobile-view .desktop-only {\n  display: none;\n}\n\n.typography-palette.desktop-view .mobile-only {\n  display: none;\n}\n\n.typography-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  background-color: foundation.$color-system-negative;\n  border: 1px solid foundation.$color-system-negative;\n}\n\n.typography-table th,\n.typography-table td {\n  padding: foundation.$space-3;\n  border-bottom: 1px solid foundation.$color-neutral-3;\n}\n\n.typography-table th {\n  background-color: foundation.$color-system-default;\n  color: foundation.$color-system-negative;\n  font-weight: bold;\n}\n\n.typography-table tbody tr:hover {\n  background-color: foundation.$color-neutral-2;\n}\n\n}\n","// -- Base Spacing --\n$space-0: 0rem;\n$space-1: 0.25rem; /* 4px */\n$space-2: 0.5rem; /* 8px */\n$space-3: 0.75rem; /* 12px */\n$space-4: 1rem; /* 16px */\n$space-5: 1.25rem; /* 20px */\n$space-6: 1.5rem; /* 24px */\n$space-7: 2rem; /* 32px */\n$space-8: 2.5rem; /* 40px */\n$space-9: 3rem; /* 48px */\n$space-10: 4rem; /* 64px */\n",'@use "./variables" as var;\n@use "sass:map";\n\n@mixin font($type, $breakpoint) {\n  font-size: map.get(map.get(var.$typography-scale, $type), $breakpoint, font-size);\n  line-height: map.get(map.get(var.$typography-scale, $type), $breakpoint, line-height);\n}\n\n@mixin typography($class-name, $type, $breakpoint) {\n  .#{$class-name} {\n    font-size: map.get(map.get(var.$typography-scale, $type), $breakpoint, font-size);\n    line-height: map.get(map.get(var.$typography-scale, $type), $breakpoint, line-height);\n  }\n}\n\n@mixin regular {\n  font-weight: var.$font-weight-regular;\n}\n@mixin bold {\n  font-weight: var.$font-weight-bold;\n}\n',"/* SCSS Variables */\n$primary-1: #e3f2fd;\n$primary-2: #bbdefb;\n$primary-3: #90caf9;\n$primary-4: #64b5f6;\n$primary-5: #42a5f5;\n$primary-6: #2196f3;\n$primary-7: #1e88e5;\n\n$secondary-1: #e0f2f1;\n$secondary-2: #b2dfdb;\n$secondary-3: #80cbc4;\n$secondary-4: #4db6ac;\n$secondary-5: #26a69a;\n$secondary-6: #009688;\n$secondary-7: #00796b;\n\n$neutral-1: #f5f5f5;\n$neutral-2: #e0e0e0;\n$neutral-3: #bdbdbd;\n$neutral-4: #9e9e9e;\n$neutral-5: #757575;\n$neutral-6: #616161;\n$neutral-7: #424242;\n$neutral-8: #212121;\n\n$success: #4caf50;\n$warning: #ff9800;\n$error: #f44336;\n$info: #2196f3;\n\n$border-default: inset 0 0 0 2px $neutral-4;\n$border-hover: inset 0 0 0 2px $primary-5;\n$border-focus: 0 0 2px 2px rgba(8, 118, 254, 0.3), inset 0 0 0 2px $primary-6;\n$border-active: inset 0 0 0 2px $primary-7;\n$border-error: inset 0 0 0 2px $error;\n$border-disabled: inset 0 0 0 2px $neutral-3;\n$border-highlighted: inset 0 0 0 2px $secondary-3;\n\n$system-default: #0a0a0a;\n$system-negative: #fff;\n$system-background: #fff;\n$system-link: $primary-7;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);