"use strict";(self.webpackChunkpaw_hug_frontend=self.webpackChunkpaw_hug_frontend||[]).push([[117],{4117:(W,g,s)=>{s.r(g),s.d(g,{RegistrationModule:()=>K});var v=s(7762),t=s(4650);let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.n]}),n})();var b=s(2615),P=s(1666),w=s(7574),h=s(8076),c=s(4006),f=s(6895),_=s(4859),p=s(2441),M=s(3778),O=s(8633);let C=(()=>{class n{constructor(){}getTarget(e){return e.target}checkClassName(e,o){return this.getTarget(e).className.includes(o)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=s(5861),F=s(6805);function m(n,i){const e="object"==typeof i;return new Promise((o,a)=>{let l,r=!1;n.subscribe({next:$=>{l=$,r=!0},error:a,complete:()=>{r?o(l):e?o(i.defaultValue):a(new F.K)}})})}var N=s(8306);let A=(()=>{class n{createAvatar(e){var o=this;return(0,d.Z)(function*(){const a=new N.y(l=>{o.readFile(e,l)});return{name:e.name,size:e.size,type:e.type,url:yield m(a)}})()}readFile(e,o){const a=new FileReader;a.readAsDataURL(e),a.onload=()=>{o.next(a.result),o.complete()}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var S=s(4968),T=s(4004),Z=s(5698),u=s(5412),D=s(1940);let I=(()=>{class n{constructor(e){this.data=e,this.imageSrc="/assets/validation/lying-cat.png"}get image(){return this.imageSrc}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["pw-validation"]],decls:10,vars:2,consts:[[1,"validation"],["mat-dialog-title","",1,"h2"],[1,"validation__content"],[1,"validation__text"],["alt","\u041b\u0435\u0436\u0430\u0449\u0438\u0439 \u043a\u043e\u0442\u0438\u043a","width","170","height","150",3,"src"],["align","end"],["mat-dialog-close",""]],template:function(e,o){1&e&&(t.TgZ(0,"aside",0)(1,"p",1),t._uU(2," \u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435! "),t.qZA(),t.TgZ(3,"mat-dialog-content",2)(4,"p",3),t._uU(5),t.qZA(),t._UZ(6,"img",4),t.qZA(),t.TgZ(7,"mat-dialog-actions",5)(8,"pw-button",6),t._uU(9," \u041f\u043e\u043d\u044f\u0442\u043d\u043e "),t.qZA()()()),2&e&&(t.xp6(5),t.Oqu(o.data.text),t.xp6(1),t.Q6J("src",o.image,t.LSH))},dependencies:[u.ZT,u.uh,u.xY,u.H8,D.r],styles:[".dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:16px}.mat-tooltip[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]     .mat-button{min-width:200px}.validation[_ngcontent-%COMP%], .validation__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.validation__text[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px}"],changeDetection:0}),n})(),x=(()=>{class n{constructor(e){this.dialog=e}checkType(e){const o="image/jpeg";return e.type!==o&&this.openDialog("\u041c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 - jpeg."),e.type!==o}checkSize(e){const r=Math.ceil(e.size/1024/1024);return r>2&&this.openDialog("\u0424\u0430\u0439\u043b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 2 \u041c\u0411."),r>2}checkResolution(e){return(e.width>1e3||e.height>1e3)&&this.openDialog("\n            \u0424\u043e\u0442\u043e \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 1000x1000.\n          "),e.width>1e3||e.height>1e3}openDialog(e){this.dialog.open(I,{data:{text:e},panelClass:"dialog"})}syncValidation(e){const o=this.loadImage(e);return(0,S.R)(o,"load").pipe((0,T.U)(()=>this.validation(e,o)),(0,Z.q)(1))}loadImage(e){const o=URL.createObjectURL(e),a=new Image;return a.src=o,a}validation(e,o){return this.checkSize(e)||this.checkResolution(o)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u.uw))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var R=s(266);const E=["*"];let B=(()=>{class n{constructor(){this.tooltipName="",this.typeButton="button"}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["pw-button-mini-fab"]],inputs:{tooltipName:"tooltipName",typeButton:"typeButton"},ngContentSelectors:E,decls:2,vars:2,consts:[["mat-mini-fab","",3,"type","matTooltip"]],template:function(e,o){1&e&&(t.F$t(),t.TgZ(0,"button",0),t.Hsn(1),t.qZA()),2&e&&t.Q6J("type",o.typeButton)("matTooltip",o.tooltipName)},dependencies:[_.lW,R.gM],styles:[".dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:16px}.mat-tooltip[_ngcontent-%COMP%]{font-size:14px}.circle[_ngcontent-%COMP%]{position:absolute;top:-70px;right:10px;background-color:#076ce0}"],changeDetection:0}),n})(),J=(()=>{class n{constructor(e,o,a){this.avatarService=e,this.elementService=o,this.avatarValidationService=a,this.iconName="add",this.onAddPhoto=new t.vpe}addAvatar(e){var o=this;return(0,d.Z)(function*(){const r=o.elementService.getTarget(e).files[0];if(r){if(yield m(o.avatarValidationService.syncValidation(r)))return;const l=o.avatarService.createAvatar(r);o.onAddPhoto.emit(yield l)}})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A),t.Y36(C),t.Y36(x))},n.\u0275cmp=t.Xpm({type:n,selectors:[["pw-avatar-plus"]],outputs:{onAddPhoto:"onAddPhoto"},decls:5,vars:1,consts:[["type","file","accept","image/jpeg",1,"circle__add-photo",3,"change"],["file",""],["tooltipName","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",1,"circle",3,"click"],[1,"icon"]],template:function(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("change",function(l){return o.addAvatar(l)}),t.qZA(),t.TgZ(2,"pw-button-mini-fab",2),t.NdJ("click",function(){t.CHM(a);const l=t.MAs(1);return t.KtG(l.click())}),t.TgZ(3,"pw-icon",3),t._uU(4),t.qZA()()}2&e&&(t.xp6(4),t.Oqu(o.iconName))},dependencies:[p.o,B],styles:[".dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:16px}.mat-tooltip[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]     .icon{font-size:22px;transform:scale(1);font-weight:700}[_nghost-%COMP%]     .circle .mat-mini-fab{position:absolute;top:-70px;right:10px;background-color:#076ce0}.circle__add-photo[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),n})(),k=(()=>{class n{constructor(e,o){this.avatarService=e,this.avatarValidationService=o,this.onFileDropped=new t.vpe}onDragOver(e){e.preventDefault(),e.stopPropagation()}onDragLeave(e){e.preventDefault(),e.stopPropagation()}onDrop(e){var o=this;return(0,d.Z)(function*(){e.preventDefault(),e.stopPropagation();const a=e.dataTransfer?.files[0];if(a){if(o.avatarValidationService.checkType(a)||(yield m(o.avatarValidationService.syncValidation(a))))return;const r=o.avatarService.createAvatar(a);o.onFileDropped.emit(yield r)}})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A),t.Y36(x))},n.\u0275dir=t.lG2({type:n,selectors:[["","pwAvatarDropZone",""]],hostBindings:function(e,o){1&e&&t.NdJ("dragover",function(r){return o.onDragOver(r)})("dragleave",function(r){return o.onDragLeave(r)})("drop",function(r){return o.onDrop(r)})},outputs:{onFileDropped:"onFileDropped"}}),n})();const z=["noCover"],V=["cover"];function H(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"aside",7)(1,"pw-avatar-plus",8),t.NdJ("onAddPhoto",function(a){t.CHM(e);const r=t.oxw(2);return t.KtG(r.addAvatar(a))}),t.qZA()()}}function Q(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"figure",3,4),t.NdJ("mouseenter",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.isIcon=!a.isIcon)})("mouseleave",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.isIcon=!a.isIcon)}),t.TgZ(3,"pw-icon",5),t._uU(4),t.qZA(),t.YNc(5,H,2,0,"aside",6),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(4),t.Oqu(e.icon),t.xp6(1),t.Q6J("ngIf",e.buttonPlus)}}function Y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"figure",9),t._UZ(1,"img",10,11),t.TgZ(3,"aside",12)(4,"pw-avatar-plus",8),t.NdJ("onAddPhoto",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.addAvatar(a))}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",e.avatar.url,t.LSH)}}let U=(()=>{class n{constructor(e,o){this.elementService=e,this.renderer=o,this.iconName="photo_camera",this.iconNameEnter="cloud_download",this.circleColor="#F5F5F5",this.whiteColor="#fff",this.circleBorder="dotted 4px black",this.circleNoBorder="none",this.circleOpacity="1",this.noCoverClass="no-cover",this.avatarCoverClass="avatar-cover",this.onAddAvatar=new t.vpe,this.avatar={},this.noCover={},this.cover={},this.isIcon=!0,this.buttonPlus=!0}addAvatar(e){this.onAddAvatar.emit(e)}get icon(){return this.isIcon?this.iconName:this.iconNameEnter}imageOver(e){this.elementService.checkClassName(e,this.noCoverClass)?(this.renderer.setStyle(this.noCover.nativeElement,"background",this.circleColor),this.renderer.setStyle(this.noCover.nativeElement,"border",this.circleNoBorder),this.buttonPlus=!1,this.isIcon=!1):this.elementService.checkClassName(e,this.avatarCoverClass)&&this.renderer.setStyle(this.cover.nativeElement,"opacity",""+ +this.circleOpacity/2)}imageLeave(e){this.elementService.checkClassName(e,this.noCoverClass)?(this.renderer.setStyle(this.noCover.nativeElement,"background",this.whiteColor),this.renderer.setStyle(this.noCover.nativeElement,"border",this.circleBorder),this.buttonPlus=!0,this.isIcon=!0):this.elementService.checkClassName(e,this.avatarCoverClass)&&this.renderer.setStyle(this.cover.nativeElement,"opacity",this.circleOpacity)}imageDrop(e){this.imageLeave(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["pw-avatar-circle"]],viewQuery:function(e,o){if(1&e&&(t.Gf(z,5),t.Gf(V,5)),2&e){let a;t.iGM(a=t.CRH())&&(o.noCover=a.first),t.iGM(a=t.CRH())&&(o.cover=a.first)}},inputs:{avatar:"avatar"},outputs:{onAddAvatar:"onAddAvatar"},decls:4,vars:2,consts:[["pwAvatarDropZone","",3,"onFileDropped","dragover","dragleave","drop"],[4,"ngIf","ngIfElse"],["userAvatar",""],[1,"avatar","no-cover",3,"mouseenter","mouseleave"],["noCover",""],[1,"icon"],["class","avatar__add-photo",4,"ngIf"],[1,"avatar__add-photo"],[3,"onAddPhoto"],[1,"avatar","avatar-cover"],["alt","\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",1,"avatar-cover__photo",3,"src"],["cover",""],[1,"avatar-cover__add-photo"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.NdJ("onFileDropped",function(r){return o.addAvatar(r)})("dragover",function(r){return o.imageOver(r)})("dragleave",function(r){return o.imageLeave(r)})("drop",function(r){return o.imageDrop(r)}),t.YNc(1,Q,6,2,"ng-container",1),t.YNc(2,Y,5,1,"ng-template",null,2,t.W1O),t.qZA()),2&e){const a=t.MAs(3);t.xp6(1),t.Q6J("ngIf",!(null!=o.avatar&&o.avatar.url))("ngIfElse",a)}},dependencies:[p.o,f.O5,J,k],styles:[".dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:16px}.mat-tooltip[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]     .icon{transform:scale(2)}.avatar[_ngcontent-%COMP%]{width:16em;height:16em;line-height:16em;border-radius:50%;border:dotted 4px #000000;background:#ffffff;box-shadow:46px 45px 50px -15px #51397233;text-align:center;position:absolute;left:-70px;top:70px}@media (max-width: 955px){.avatar[_ngcontent-%COMP%]{width:15.5em;height:15.5em;line-height:15.5em;position:static;margin:5px}}.avatar__add-photo[_ngcontent-%COMP%]{position:relative}.avatar-cover[_ngcontent-%COMP%]{border:transparent}.avatar-cover__photo[_ngcontent-%COMP%]{width:16em;height:16em;line-height:16em;border-radius:50%;object-fit:cover}@media (max-width: 955px){.avatar-cover__photo[_ngcontent-%COMP%]{width:15.5em;height:15.5em;line-height:15.5em}}.avatar-cover__add-photo[_ngcontent-%COMP%]{position:relative;top:-119px;right:4px}@media (max-width: 955px){.avatar-cover__add-photo[_ngcontent-%COMP%]{top:-115px}}.avatar[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.icon[_ngcontent-%COMP%]{pointer-events:none}"],changeDetection:0}),n})();function G(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"pw-icon"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.iconVisibility)}}const L=[{path:"",component:(()=>{class n{constructor(e){this.fb=e,this.hide=!0,this.nameIconWrite="mode_edit",this.form=this.formInit()}formInit(){return this.fb.group({name:new c.p4(null,[c.kI.required]),mobile:new c.p4(null,[c.kI.required,c.kI.minLength(10)]),email:new c.p4(null,[c.kI.required,c.kI.email]),password:new c.p4(null,[c.kI.required,c.kI.minLength(10)]),avatar:new c.p4(null)})}addAvatar(e){this.form.patchValue({avatar:e})}get avatar(){return this.form.controls.avatar.value}get prefixName(){return this.form.controls.mobile.dirty?"+7":""}get iconVisibility(){return this.hide?"visibility_off":"visibility"}get typeInput(){return this.hide?"password":"text"}submit(){console.log(this.form.getRawValue()),this.form.reset()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.QS))},n.\u0275cmp=t.Xpm({type:n,selectors:[["pw-registration"]],decls:16,vars:12,consts:[[1,"container"],[1,"wrapper"],[1,"reg"],[1,"reg__title","h2"],[1,"reg__content",3,"formGroup","ngSubmit"],[3,"avatar","onAddAvatar"],["fieldName","name","labelName","\u0418\u043c\u044f","controlName","name","maskName","S*",3,"parentForm"],["fieldName","mobile","labelName","\u0422\u0435\u043b\u0435\u0444\u043e\u043d","typeName","tel","placeholderName","999-999-9999","controlName","mobile","maskName","000-000-0000",3,"parentForm","prefixName"],["fieldName","email","labelName","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430","typeName","email","placeholderName","hellokitty@gmail.com","controlName","email",3,"parentForm"],["fieldName","password","labelName","\u041f\u0430\u0440\u043e\u043b\u044c","controlName","password",3,"parentForm","typeName"],["icon","","type","button","mat-icon-button","",1,"hide-icon",3,"click"],[4,"ngIf"],[1,"reg-submit-btn"],[3,"disabled"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"article",2)(3,"p",3),t._uU(4,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),t.qZA(),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(6,"pw-avatar-circle",5),t.NdJ("onAddAvatar",function(r){return o.addAvatar(r)}),t.qZA(),t._UZ(7,"pw-input",6)(8,"pw-input",7)(9,"pw-input",8),t.TgZ(10,"pw-input",9)(11,"button",10),t.NdJ("click",function(){return o.hide=!o.hide}),t.YNc(12,G,3,1,"ng-container",11),t.qZA()(),t.TgZ(13,"aside",12)(14,"pw-button-submit",13),t._uU(15," \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f "),t.qZA()()()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("avatar",o.avatar),t.xp6(1),t.Q6J("parentForm",o.form),t.xp6(1),t.Q6J("parentForm",o.form)("prefixName",o.prefixName),t.xp6(1),t.Q6J("parentForm",o.form),t.xp6(1),t.Q6J("parentForm",o.form)("typeName",o.typeInput),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.hide),t.xp6(1),t.Q6J("ngIf",o.form.controls.password.dirty),t.xp6(2),t.Q6J("disabled",o.form.invalid))},dependencies:[f.O5,c._Y,c.JL,c.sg,_.lW,p.o,M.e,O.a,U],styles:[".dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:16px}.mat-tooltip[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]     .mat-form-field{min-width:300px;padding:0}@media (max-width: 955px){[_nghost-%COMP%]     .mat-form-field{min-width:250px}}[_nghost-%COMP%]     .reg-submit-btn{text-align:center}[_nghost-%COMP%]     .reg-submit-btn .mat-raised-button.mat-button-base{width:70%;margin:0}[_nghost-%COMP%]     .mat-form-field .mat-form-field-flex{padding-top:0}[_nghost-%COMP%]     .mat-focus-indicator{vertical-align:middle}[_nghost-%COMP%]     .mat-focus-indicator.hide-icon.mat-icon-button.mat-button-base{justify-content:flex-end}.reg[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fff;width:100%;align-items:center;border-radius:16px;box-shadow:46px 45px 50px -15px #51397233;margin-top:20px;padding:20px;position:relative}@media (max-width: 955px){.reg[_ngcontent-%COMP%]{position:static}}.reg__title[_ngcontent-%COMP%]{margin:10px}.reg__content[_ngcontent-%COMP%]{display:flex;flex-direction:column}"],changeDetection:0}),n})()}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(L),h.Bz]}),n})(),K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[j,P.O,w.m,v.n,y,b._]}),n})()}}]);