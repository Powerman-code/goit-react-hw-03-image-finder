(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1A1pe",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__XS3x9"}},13:function(e,t,a){e.exports={IconButton:"IconButton_IconButton__3ku2J"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1UnMt"}},16:function(e,t,a){e.exports={Button:"Button_Button__1RuDY"}},23:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(8),s=a.n(c),l=(a(23),a(3)),i=a(4),u=a(6),h=a(5),m=a(7),p=a.n(m),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInputChange=function(t){e.setState({inputValue:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputValue.trim()?(e.props.onSubmit(e.state.inputValue),e.reset()):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},e.reset=function(){e.setState({inputValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:p.a.Searchbar,children:Object(n.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{className:p.a.SearchFormButton,type:"submit",children:Object(n.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleInputChange})]})})}}]),a}(r.Component),j=a(12);var b={fetchImage:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19008570-42b7cc415e1b0453677c4c4a2&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No response from server"))}))}},g=a.p+"static/media/404_error.de5bd9ab.jpg";function f(e){var t=e.message;return Object(n.jsxs)("div",{role:"alert",children:[Object(n.jsx)("img",{src:g,width:"400",alt:"girl-and-boy-not-found"}),Object(n.jsx)("p",{children:t})]})}var O=a(17),v=a(13),y=a.n(v),_=function(e){e.children;var t=e.onClick;Object(O.a)(e,["children","onClick"]);return Object(n.jsx)("button",{type:"button",onClick:t,className:y.a.IconButton,children:"X"})};_.defaultProps={onClick:function(){return null},children:null};var x=_,S=a(9),I=a.n(S),k=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){console.log("\u043a\u043b\u0438\u043a \u0432 \u0431\u044d\u043a\u0434\u0440\u043e\u043f"),t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,r=e.onClose;return Object(c.createPortal)(Object(n.jsxs)("div",{className:I.a.Overlay,onClick:this.handleBackdropClick,children:[Object(n.jsx)("div",{className:I.a.Modal,children:Object(n.jsx)("img",{src:t,alt:a})}),Object(n.jsx)("div",{className:I.a.Options,children:Object(n.jsx)(x,{onClick:r})})]}),k)}}]),a}(r.Component),C=a(11),B=a.n(C),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,r=e.largeImageUrl,o=this.state.showModal;return Object(n.jsxs)("li",{className:B.a.ImageGalleryItem,children:[Object(n.jsx)("img",{onClick:this.toggleModal,src:t,alt:a,className:B.a.ImageGalleryItemImage}),o&&Object(n.jsx)(w,{onClose:this.toggleModal,src:r,alt:a})]})}}]),a}(r.Component),N=a(14),F=a.n(N),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.images;return console.log(e),console.log(this.props),Object(n.jsx)("ul",{className:F.a.ImageGallery,children:e.map((function(e){return Object(n.jsx)(M,{src:e.webformatURL,alt:e.tags,largeImageUrl:e.largeImageURL},e.id)}))})}}]),a}(r.Component),L=a(15),A=a.n(L),D=(a(45),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsx)(A.a,{className:"Loader",type:"Oval",color:"#303f9f",height:80,width:80})}}]),a}(r.Component)),Q=a(16),U=a.n(Q),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scroll=function(){e.props.onClick(),setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-130,behavior:"smooth"})}),500)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsx)("button",{type:"button",onClick:this.scroll,className:U.a.Button,children:"Load more"})}}]),a}(r.Component),V=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={error:null,status:"idle",page:1,images:null},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.searchQuerry,r=e.searchQuerry,o=this.state.page,c=t.page;r===n&&c===o||(this.setState({status:"pending",searchResult:null}),console.log(e.searchQuerry),console.log(this.props.searchQuerry),b.fetchImage(n,o).then((function(e){var n=e.hits;c!==o?(console.log(t.images),a.setState({images:[].concat(Object(j.a)(t.images),Object(j.a)(n)),status:"resolved"})):a.setState({images:n,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),console.log(this.state)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status,r=e.images,o=e.page;return"idle"===a?Object(n.jsx)("h1",{children:"Please enter your request"}):"pending"===a?Object(n.jsx)(D,{}):"rejected"===a?Object(n.jsx)(f,{message:t.message}):"resolved"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{images:r}),r&&Object(n.jsx)(E,{onClick:this.onLoadMore,page:o})]}):void 0}}]),a}(r.Component),P=(a(46),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuerry:"",images:[],error:null},e.onSubmit=function(t){e.setState({searchQuerry:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.searchQuerry;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{onSubmit:this.onSubmit}),Object(n.jsx)(V,{searchQuerry:e})]})}}]),a}(r.Component));s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2M5TH",SearchForm:"Searchbar_SearchForm__1Ydpl",SearchFormButton:"Searchbar_SearchFormButton__2ZUuC",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3zT4s",SearchFormInput:"Searchbar_SearchFormInput__2NjXB"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3PAYB",Modal:"Modal_Modal__32Ze1",Options:"Modal_Options__bINvc"}}},[[47,1,2]]]);
//# sourceMappingURL=main.7b3207e1.chunk.js.map