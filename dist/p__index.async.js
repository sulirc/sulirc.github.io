(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{QeBL:function(e,a,n){"use strict";n.r(a);var t=n("+ufk"),r=n.n(t),s=n("5WQ1"),c=n("TUy+"),i=n.n(c);class o extends r.a.Component{constructor(e){super(e),this.canvas=r.a.createRef()}componentDidMount(){this.init()}init(){var e=this.canvas.current,a={width:285,height:200},n=new s["a"](a).appendTo(e),t=n.makeCircle(72,100,50),r=n.makeRectangle(213,100,100,100);t.fill="#FF8000",t.stroke="orangered",t.linewidth=5,r.fill="rgb(0, 200, 255)",r.opacity=.75,r.noStroke(),n.update()}render(){return r.a.createElement("div",{className:i.a.suri__draft_canvas},r.a.createElement("div",{ref:this.canvas}))}}var d=o;class u extends r.a.Component{constructor(e){super(e)}render(){return r.a.createElement("div",{className:"suri__draft-container"},r.a.createElement(d,null))}}a["default"]=u},"TUy+":function(e,a,n){e.exports={suri__draft_canvas:"suri__draft_canvas___Hc1Kw"}}}]);