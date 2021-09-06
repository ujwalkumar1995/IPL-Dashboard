(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(17),r=c.n(s),i=(c(25),c(8)),j=c.n(i),m=c(10),h=c(11),l=c(5),d=(c(27),c(0)),o=function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=t.team1===c?t.team2:t.team1,n="/teams/".concat(a),s=c===t.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard loss-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(l.b,{to:n,children:a})}),Object(d.jsx)("h2",{className:"match-date",children:t.date}),Object(d.jsxs)("h3",{className:"match-venue",children:["at ",t.venue]}),Object(d.jsxs)("h3",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result," "]})]}),Object(d.jsxs)("div",{className:"additional-detail",children:[Object(d.jsx)("h3",{children:"First Innings"}),Object(d.jsx)("p",{children:t.team1}),Object(d.jsx)("h3",{children:"Second Innings"}),Object(d.jsx)("p",{children:t.team2}),Object(d.jsx)("h3",{children:"Man of the Match"}),Object(d.jsx)("p",{children:t.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[t.umpire1,", ",t.umpire2]})]})]})},u=(c(34),function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=t.team1===c?t.team2:t.team1,n=c===t.matchWinner,s="/teams/".concat(a);return Object(d.jsxs)("div",{className:n?"MatchSmallCard won-card":"MatchSmallCard loss-card",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(l.b,{to:s,children:a})}),Object(d.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result," "]})]})}),b=c(2),O=(c(35),c(20)),x=function(){var e=Object(a.useState)({matches:[]}),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{children:"Latest Matches"}),Object(d.jsx)(o,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(d.jsx)(u,{teamName:c.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsx)(l.b,{to:"/teams/".concat(s,"/matches/").concat(c.matches[0].date.split("-")[0]),children:"More >"})})]}):Object(d.jsx)("h1",{children:"Team not found"})},f=(c(36),c(37),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(d.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),v=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select Year"}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(d.jsx)(o,{teamName:r,match:e},e.id)}))]})]})},p=(c(38),function(e){var t=e.teamName;return Object(d.jsx)("div",{className:"TeamTile",children:Object(d.jsx)("h1",{children:Object(d.jsx)(l.b,{to:"/teams/".concat(t),children:t})})})}),N=(c(39),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c?Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"header-section",children:Object(d.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(d.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(d.jsx)(p,{teamName:e.teamName},e.id)}))})]}):Object(d.jsx)("h1",{children:"Team not found"})});c(40);var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(v,{})}),Object(d.jsx)(b.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(b.a,{path:"/",children:Object(d.jsx)(N,{})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),M()}},[[41,1,2]]]);
//# sourceMappingURL=main.e8c16c27.chunk.js.map