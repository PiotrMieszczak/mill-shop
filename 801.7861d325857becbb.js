"use strict";(self.webpackChunkmill_shop=self.webpackChunkmill_shop||[]).push([[801],{5801:(R,n,a)=>{a.r(n),a.d(n,{CategoryListComponent:()=>S});var e=a(4438),s=a(9079),g=a(6354),l=a(8516),d=a(7653);const h=a(1806).J1`
  query {
    categories {
      id
      slug
      name
      image {
        url
        fileName
      }
      product {
        slug
      }
    }
  }
`;let m=(()=>{class t{graphql;constructor(i){this.graphql=i}getCategories(){return this.graphql.query(h,{fetchPolicy:"cache-first"}).pipe((0,g.T)(i=>i.categories.map(d.i.createCategory)))}static \u0275fac=function(o){return new(o||t)(e.KVO(l.Pp))};static \u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),y=(()=>{class t{categoryApiService=(0,e.WQX)(m);categoriesResource=(0,s.ZX)({loader:()=>this.categoryApiService.getCategories()});categoriesSignal=(0,e.EWP)(()=>this.categoriesResource.value()||[]);loadingSignal=(0,e.EWP)(()=>this.categoriesResource.isLoading());errorSignal=(0,e.EWP)(()=>this.categoriesResource.error());loadCategories(){this.categoriesResource.reload()}static \u0275fac=function(o){return new(o||t)};static \u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var u=a(776),f=a(7052);const v=(t,r)=>r.slug;function C(t,r){if(1&t&&e.nrm(0,"app-category-card",3),2&t){const i=r.$implicit,o=e.XpG();e.Y8G("categorySignal",i)("isLoadingSignal",o.loadingSignal())}}let S=(()=>{class t{categoryFacade=(0,e.WQX)(y);categoriesResource=this.categoryFacade.categoriesResource;categoriesSignal=(0,e.EWP)(()=>this.categoriesResource.value()||[]);loadingSignal=(0,e.EWP)(()=>this.categoriesResource.isLoading());errorSignal=(0,e.EWP)(()=>this.categoriesResource.error());ngOnInit(){this.categoryFacade.loadCategories()}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-home-page"]],decls:7,vars:1,consts:[[1,"lib-container"],[1,"title"],[1,"grid","p-b-4"],[1,"category-card","col-m-4","col-d-4",3,"categorySignal","isLoadingSignal"],[3,"isLoadingSignal"]],template:function(o,c){1&o&&(e.j41(0,"div",0)(1,"h1",1),e.EFF(2,"Categories"),e.k0s(),e.j41(3,"div",2),e.Z7z(4,C,1,2,"app-category-card",3,v),e.k0s()(),e.nrm(6,"app-loader",4)),2&o&&(e.R7$(4),e.Dyx(c.categoriesSignal()),e.R7$(2),e.Y8G("isLoadingSignal",c.loadingSignal()))},dependencies:[u.I,f.V],styles:[".title[_ngcontent-%COMP%]{font-weight:700;margin:1rem 0;font-size:2rem;line-height:1.75}@media (min-width: 1024px){.title[_ngcontent-%COMP%]{font-size:2.5rem;line-height:1.75}}.category-card[_ngcontent-%COMP%]{height:20dvh}@media (min-width: 1024px){.category-card[_ngcontent-%COMP%]{height:30dvh}}"],changeDetection:0})}return t})()}}]);