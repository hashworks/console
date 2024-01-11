"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[416],{30416:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var i=a(72791),n=a(57689),s=a(29945),l=a(56087),r=a(87995),c=a(44690),o=a(79844),d=a(61342),p=a(31776),h=a(82342),u=a(17420),g=a(80184);const x=()=>{const e=(0,c.TL)(),t=(0,n.s0)();let a=new URLSearchParams(document.location.search);const x=a.get("bucketName")||"",f=a.get("ruleID")||"";(0,i.useEffect)((()=>{e((0,r.Sc)("bucket-replication-edit"))}),[]);const j=l.gA.BUCKETS+"/".concat(x,"/admin/replication"),[m,b]=(0,i.useState)(!0),[k,v]=(0,i.useState)(!1),[S,y]=(0,i.useState)("1"),[C,I]=(0,i.useState)(""),[w,D]=(0,i.useState)(""),[E,R]=(0,i.useState)(!1),[M,B]=(0,i.useState)(!1),[T,O]=(0,i.useState)(""),[z,N]=(0,i.useState)(""),[P,A]=(0,i.useState)(""),[Z,_]=(0,i.useState)(!1),[W,F]=(0,i.useState)(!1),[K,L]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{m&&x&&f&&p.h.buckets.getBucketReplicationRule(x,f).then((e=>{var t;y(e.data.priority?e.data.priority.toString():"");const a=e.data.prefix||"",i=e.data.tags||"";D(a),O(i),N(i),I((null===(t=e.data.destination)||void 0===t?void 0:t.bucket)||""),R(e.data.delete_marker_replication||!1),A(e.data.storageClass||""),_(!!e.data.existingObjects),F(!!e.data.deletes_replication),L("Enabled"===e.data.status),B(!!e.data.metadata_replication),b(!1)})).catch((t=>{e((0,r.Ih)((0,h.g)(t.error))),b(!1)}))}),[m,e,x,f]),(0,i.useEffect)((()=>{if(k&&x&&f){const a={arn:C,ruleState:K,prefix:w,tags:z,replicateDeleteMarkers:E,replicateDeletes:W,replicateExistingObjects:Z,replicateMetadata:M,priority:parseInt(S),storageClass:P};p.h.buckets.updateMultiBucketReplication(x,f,a).then((()=>{t(j)})).catch((t=>{e((0,r.Ih)((0,h.g)(t.error))),v(!1)}))}}),[k,x,f,C,w,z,E,S,W,Z,K,M,P,e]),(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(o.Z,{label:(0,g.jsx)(s.hbI,{label:"Edit Bucket Replication",onClick:()=>t(j)}),actions:(0,g.jsx)(d.Z,{})}),(0,g.jsx)(s.Xgh,{children:(0,g.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{e.preventDefault(),v(!0)},children:(0,g.jsxs)(s.ltY,{containerPadding:!1,withBorders:!1,helpBox:(0,g.jsx)(s.KfX,{iconComponent:(0,g.jsx)(s.xRg,{}),title:"Bucket Replication Configuration",help:(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(s.xuv,{sx:{paddingTop:"10px"},children:"For each write operation to the bucket, MinIO checks all configured replication rules for the bucket and applies the matching rule with highest configured priority."}),(0,g.jsx)(s.xuv,{sx:{paddingTop:"10px"},children:"MinIO supports enabling replication of existing objects in a bucket."}),(0,g.jsx)(s.xuv,{sx:{paddingTop:"10px"},children:"MinIO does not enable existing object replication by default. Objects created before replication was configured or while replication is disabled are not synchronized to the target deployment unless replication of existing objects is enabled."}),(0,g.jsx)(s.xuv,{sx:{paddingTop:"10px"},children:"MinIO supports replicating delete operations, where MinIO synchronizes deleting specific object versions and new delete markers. Delete operation replication uses the same replication process as all other replication operations."})," "]})}),children:[(0,g.jsx)(s.rsf,{checked:K,id:"ruleState",name:"ruleState",label:"Rule State",onChange:e=>{L(e.target.checked)}}),(0,g.jsx)(s.bSr,{label:"Destination",sx:{width:"100%"},children:C}),(0,g.jsx)(s.Wzg,{id:"priority",name:"priority",onChange:e=>{e.target.validity.valid&&y(e.target.value)},label:"Priority",value:S,pattern:"[0-9]*"}),(0,g.jsx)(s.Wzg,{id:"storageClass",name:"storageClass",onChange:e=>{A(e.target.value)},placeholder:"STANDARD_IA,REDUCED_REDUNDANCY etc",label:"Storage Class",value:P}),(0,g.jsxs)("fieldset",{className:"inputItem",children:[(0,g.jsx)("legend",{children:"Object Filters"}),(0,g.jsx)(s.Wzg,{id:"prefix",name:"prefix",onChange:e=>{D(e.target.value)},placeholder:"prefix",label:"Prefix",value:w}),(0,g.jsx)(u.Z,{name:"tags",label:"Tags",elements:T,onChange:e=>{N(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})]}),(0,g.jsxs)("fieldset",{className:"inputItem",children:[(0,g.jsx)("legend",{children:"Replication Options"}),(0,g.jsx)(s.rsf,{checked:Z,id:"repExisting",name:"repExisting",label:"Existing Objects",onChange:e=>{_(e.target.checked)},description:"Replicate existing objects"}),(0,g.jsx)(s.rsf,{checked:M,id:"metadatataSync",name:"metadatataSync",label:"Metadata Sync",onChange:e=>{B(e.target.checked)},description:"Metadata Sync"}),(0,g.jsx)(s.rsf,{checked:E,id:"deleteMarker",name:"deleteMarker",label:"Delete Marker",onChange:e=>{R(e.target.checked)},description:"Replicate soft deletes"}),(0,g.jsx)(s.rsf,{checked:W,id:"repDelete",name:"repDelete",label:"Deletes",onChange:e=>{F(e.target.checked)},description:"Replicate versioned deletes"})]}),(0,g.jsxs)(s.rjZ,{item:!0,xs:12,sx:{display:"flex",flexDirection:"row",justifyContent:"end",gap:10,paddingTop:10},children:[(0,g.jsx)(s.zxk,{id:"cancel-edit-replication",type:"button",variant:"regular",disabled:m||k,onClick:()=>{t(j)},label:"Cancel"}),(0,g.jsx)(s.zxk,{id:"save-replication",type:"submit",variant:"callAction",disabled:m||k,label:"Save"})]})]})})})]})}},17420:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(72791),n=a(26181),s=a.n(n),l=a(48573),r=a.n(l),c=a(29945),o=a(80184);const d=e=>{let{elements:t,name:a,label:n,tooltip:l="",keyPlaceholder:d="",valuePlaceholder:p="",onChange:h,withBorder:u=!1}=e;const[g,x]=(0,i.useState)([""]),[f,j]=(0,i.useState)([""]),m=(0,i.createRef)();(0,i.useEffect)((()=>{if(1===g.length&&""===g[0]&&1===f.length&&""===f[0]&&t&&""!==t){const e=t.split("&");let a=[],i=[];e.forEach((e=>{const t=e.split("=");2===t.length&&(a.push(t[0]),i.push(t[1]))})),a.push(""),i.push(""),x(a),j(i)}}),[g,f,t]),(0,i.useEffect)((()=>{const e=m.current;e&&g.length>1&&e.scrollIntoView(!1)}),[g]);const b=(0,i.useRef)(!0);(0,i.useLayoutEffect)((()=>{b.current?b.current=!1:S()}),[g,f]);const k=e=>{e.persist();let t=[...g];const a=s()(e.target,"dataset.index","0");t[parseInt(a)]=e.target.value,x(t)},v=e=>{e.persist();let t=[...f];const a=s()(e.target,"dataset.index","0");t[parseInt(a)]=e.target.value,j(t)},S=r()((()=>{let e="";g.forEach(((t,a)=>{if(g[a]&&f[a]){let i="".concat(t,"=").concat(f[a]);0!==a&&(i="&".concat(i)),e="".concat(e).concat(i)}})),h(e)}),500),y=f.map(((e,t)=>(0,o.jsxs)(c.rjZ,{item:!0,xs:12,className:"lineInputBoxes inputItem",children:[(0,o.jsx)(c.Wzg,{id:"".concat(a,"-key-").concat(t.toString()),label:"",name:"".concat(a,"-").concat(t.toString()),value:g[t],onChange:k,index:t,placeholder:d}),(0,o.jsx)("span",{className:"queryDiv",children:":"}),(0,o.jsx)(c.Wzg,{id:"".concat(a,"-value-").concat(t.toString()),label:"",name:"".concat(a,"-").concat(t.toString()),value:f[t],onChange:v,index:t,placeholder:p,overlayIcon:t===f.length-1?(0,o.jsx)(c.dtP,{}):null,overlayAction:()=>{(()=>{if(""!==g[g.length-1].trim()&&""!==f[f.length-1].trim()){const e=[...g],t=[...f];e.push(""),t.push(""),x(e),j(t)}})()}})]},"query-pair-".concat(a,"-").concat(t.toString()))));return(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)(c.rjZ,{item:!0,xs:12,sx:{"& .lineInputBoxes":{display:"flex"},"& .queryDiv":{alignSelf:"center",margin:"-15px 4px 0",fontWeight:600}},className:"inputItem",children:[(0,o.jsxs)(c.AZs,{children:[n,""!==l&&(0,o.jsx)(c.xuv,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,o.jsx)(c.ua7,{tooltip:l,placement:"top",children:(0,o.jsx)(c.byK,{style:{width:13,height:13}})})})]}),(0,o.jsxs)(c.xuv,{withBorders:u,sx:{padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},children:[y,(0,o.jsx)("div",{ref:m})]})]})})}}}]);
//# sourceMappingURL=416.17ac5bdc.chunk.js.map