import{C as Z,E as k,s as N,t as $,b as Y,L as A,i as I,f as j,o as U,a as z,g as q}from"./note.vue.75cafe67.js";import"./entry.36e81a40.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./NoteExportHandler.83570409.js";import"./Icon.e9f4e17f.js";const v=1,D=2,M=3,B=4,F=5,J=35,H=36,L=37,K=11,ee=13;function te(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function Oe(e){return e==9||e==10||e==13||e==32}let w=null,X=null,Q=0;function b(e,t){let n=e.pos+t;if(X==e&&Q==n)return w;for(;Oe(e.peek(t));)t++;let O="";for(;;){let a=e.peek(t);if(!te(a))break;O+=String.fromCharCode(a),t++}return X=e,Q=n,w=O||null}function x(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let n=0;n<e.length;n++)this.hash+=(this.hash<<4)+e.charCodeAt(n)+(e.charCodeAt(n)<<8)}const ne=new Z({start:null,shift(e,t,n,O){return t==v?new x(b(O,1)||"",e):e},reduce(e,t){return t==K&&e?e.parent:e},reuse(e,t,n,O){let a=t.type.id;return a==v||a==ee?new x(b(O,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),ae=new k((e,t)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let n=b(e,0);if(!n)return e.acceptToken(F);if(t.context&&n==t.context.name)return e.acceptToken(D);for(let O=t.context;O;O=O.parent)if(O.name==n)return e.acceptToken(M,-2);e.acceptToken(B)}else if(e.next!=33&&e.next!=63)return e.acceptToken(v)}},{contextual:!0});function W(e,t){return new k(n=>{let O=0,a=t.charCodeAt(0);e:for(;!(n.next<0);n.advance(),O++)if(n.next==a){for(let r=1;r<t.length;r++)if(n.peek(r)!=t.charCodeAt(r))continue e;break}O&&n.acceptToken(e)})}const re=W(J,"-->"),le=W(H,"?>"),oe=W(L,"]]>"),se=N({Text:$.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":$.angleBracket,TagName:$.tagName,"MismatchedCloseTag/Tagname":[$.tagName,$.invalid],AttributeName:$.attributeName,AttributeValue:$.attributeValue,Is:$.definitionOperator,"EntityReference CharacterReference":$.character,Comment:$.blockComment,ProcessingInst:$.processingInstruction,DoctypeDecl:$.documentMeta,Cdata:$.special($.string)}),ie=Y.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:ne,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[se],skippedNodes:[0],repeatNodeCount:8,tokenData:"Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[ae,re,le,oe,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function T(e,t){let n=t&&t.getChild("TagName");return n?e.sliceString(n.from,n.to):""}function _(e,t){let n=t&&t.firstChild;return!n||n.name!="OpenTag"?"":T(e,n)}function ye(e,t,n){let O=t&&t.getChildren("Attribute").find(r=>r.from<=n&&r.to>=n),a=O&&O.getChild("AttributeName");return a?e.sliceString(a.from,a.to):""}function h(e){for(let t=e&&e.parent;t;t=t.parent)if(t.name=="Element")return t;return null}function $e(e,t){var n;let O=q(e).resolveInner(t,-1),a=null;for(let r=O;!a&&r.parent;r=r.parent)(r.name=="OpenTag"||r.name=="CloseTag"||r.name=="SelfClosingTag"||r.name=="MismatchedCloseTag")&&(a=r);if(a&&(a.to>t||a.lastChild.type.isError)){let r=a.parent;if(O.name=="TagName")return a.name=="CloseTag"||a.name=="MismatchedCloseTag"?{type:"closeTag",from:O.from,context:r}:{type:"openTag",from:O.from,context:h(r)};if(O.name=="AttributeName")return{type:"attrName",from:O.from,context:a};if(O.name=="AttributeValue")return{type:"attrValue",from:O.from,context:a};let i=O==a||O.name=="Attribute"?O.childBefore(t):O;return(i==null?void 0:i.name)=="StartTag"?{type:"openTag",from:t,context:h(r)}:(i==null?void 0:i.name)=="StartCloseTag"&&i.to<=t?{type:"closeTag",from:t,context:r}:(i==null?void 0:i.name)=="Is"?{type:"attrValue",from:t,context:a}:i?{type:"attrName",from:t,context:a}:null}else if(O.name=="StartCloseTag")return{type:"closeTag",from:t,context:O.parent};for(;O.parent&&O.to==t&&!(!((n=O.lastChild)===null||n===void 0)&&n.type.isError);)O=O.parent;return O.name=="Element"||O.name=="Text"||O.name=="Document"?{type:"tag",from:t,context:O.name=="Element"?O:h(O)}:null}class ge{constructor(t,n,O){this.attrs=n,this.attrValues=O,this.children=[],this.name=t.name,this.completion=Object.assign(Object.assign({type:"type"},t.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=t.textContent?t.textContent.map(a=>({label:a,type:"text"})):[]}}const C=/^[:\-\.\w\u00b7-\uffff]*$/;function E(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function G(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function me(e,t){let n=[],O=[],a=Object.create(null);for(let l of t){let g=E(l);n.push(g),l.global&&O.push(g),l.values&&(a[l.name]=l.values.map(G))}let r=[],i=[],u=Object.create(null);for(let l of e){let g=O,o=a;l.attributes&&(g=g.concat(l.attributes.map(m=>typeof m=="string"?n.find(f=>f.label==m)||{label:m,type:"property"}:(m.values&&(o==a&&(o=Object.create(o)),o[m.name]=m.values.map(G)),E(m)))));let S=new ge(l,g,o);u[S.name]=S,r.push(S),l.top&&i.push(S)}i.length||(i=r);for(let l=0;l<r.length;l++){let g=e[l],o=r[l];if(g.children)for(let S of g.children)u[S]&&o.children.push(u[S]);else o.children=r}return l=>{var g;let{doc:o}=l.state,S=$e(l.state,l.pos);if(!S||S.type=="tag"&&!l.explicit)return null;let{type:m,from:f,context:p}=S;if(m=="openTag"){let s=i,y=_(o,p);if(y){let c=u[y];s=(c==null?void 0:c.children)||r}return{from:f,options:s.map(c=>c.completion),validFor:C}}else if(m=="closeTag"){let s=_(o,p);return s?{from:f,to:l.pos+(o.sliceString(l.pos,l.pos+1)==">"?1:0),options:[((g=u[s])===null||g===void 0?void 0:g.closeNameCompletion)||{label:s+">",type:"type"}],validFor:C}:null}else if(m=="attrName"){let s=u[T(o,p)];return{from:f,options:(s==null?void 0:s.attrs)||O,validFor:C}}else if(m=="attrValue"){let s=ye(o,p,f);if(!s)return null;let y=u[T(o,p)],c=((y==null?void 0:y.attrValues)||a)[s];return!c||!c.length?null:{from:f,to:l.pos+(o.sliceString(l.pos,l.pos+1)=='"'?1:0),options:c,validFor:/^"[^"]*"?$/}}else if(m=="tag"){let s=_(o,p),y=u[s],c=[],P=p&&p.lastChild;s&&(!P||P.name!="CloseTag"||T(o,P)!=s)&&c.push(y?y.closeCompletion:{label:"</"+s+">",type:"type",boost:2});let V=c.concat(((y==null?void 0:y.children)||(p?r:i)).map(d=>d.openCompletion));if(p&&(y!=null&&y.text.length)){let d=p.firstChild;d.to>l.pos-20&&!/\S/.test(l.state.sliceDoc(d.to,l.pos))&&(V=V.concat(y.text))}return{from:f,options:V,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const R=A.define({name:"xml",parser:ie.configure({props:[I.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),j.add({Element(e){let t=e.firstChild,n=e.lastChild;return!t||t.name!="OpenTag"?null:{from:t.to,to:n.name=="CloseTag"?n.from:e.to}}}),U.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function de(e={}){return new z(R,R.data.of({autocomplete:me(e.elements||[],e.attributes||[])}))}export{me as completeFromSchema,de as xml,R as xmlLanguage};
