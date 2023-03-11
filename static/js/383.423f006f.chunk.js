"use strict";(self.webpackChunkaio=self.webpackChunkaio||[]).push([[383],{1800:function(e,i,n){n.r(i),n.d(i,{default:function(){return _}});var s=n(9439),t=n(2791),o=n(5705),a=n(5541),r=n.p+"static/media/toolbarPicture.213a879160d9df0d539d.jpg",c=n.p+"static/media/orbit.0b3bcbaf4d265e52c2e6.gif",l=n.p+"static/media/pan.af95d128549b0662ff49.gif",d=n.p+"static/media/zooming.70aac8e7d7ebf30272ed.gif",u=n.p+"static/media/person.acc448d6e78d7778f0c6.gif",h=n.p+"static/media/cube.b2e46196c070d6c25475.gif",m=(n.p,n.p+"static/media/measurement.55831a203fbe0cd6a378.gif"),p=n.p+"static/media/section.a461e6c2214f704d5d55.gif",g=n.p+"static/media/documentBrowser.c4503d38487a01cefa05.gif",v=n.p+"static/media/breakMode.404460c480317e4059ef.gif",f=n.p+"static/media/modelBrowser.d17e94713a0c28ba5b10.gif",x=n.p+"static/media/properties.708f5ab35f32228bff81.gif",j=n.p+"static/media/fullScreen.f85cc1a60070a28d8010.gif",b=n(5271),w=n(184),_=function(){var e=(0,t.useState)("orbit"),i=(0,s.Z)(e,2),n=i[0],_=i[1],N=(0,t.useState)("measurement"),k=(0,s.Z)(N,2),y=k[0],C=k[1],M=(0,t.useState)("modelBrowser"),B=(0,s.Z)(M,2),S=B[0],T=B[1],I={orbit:{image:c,description:"With this tool you can rotate the camera around the 3D image. Relative to axis or in free mode."},pan:{image:l,description:"This tool allows you to move the camera from side to side and from top to bottom."},zooming:{image:d,description:"Moves the camera closer or further away from certain aspects of the design."},person:{image:u,description:"The tool gives users the ability to explore buildings as if they were walking and looking around in first person."},cube:{image:h,description:"In the upper right corner you will see the ViewCube, a clickable and draggable UI element that allows you to rotate around the model. The house icon allows you to return to the original view."}},P={measurement:{image:m,description:"Measures the distance between two points or the angle between three points."},section:{image:p,description:"Cuts the structure along an axis with a plane or through a selected rectangle to allow users to view the inside of the building."},documentBrowser:{image:g,description:"When a project view is exported with multiple views, you can navigate through them using the Views panel."},break:{image:v,description:"Separates model geometry so that users can see separate parts of the design."}},D={modelBrowser:{image:f,description:"3D models usually consist of several separate parts. The house will have floors, walls, interior design and many other types of geometry. The Model Browser provides a user interface for navigating through model geometry. You can click, search, and hide certain parts of the model."},properties:{image:x,description:'Clicking "Properties" will open a modal window containing metadata about the design. This includes information such as part numbers, material type, and mechanical properties.'},fullScreen:{image:j,description:"Opens the viewer window in full screen."}},O=(0,t.useRef)([]);return(0,t.useEffect)((function(){var e={root:document.querySelector("main"),rootMargin:"0px",threshold:1},i=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.hasAttribute("data-autoplay")?e.target.play():e.target.pause()}))}),e);return O.current.forEach((function(e){i.observe(e)})),function(){i.disconnect()}}),[]),(0,w.jsxs)("div",{className:"instructions",children:[(0,w.jsxs)("div",{className:"instructions__head",children:[(0,w.jsx)("h3",{children:"AIO PLATFORM"}),(0,w.jsx)("h1",{children:"Instructions for our platform"}),(0,w.jsx)("p",{children:"Through our platform, users can take advantage of a set of tools to help them interact with and view projects"}),(0,w.jsxs)("div",{children:[(0,w.jsx)("img",{name:"laptop",src:a,alt:"laptop"}),(0,w.jsx)("div",{name:"laptop",children:(0,w.jsx)("video",{ref:function(e){return O.current[0]=e},src:b,type:"video/mp4",preload:"auto","data-autoplay":!0,playsInline:!0,autoPlay:!0,loop:!0,muted:!0})})]})]}),(0,w.jsxs)("div",{className:"instructions__toolbar",children:[(0,w.jsxs)("div",{className:"instructions__toolbar-head",children:[(0,w.jsx)("h2",{children:"Toolbar"}),(0,w.jsx)("p",{children:"Most of the tools are available in the toolbar at the bottom of the screen (the toolbar changes slightly when switching between 2D and 3D views)"})]}),(0,w.jsx)("img",{src:r,alt:"toolbar"}),(0,w.jsxs)("div",{className:"instructions__toolbar-categories",children:[(0,w.jsx)("p",{children:"These tools fall into several categories based on what users can do with them:"}),(0,w.jsxs)("div",{className:"instructions__toolbar-categories-list",children:[(0,w.jsxs)("div",{className:"instructions__toolbar-categories-list-single",children:[(0,w.jsx)("p",{name:"number",children:"01"}),(0,w.jsx)("div",{}),(0,w.jsx)("p",{name:"description",children:"Model navigation tools"})]}),(0,w.jsxs)("div",{className:"instructions__toolbar-categories-list-single",children:[(0,w.jsx)("p",{name:"number",children:"02"}),(0,w.jsx)("div",{}),(0,w.jsx)("p",{name:"description",children:"Dimension, section, transition tools for the component parts of the model"})]}),(0,w.jsxs)("div",{className:"instructions__toolbar-categories-list-single",children:[(0,w.jsx)("p",{name:"number",children:"03"}),(0,w.jsx)("div",{}),(0,w.jsx)("p",{name:"description",children:"Model Browser, Model Properties, and Full Screen Tools"})]})]})]})]}),(0,w.jsxs)("div",{className:"instructions__navigation",children:[(0,w.jsxs)("div",{className:"instructions__navigation-single",children:[(0,w.jsx)("h2",{children:"Navigation tools"}),(0,w.jsx)(o.J9,{children:(0,w.jsx)(o.l0,{children:(0,w.jsxs)(o.gN,{className:"instructions__navigation-single-select",id:"select",name:"select",as:"select",value:n,onChange:function(e){_(e.target.value)},children:[(0,w.jsx)("option",{value:"orbit",children:"Orbit"}),(0,w.jsx)("option",{value:"pan",children:"Pan"}),(0,w.jsx)("option",{value:"zooming",children:"Zooming"}),(0,w.jsx)("option",{value:"person",children:"First person"}),(0,w.jsx)("option",{value:"cube",children:"Cube"})]})})}),(0,w.jsxs)("div",{className:"instructions__navigation-single-buttons",children:[(0,w.jsx)("p",{className:"".concat("orbit"===n?"active":""),onClick:function(){return _("orbit")},children:"Orbit"}),(0,w.jsx)("p",{className:"".concat("pan"===n?"active":""),onClick:function(){return _("pan")},children:"Pan"}),(0,w.jsx)("p",{className:"".concat("zooming"===n?"active":""),onClick:function(){return _("zooming")},children:"Zooming"}),(0,w.jsx)("p",{className:"".concat("person"===n?"active":""),onClick:function(){return _("person")},children:"First person"}),(0,w.jsx)("p",{className:"".concat("cube"===n?"active":""),onClick:function(){return _("cube")},children:"Species cube"})]}),(0,w.jsx)("div",{name:"line"}),(0,w.jsxs)("div",{className:"instructions__navigation-single-content",children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{src:I[n].image,alt:"tool"})}),(0,w.jsx)("div",{children:(0,w.jsx)("p",{children:I[n].description})})]})]}),(0,w.jsxs)("div",{className:"instructions__navigation-single",children:[(0,w.jsx)("h2",{children:"Measuring, Sectioning, Document Browser and Model Exploding Tools"}),(0,w.jsx)(o.J9,{children:(0,w.jsx)(o.l0,{children:(0,w.jsxs)(o.gN,{className:"instructions__navigation-single-select",id:"select",name:"select",as:"select",value:y,onChange:function(e){C(e.target.value)},children:[(0,w.jsx)("option",{value:"measurement",children:"Measurement"}),(0,w.jsx)("option",{value:"section",children:"Cross section"}),(0,w.jsx)("option",{value:"documentBrowser",children:"Document browser"}),(0,w.jsx)("option",{value:"break",children:"Break the Mode"})]})})}),(0,w.jsxs)("div",{className:"instructions__navigation-single-buttons",children:[(0,w.jsx)("p",{className:"".concat("measurement"===y?"active":""),onClick:function(){return C("measurement")},children:"Measurement"}),(0,w.jsx)("p",{className:"".concat("section"===y?"active":""),onClick:function(){return C("section")},children:"Cross section"}),(0,w.jsx)("p",{className:"".concat("documentBrowser"===y?"active":""),onClick:function(){return C("documentBrowser")},children:"Document browser"}),(0,w.jsx)("p",{className:"".concat("break"===y?"active":""),onClick:function(){return C("break")},children:"Break the Mode"})]}),(0,w.jsx)("div",{name:"line"}),(0,w.jsxs)("div",{className:"instructions__navigation-single-content",children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{src:P[y].image,alt:"tool"})}),(0,w.jsx)("div",{children:(0,w.jsx)("p",{children:P[y].description})})]})]}),(0,w.jsxs)("div",{className:"instructions__navigation-single",children:[(0,w.jsx)("h2",{children:"Model browser measurement tools, properties and full screen"}),(0,w.jsx)(o.J9,{children:(0,w.jsx)(o.l0,{children:(0,w.jsxs)(o.gN,{className:"instructions__navigation-single-select",id:"select",name:"select",as:"select",value:S,onChange:function(e){T(e.target.value)},children:[(0,w.jsx)("option",{value:"modelBrowser",children:"Model bowser"}),(0,w.jsx)("option",{value:"properties",children:"Properties"}),(0,w.jsx)("option",{value:"fullScreen",children:"In full screen"})]})})}),(0,w.jsxs)("div",{className:"instructions__navigation-single-buttons",children:[(0,w.jsx)("p",{className:"".concat("modelBrowser"===S?"active":""),onClick:function(){return T("modelBrowser")},children:"Model bowser"}),(0,w.jsx)("p",{className:"".concat("properties"===S?"active":""),onClick:function(){return T("properties")},children:"Properties"}),(0,w.jsx)("p",{className:"".concat("fullScreen"===S?"active":""),onClick:function(){return T("fullScreen")},children:"In full screen"})]}),(0,w.jsx)("div",{name:"line"}),(0,w.jsxs)("div",{className:"instructions__navigation-single-content",children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{src:D[S].image,alt:"tool"})}),(0,w.jsx)("div",{children:(0,w.jsx)("p",{children:D[S].description})})]})]})]})]})}}}]);
//# sourceMappingURL=383.423f006f.chunk.js.map