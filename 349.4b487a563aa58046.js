"use strict";(self.webpackChunkmy_first_app=self.webpackChunkmy_first_app||[]).push([[349],{7349:(L,m,p)=>{p.r(m),p.d(m,{RecipesModule:()=>J});var s=p(8588),o=p(2382),e=p(1223),l=p(5496),u=p(9808);const f=function(t){return[t]};let _=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"float-start"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"float-end"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&i&&(e.Q6J("routerLink",e.VKq(5,f,n.index)),e.xp6(3),e.Oqu(n.recipe.name),e.xp6(2),e.Oqu(n.recipe.description),e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH))},directives:[s.yS,s.Od],styles:[""]}),t})();function Z(t,r){if(1&t&&e._UZ(0,"app-recipe-item",4),2&t){const n=r.index;e.Q6J("recipe",r.$implicit)("index",n)}}let R=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.route=n,this.router=c}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(i=>{this.recipes=i}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.j),e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success","mt-3",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3,"New recipe"),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,Z,1,2,"app-recipe-item",3),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},directives:[u.sg,_],styles:[""]}),t})(),C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},directives:[R,s.lC],styles:[""]}),t})();var T=p(5698),A=p(4004),w=p(5599);let S=(()=>{class t{constructor(i,n){this.authService=i,this.router=n}canActivate(i,n){return this.authService.user.pipe((0,T.q)(1),(0,A.U)(c=>!!c||this.router.createUrlTree(["/auth"])))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(w.e),e.LFG(s.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"h2"),e._uU(1,"Please select a recipe!"),e.qZA())},styles:[""]}),t})();function F(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",20)(1,"div",21),e._UZ(2,"input",22),e.qZA(),e.TgZ(3,"div",23),e._UZ(4,"input",24),e.qZA(),e.TgZ(5,"div",23)(6,"button",5),e.NdJ("click",function(){const d=e.CHM(i).index;return e.oxw().onDeleteIngredient(d)}),e._uU(7,"X"),e.qZA()()()}2&t&&e.Q6J("formGroupName",r.index)}let g=(()=>{class t{constructor(i,n,c){this.route=i,this.recipeService=n,this.router=c,this.editMode=!1}get controls(){return this.recipeForm.get("ingredients").controls}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editMode=null!=i.id,this.initForm()})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.router.navigate(["../"],{relativeTo:this.route})}onAddIngredient(){this.recipeForm.get("ingredients").push(new o.cw({name:new o.NI(null,o.kI.required),amount:new o.NI(null,[o.kI.required,o.kI.pattern("^[1-9]+[0-9]*$")])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngredient(i){this.recipeForm.get("ingredients").removeAt(i)}initForm(){let i="",n="",c="",d=new o.Oe([]);if(this.editMode){const a=this.recipeService.getRecipe(this.id);if(i=a.name,n=a.imagePath,c=a.description,a.ingredients)for(let h of a.ingredients)d.push(new o.cw({name:new o.NI(h.name,o.kI.required),amount:new o.NI(h.amount,[o.kI.required,o.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new o.cw({name:new o.NI(i,o.kI.required),imagePath:new o.NI(n,o.kI.required),description:new o.NI(c,o.kI.required),ingredients:d})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.gz),e.Y36(l.j),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"col-xs-12","mt-3"],["type","submit",1,"btn","btn-success","me-1",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"row","mt-1"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","rows","6","formControlName","description",1,"form-control"],[1,"row","mt-3"],["formArrayName","ingredients",1,"col"],["class","row",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",3,"formGroupName"],[1,"col-8","mt-1"],["type","text","formControlName","name",1,"form-control"],[1,"col-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0)(4,"div",3)(5,"button",4),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return n.onCancel()}),e._uU(8,"Cancel"),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",6)(12,"label",7),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",8),e.qZA()()(),e.TgZ(15,"div",9)(16,"div",1)(17,"div",6)(18,"label",10),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",11,12),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",1),e._UZ(24,"img",13),e.qZA()(),e.TgZ(25,"div",0)(26,"div",1)(27,"div",6)(28,"label",14),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",15),e.qZA()()(),e.TgZ(31,"div",16)(32,"div",17),e.YNc(33,F,8,1,"div",18),e._UZ(34,"hr"),e.TgZ(35,"div",9)(36,"div",1)(37,"button",19),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(38,"Add Ingredients"),e.qZA()()()()()()()()),2&i){const c=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("src",c.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.controls)}},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.CE,u.sg,o.x0,o.wV],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();function b(t,r){if(1&t&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&t){const i=r.$implicit;e.xp6(1),e.AsE(" ",i.name," - ",i.amount," ")}}const I=function(t){return{show:t}};let U=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.route=n,this.router=c,this.showDropdown=!1}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppinigList(){this.recipeService.addIngredientsToShoppinigList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.j),e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-detail"]],decls:30,vars:8,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],[1,"dropdown",3,"click"],["type","button","data-toggle","dropdown","data-bs-toggle","dropdown",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu",3,"ngClass"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",0)(4,"div",1)(5,"h1"),e._uU(6),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",3),e.NdJ("click",function(){return n.showDropdown=!n.showDropdown}),e.TgZ(10,"button",4),e._uU(11," Manage Recipe "),e._UZ(12,"span",5),e.qZA(),e.TgZ(13,"div",6)(14,"li")(15,"a",7),e.NdJ("click",function(){return n.onAddToShoppinigList()}),e._uU(16,"To Shopping List"),e.qZA()(),e.TgZ(17,"li")(18,"a",7),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(19,"Edit Recipe"),e.qZA()(),e.TgZ(20,"li")(21,"a",7),e.NdJ("click",function(){return n.onDeleteRecipe()}),e._uU(22,"Delete Recipe"),e.qZA()()()()()(),e.TgZ(23,"div",0)(24,"div",1),e._uU(25),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",8),e.YNc(29,b,2,2,"li",9),e.qZA()()()),2&i&&(e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH),e.xp6(4),e.hij(" ",n.recipe.name," "),e.xp6(7),e.Q6J("ngClass",e.VKq(6,I,n.showDropdown)),e.xp6(12),e.hij(" ",n.recipe.description," "),e.xp6(4),e.Q6J("ngForOf",n.recipe.ingredients))},directives:[u.mk,u.sg],styles:[""]}),t})();var N=p(3649);let v=(()=>{class t{constructor(i,n){this.dataStorageService=i,this.recipeService=n}resolve(i,n){const c=this.recipeService.getRecipes();return 0===c.length?this.dataStorageService.fetchRecipes():c}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(N.Z),e.LFG(l.j))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const q=[{path:"",component:C,canActivate:[S],children:[{path:"",component:y},{path:"new",component:g},{path:":id",component:U,resolve:[v]},{path:":id/edit",component:g,resolve:[v]}]}];let k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(q)],s.Bz]}),t})();var x=p(4466);let J=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz,o.UX,k,x.m]]}),t})()}}]);