(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(12),i=n.n(s),c=(n(23),n(13)),l=n(14),r=n(16),d=n(15),u=n(17),m=n(2),g=n.n(m),h=n(4),b=function(e){var t=e.breed,n=e.allBreeds,a=e.handleChange;return o.a.createElement("select",{value:t,onChange:a},o.a.createElement("option",{value:"empty"},"Select a breed!"),n.map(function(e){return o.a.createElement("option",{key:e,value:e},e)}))},f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){n.setState({breed:e.target.value})},n.onRandomDogRequest=function(){g.a.get("https://dog.ceo/api/breeds/image/random").then(function(e){n.setState({index:n.state.images.length,images:Object(h.concat)(n.state.images,e.data.message)})}).catch(function(e){console.log(e)})},n.onBreedRequest=function(){g.a.get("https://dog.ceo/api/breed/".concat(n.state.breed,"/images/random")).then(function(e){n.setState({index:n.state.images.length,images:Object(h.concat)(n.state.images,e.data.message)})}).catch(function(e){console.log(e)})},n.onReset=function(){n.setState({index:null,images:[]})},n.onPreviousImage=function(){n.setState({index:n.state.index<=0?n.state.index:n.state.index-1})},n.onNextImage=function(){n.setState({index:n.state.index>=n.state.images.length-1?n.state.index:n.state.index+1})},n.state={index:null,images:[],allBreeds:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://dog.ceo/api/breeds/list").then(function(t){e.setState({allBreeds:t.data.message})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.images[this.state.index];return o.a.createElement("div",null,e&&o.a.createElement("img",{src:e,alt:"dog"}),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{onClick:this.onRandomDogRequest},"Random!")),o.a.createElement("div",null,o.a.createElement(b,{breed:this.state.breed,allBreeds:this.state.allBreeds,handleChange:this.handleChange}),o.a.createElement("button",{onClick:this.onBreedRequest},"Get ".concat(this.state.breed||"Dog","!"))),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.onReset},"Restart!"),o.a.createElement("button",{onClick:this.onPreviousImage},"Previous Image"),o.a.createElement("button",{onClick:this.onNextImage},"Next Image"))))}}]),t}(a.Component);i.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0c217e77.chunk.js.map