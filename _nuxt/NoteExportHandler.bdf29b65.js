import{aN as c,a7 as u,aO as f,aP as x,aQ as g,aR as S,aS as E,N as n,l,U as p,ad as h,aT as T,aU as C,aa as w,aV as N,aW as _}from"./entry.f443a7a4.js";class i extends c{convert(t,e){let r=c.getDefaultConverterMap();return r.set(u.STRING,i.fromString),r.set(u.LONG_STRING,i.fromString),c.convert(t,e,r,(o,s)=>`**${o}**: ${s}`)}static fromString(t,e){return f.escapeMarkdown(e.value)}}class v extends x{constructor(){super(new i)}convert(t){let e=x.getDefaultConverterMap();return e.set("Text",v.fromText),super._convert(t,e)}static fromText(t,e){return f.escapeMarkdown(e.content)}}class y{static convert(t){let e=new g;return e.appendLine("## "+t.title),t.elements.ordered_components.forEach(r=>{e.appendLine(new v().convert(r)).appendHorizontalRow()}),e.removeLastRow().toString()}}class L extends S{convert(t){let e=new g;return e.appendLine("# "+t.title).appendEmptyLine(),t.sections.ordered_components.forEach(r=>{e.appendLine(y.convert(r)).appendEmptyLine()}),e.toString()}}function R(a,t){const{$Modal:e,$emitter:r}=l();let o=()=>{p.logger.debug("Global error modal closed."),r.emit(h.ERROR_MODAL_CLOSED)};a instanceof E?e.error({title:n(a.title_key),content:n(a.message_key),onOk:()=>o()}):e.error({title:t?n(t):n("error.general.title"),content:n("error.general.message"),onOk:()=>o()})}class k{static async askForSavePath(t,e){return await T({title:"Save",filters:[{name:"Export File Type",extensions:[t]}],defaultPath:e})}static emitShowConvertPreviewEvent(t){const{$emitter:e}=l();e.emit("EventConstant.EXPORT",t)}static getConverter(t){switch(t){case w.MARKDOWN:return{converter:new L,file_extension:"md"};case w.TEXT:return{converter:new N,file_extension:"txt"};default:throw new C(`export to type ${t}`)}}static async exportToFile(t,e="txt",r=()=>{},o=()=>{}){try{const{$viewState:s,$Message:d}=l(),m=await this.askForSavePath(e,s.editing_note.title);if(m===null){p.logger.warn("No path is chosen to open."),d.info(n("common.cancel")),r();return}await _.TauriFileSystem.instance.writeTextFile(m,t,!1,!0),o(),d.info(n("common.saved"))}catch(s){throw p.logger.error("Fail to export Note.",s),s}}}export{k as N,R as e};
