(this.webpackJsonpravenous=this.webpackJsonpravenous||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(8),c=s.n(i),r=(s(14),s(9)),o=(s(15),s(2)),h=s(3),u=s(5),l=s(4),d=(s(16),s(17),s(0)),j=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Business",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:this.props.business.imageSrc,alt:""})}),Object(d.jsx)("h2",{children:this.props.business.name}),Object(d.jsxs)("div",{className:"Business-information",children:[Object(d.jsxs)("div",{className:"Business-address",children:[Object(d.jsx)("p",{children:this.props.business.address}),Object(d.jsx)("p",{children:this.props.business.city}),Object(d.jsxs)("p",{children:[this.props.business.state," ",this.props.business.zipCode]})]}),Object(d.jsxs)("div",{className:"Business-reviews",children:[Object(d.jsx)("h3",{children:this.props.business.category}),Object(d.jsxs)("h3",{className:"rating",children:[this.props.business.rating," stars"]}),Object(d.jsxs)("p",{children:[this.props.business.reviewCount," reviews"]})]})]})]})}}]),s}(a.a.Component),b=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"BusinessList",children:this.props.businesses.map((function(e){return Object(d.jsx)(j,{business:e},e.id)}))})}}]),s}(a.a.Component),p=s(6),O=(s(19),function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},n.handleTermChange=n.handleTermChange.bind(Object(p.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(p.a)(n)),n.handleSearch=n.handleSearch.bind(Object(p.a)(n)),n.sortByOptions={"Best Match":"best_match","Highst Rated":"rating","Most Reviwed":"review_count"},n}return Object(h.a)(s,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){var t=e.target.value;this.setState({term:t})}},{key:"handleLocationChange",value:function(e){var t=e.target.value;this.setState({location:t})}},{key:"handleSearch",value:function(e){var t=this.state,s=t.term,n=t.location,a=t.sortBy;this.props.searchYelp(s,n,a),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var s=e.sortByOptions[t];return Object(d.jsx)("li",{className:e.getSortByClass(s),onClick:e.handleSortByChange.bind(e,s),children:t},s)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchBar",children:[Object(d.jsx)("div",{className:"SearchBar-sort-options",children:Object(d.jsx)("ul",{children:this.renderSortByOptions()})}),Object(d.jsxs)("div",{className:"SearchBar-fields",children:[Object(d.jsx)("input",{placeholder:"Search Businesses",onChange:this.handleTermChange}),Object(d.jsx)("input",{placeholder:"Where?",onChange:this.handleLocationChange})]}),Object(d.jsx)("div",{className:"SearchBar-submit",children:Object(d.jsx)("a",{href:"#",onClick:this.handleSearch,children:"Let's Go"})})]})}}]),s}(a.a.Component)),v={search:function(e,t,s){return console.log(s),fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(s),{headers:{Authorization:"Bearer ".concat("dTBMXcoAdCdoUqU2wNkqUn7cdVp_AvPP-vq3HgwSqAZ84TFM-wudGuYEAs4hZkydxa1dzXhO9obHbxyS6gSfgkxcRZx7Et_0apPEoq9vy10yux9onaPj_sMT3bZbYHYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}};var m=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"ravenous"}),Object(d.jsx)(O,{searchYelp:function(e,t,s){v.search(e,t,s).then((function(e){a(e)}))}}),Object(d.jsx)(b,{businesses:s})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.deadaefd.chunk.js.map