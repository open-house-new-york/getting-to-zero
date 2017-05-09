"use strict";function initMaps(t,e,n,o,r,a,s,i,l,c,p,u,d,f){function m(t,n,r,a){var s=.99*$(".map-comm-coll").width(),l=e,c=d3.geo.albers().scale(1).translate([0,0]),p=d3.geo.path().projection(c),u=p.bounds(a),d=.8,f=d/Math.max((u[1][0]-u[0][0])/s,(u[1][1]-u[0][1])/l),m=[(s-f*(u[1][0]+u[0][0]))/2,(l-f*(u[1][1]+u[0][1]))/2];c.scale(f).translate(m),d3.select("#map-comm-coll-svg")&&d3.select("#map-comm-coll-svg").remove();var g=d3.select(".map-comm-coll").append("svg").attr("width",s).attr("height",l).attr("id","map-comm-coll-svg").on("click",function(t){journeyConfigs.mapEl.commColl.startAnimation()});$("#map-comm-coll-svg").css({position:"absolute",top:-i});var y=(g.append("circle").attr("cx",s/2).attr("cy",l/2).attr("r",s/2).style("fill",journeyConfigs.mapConfigs.colors.background).attr("stroke-width",0),g.append("clipPath").attr("id","mapClip").append("circle").attr("cx",s/2).attr("cy",l/2).attr("r",s/2),g.append("g").attr("class","mapGroup").attr("clip-path","url(#mapClip)")),C=y.append("g").attr("class","usStates"),h=y.append("g").attr("class","commDist"),j=(y.append("g").attr("class","routeRoads"),y.append("g").attr("class","truckLines")),x=y.append("g").attr("class","truckPoints");C.selectAll(".usStates").data(n.features).enter().append("path").attr({d:p}).style("stroke","black").style("stroke-width",0).style("fill",journeyConfigs.mapConfigs.colors.land).attr("class","usStates"),h.selectAll(".nycd").data(t.features).enter().append("path").attr({d:p}).style("stroke","black").style("stroke-width",0).style("fill",function(t,e){return journeyConfigs.mapConfigs.colors.land}).attr("class","nycd"),j.selectAll(".truckLines").data(r.features).enter().append("path").attr({d:p}).style("stroke",journeyConfigs.mapConfigs.colors.wasteLines).attr("stroke-width",function(t){return o?1:2}).style("fill","none").attr("opacity",0).attr("class","truckLines"),x.selectAll(".truckPoints").data(a.features).enter().append("circle").attr("cx",function(t){return c([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("cy",function(t){return c([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("r",0).style("stroke","#fff").style("stroke-width",1).style("fill",function(t,e){return"start"==t.properties.route?journeyConfigs.mapConfigs.colors.complementaryOpacity:"end"==t.properties.route?journeyConfigs.mapConfigs.colors.complementary:journeyConfigs.mapConfigs.colors.wasteCircles}).attr("class","truckPoints");var E=["A sample commecial"],P=["pickup route"],w=["Garage","Transfer Station","Customer"],k=10,_=10,v=10,T=o?8:30,A=.4*l,b=(g.selectAll("routeLegendTitle").data(E).enter().append("text").attr("class","map-legend legend-route").attr("id","legend-route-title").attr("x",T).attr("y",A-2.5*v).text(function(t,e){return E[e]}).attr("opacity",1),g.selectAll("routeLegendTitleBelow").data(P).enter().append("text").attr("class","map-legend legend-route").attr("id","legend-route-title").attr("x",T).attr("y",A-1*v).text(function(t,e){return P[e]}).attr("opacity",1),g.selectAll("routeLegend").data(journeyConfigs.mapConfigs.colors.scale).enter().append("g").attr("class","map-legend legend-route").attr("id",function(t,e){return"legend-route-"+e}).attr("opacity",1));b.append("circle").attr("class","legend-route").attr("cx",T+k/2).attr("cy",function(t,e){return A+e*_+e*v+k/2}).attr("r",k/2).style("stroke","#fff").style("stroke-width",1).style("fill",function(t,e){return t}),b.append("text").attr("class","legend-route").attr("x",T+k+v).attr("y",function(t,e){return A+e*_+10+e*v}).text(function(t,e){return w[e]}),journeyConfigs.mapEl.commColl.animationPlayed=!1,journeyConfigs.mapEl.commColl.legendPointsPlayed=!1,journeyConfigs.mapEl.commColl.otherPointsPlayed=!1,journeyConfigs.mapEl.commColl.routeLinesInPlayed=!1,journeyConfigs.mapEl.commColl.outPlayed=!1,journeyConfigs.mapEl.commColl.startAnimation=function(){journeyConfigs.mapEl.commColl.animationPlayed||(journeyConfigs.mapEl.commColl.animationPlayed=!0,x.selectAll(".truckPoints").each(function(t,e){d3.select(this).attr("r",0)}),h.selectAll(".nycd").each(function(t,e){d3.select(this).style("fill",journeyConfigs.mapConfigs.colors.land).attr("opacity",1)}),j.selectAll(".truckLines").each(function(t,e){d3.select(this).attr("opacity",0)}),x.selectAll(".truckPoints").each(function(t,e){d3.select(this).filter(function(t){return"start"==t.properties.route||"end"==t.properties.route}).attr("r",0).transition().duration(1500).attr("r",function(t){var e=o?3:5;return e}).each("end",function(t,e){journeyConfigs.mapEl.commColl.otherPoints(),journeyConfigs.mapEl.commColl.otherPointsPlayed=!0})}))},journeyConfigs.mapEl.commColl.legendPoints=function(){journeyConfigs.mapEl.commColl.legendPointsPlayed||(g.selectAll("text-garage").data(a.features).enter().append("text").filter(function(t){return"start"==t.properties.route}).attr("x",function(t){return c([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("y",function(t){return c([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("transform",function(t){var e=o?-8:-12;return"translate("+e+",4)"}).attr("class","routes-legend map-legend").attr("text-anchor","end").text("Garage"),g.selectAll("text-ts").data(a.features).enter().append("text").filter(function(t){return"end"==t.properties.route}).attr("x",function(t){return c([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("y",function(t){return c([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("transform",function(t){var e=o?8:12;return"translate("+e+",4)"}).attr("class","routes-legend map-legend").text("Transfer Station"),journeyConfigs.mapEl.commColl.legendOut())},journeyConfigs.mapEl.commColl.legendOut=function(){setTimeout(function(){g.selectAll(".routes-legend").each(function(t,e){d3.select(this).filter(function(t){return"start"==t.properties.route}).attr("opacity",1).transition().duration(1500).attr("opacity",0).each("end",function(t,e){journeyConfigs.mapEl.commColl.otherPoints(),journeyConfigs.mapEl.commColl.otherPointsPlayed=!0})})},1e3)},journeyConfigs.mapEl.commColl.otherPoints=function(){journeyConfigs.mapEl.commColl.otherPointsPlayed||(d3.select("#legend-route-title").attr("opacity",1),d3.select("#legend-route-0").attr("opacity",1),d3.select("#legend-route-1").attr("opacity",1),x.selectAll(".truckPoints").each(function(t,e){d3.select(this).filter(function(t){return"start"!==t.properties.route&&"end"!==t.properties.route}).attr("r",0).transition().duration(1500).attr("r",function(t){var e=o?3:5;return e}).each("end",function(t,e){journeyConfigs.mapEl.commColl.routeLinesIn(),journeyConfigs.mapEl.commColl.routeLinesInPlayed=!0})}))},journeyConfigs.mapEl.commColl.routeLinesIn=function(){journeyConfigs.mapEl.commColl.routeLinesInPlayed||(d3.select("#legend-route-2").attr("opacity",1),j.selectAll(".truckLines").each(function(t,e){d3.select(this).transition().duration(1500).attr("opacity",1).each("end",function(t,e){journeyConfigs.mapEl.commColl.out(),journeyConfigs.mapEl.commColl.outPlayed=!0})}))},journeyConfigs.mapEl.commColl.out=function(){journeyConfigs.mapEl.commColl.outPlayed||setTimeout(function(){journeyConfigs.mapEl.commColl.animationPlayed=!1,journeyConfigs.mapEl.commColl.legendPointsPlayed=!1,journeyConfigs.mapEl.commColl.otherPointsPlayed=!1,journeyConfigs.mapEl.commColl.routeLinesInPlayed=!1,journeyConfigs.mapEl.commColl.outPlayed=!1},1600)}}function g(t,n,r){var a=.99*$(".map-comm-ts").width(),s=e,l=d3.geo.albers().scale(1).translate([0,0]),c=d3.geo.path().projection(l),p=c.bounds(r),u=.8,d=u/Math.max((p[1][0]-p[0][0])/a,(p[1][1]-p[0][1])/s),f=[(a-d*(p[1][0]+p[0][0]))/2,(s-d*(p[1][1]+p[0][1]))/2];l.scale(d).translate(f),d3.select("#map-comm-ts-svg")&&d3.select("#map-comm-ts-svg").remove();var m=d3.select(".map-comm-ts").append("svg").attr("width",a).attr("height",s).attr("id","map-comm-ts-svg").on("click",function(t){journeyConfigs.mapEl.commTS.startAnimation()});$("#map-comm-ts-svg").css({position:"absolute",top:-i});var g=(m.append("circle").attr("cx",a/2).attr("cy",s/2).attr("r",a/2).style("fill",journeyConfigs.mapConfigs.colors.background).attr("stroke-width",0),m.append("clipPath").attr("id","mapClip").append("circle").attr("cx",a/2).attr("cy",s/2).attr("r",a/2),m.append("g").attr("class","mapGroup").attr("clip-path","url(#mapClip)")),y=g.append("g").attr("class","usStates"),C=g.append("g").attr("class","commDist"),h=g.append("g").attr("class","tsCity"),j=g.append("g").attr("class","tsPrivate");y.selectAll(".usStates").data(n.features).enter().append("path").attr({d:c}).style("stroke","black").style("stroke-width",0).style("fill",journeyConfigs.mapConfigs.colors.land).attr("class","usStates"),C.selectAll(".nycd").data(t.features).enter().append("path").attr({d:c}).style("stroke","black").style("stroke-width",0).style("fill",function(t,e){return journeyConfigs.mapConfigs.colors.land}).attr("class","nycd"),h.selectAll(".tsCity").data(r.features).enter().append("circle").filter(function(t){return"C&D"!==t.properties.ac_desc_si}).attr("cx",function(t){return l([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("cy",function(t){return l([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("r",function(t,e){return 0}).style("stroke","#fff").style("stroke-width",1).style("fill",journeyConfigs.mapConfigs.colors.complementaryOpacity).attr("opacity",.7).attr("class","tsCity"),j.selectAll(".tsPrivate").data(r.features).enter().append("circle").filter(function(t){return"C&D"!==t.properties.ac_desc_si}).attr("cx",function(t){return l([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("cy",function(t){return l([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("r",function(t,e){return 0}).style("stroke","#fff").style("stroke-width",1).style("fill",journeyConfigs.mapConfigs.colors.wasteCircles).attr("opacity",.7).attr("class","tsPrivate");var x=["Transfer station"],E=["by waste received"],P=["Residential and"," instituional (DSNY)","Commercial"],w=10,k=10,_=10,v=o?8:30,T=.4*s,A=(m.selectAll("routeLegendTitle").data(x).enter().append("text").attr("class","map-legend legend-route").attr("id","legend-route-title").attr("x",v).attr("y",T-2.5*_-5).text(function(t,e){return x[e]}).attr("opacity",1),m.selectAll("routeLegendTitle").data(E).enter().append("text").attr("class","map-legend legend-route").attr("id","legend-route-title").attr("x",v).attr("y",T-_-5).text(function(t,e){return E[e]}).attr("opacity",1),m.selectAll("tsLegend").data(journeyConfigs.mapConfigs.colors.scaleTS).enter().append("g").attr("class","map-legend legend-ts").attr("id",function(t,e){return"legend-ts-"+e}).attr("opacity",1));A.append("circle").attr("class","legend-ts").attr("cx",v+w/2).attr("cy",function(t,e){return T+e*k+e*_+w/2}).attr("r",w/2).style("stroke","#fff").style("stroke-width",function(t,e){return 1===e?0:1}).style("fill",function(t,e){return 1===e?"transparent":t}),A.append("text").attr("class","legend-ts").attr("x",v+w+_).attr("y",function(t,e){return 1===e?T+e*k+10+e*_-k/2:T+e*k+10+e*_}).text(function(t,e){return P[e]}),journeyConfigs.mapEl.commTS.animationPlayed=!1,journeyConfigs.mapEl.commTS.otherPointsPlayed=!1,journeyConfigs.mapEl.commTS.outPlayed=!1,journeyConfigs.mapEl.commTS.startAnimation=function(){journeyConfigs.mapEl.commTS.animationPlayed||(journeyConfigs.mapEl.commTS.animationPlayed=!0,h.selectAll(".tsCity").each(function(t,e){d3.select(this).attr("r",0)}),j.selectAll(".tsPrivate").each(function(t,e){d3.select(this).attr("r",0)}),h.selectAll(".tsCity").each(function(t,e){d3.select(this).filter(function(t){return"C&D"!==t.properties.ac_desc_si}).attr("r",0).transition().duration(1500).attr("r",function(t){return journeyConfigs.mapConfigs.scales.circleRadius(t.properties.rec_2014-t.properties.rec_privat)}).each("end",function(t,e){journeyConfigs.mapEl.commTS.otherPoints(),journeyConfigs.mapEl.commTS.otherPointsPlayed=!0})}))},journeyConfigs.mapEl.commTS.otherPoints=function(){journeyConfigs.mapEl.commTS.otherPointsPlayed||(d3.select("#legend-ts-title").attr("opacity",1),d3.select("#legend-ts-0").attr("opacity",1),d3.select("#legend-ts-1").attr("opacity",1),j.selectAll(".tsPrivate").each(function(t,e){d3.select(this).filter(function(t){return"C&D"!==t.properties.ac_desc_si}).attr("r",0).transition().duration(1500).attr("r",function(t){return journeyConfigs.mapConfigs.scales.circleRadius(t.properties.rec_privat)}).each("end",function(t,e){journeyConfigs.mapEl.commTS.out(),journeyConfigs.mapEl.commTS.outPlayed=!0})}))},journeyConfigs.mapEl.commTS.out=function(){journeyConfigs.mapEl.commTS.outPlayed||setTimeout(function(){journeyConfigs.mapEl.commTS.animationPlayed=!1,journeyConfigs.mapEl.commTS.otherPointsPlayed=!1,journeyConfigs.mapEl.commTS.outPlayed=!1},1600)}}function y(t,n,r){function a(t){return"Landfill"===t?journeyConfigs.mapConfigs.colors.wasteOpacity:"WTE"===t?journeyConfigs.mapConfigs.colors.wasteCircles:"Transfer Station"===t?journeyConfigs.mapConfigs.colors.complementaryOpacity:void 0}function s(t){return"Landfill"===t||"WTE"===t}for(var l=.99*$(".map-export").width(),c=e,p=d3.geo.mercator().scale(1).translate([0,0]),u=d3.geo.path().projection(p),d=t.features.length;d--;)s(t.features[d].properties.sent_fac_t)||t.features.splice(d,1);for(var f=n.features.length;f--;)null===n.features[f].geometry.coordinates&&n.features.splice(f,1);var m=u.bounds(t),g=.75,y=g/Math.max((m[1][0]-m[0][0])/l,(m[1][1]-m[0][1])/c),C=[(l-y*(m[1][0]+m[0][0]))/2,(c-y*(m[1][1]+m[0][1]))/2];p.scale(y).translate(C),d3.select("#map-export-svg")&&d3.select("#map-export-svg").remove();var h=d3.select(".map-export").append("svg").attr("width",l).attr("height",c).attr("id","map-export-svg").on("click",function(t){journeyConfigs.mapEl.wasteExport.startAnimation()});$("#map-export-svg").css({position:"absolute",top:-i});var j=(h.append("circle").attr("cx",l/2).attr("cy",c/2).attr("r",l/2).attr("fill",journeyConfigs.mapConfigs.colors.background).attr("stroke-width",0),h.append("clipPath").attr("id","mapClip").append("circle").attr("cx",l/2).attr("cy",c/2).attr("r",l/2),h.append("g").attr("class","mapGroup").attr("clip-path","url(#mapClip)")),x=j.append("g").attr("class","usStates"),E=j.append("g").attr("class","lineConnect"),P=j.append("g").attr("class","exportPoints");x.selectAll(".usStates").data(r.features).enter().append("path").attr({d:u}).style("stroke","#fff").style("stroke-width",1).style("fill",journeyConfigs.mapConfigs.colors.land),E.selectAll(".lineConnect").data(t.features).enter().append("path").attr({d:u,"stroke-dasharray":"0 5000"}).style("stroke",function(t,e){return a(t.properties.sent_fac_t)}).attr("stroke-width",function(t){return s(t.properties.sent_fac_t)?journeyConfigs.mapConfigs.scales.lineWidth(t.properties.sent_tons_)/2:0}).style("fill","none").attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",function(t){return-this.getTotalLength()}).attr("class","lineConnect"),P.selectAll(".exportPoints").data(n.features).enter().append("circle").attr("cx",function(t){return p([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("cy",function(t){return p([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("r",0).style("stroke","#fff").style("stroke-width",1).style("fill",function(t,e){return a(t.properties.sent_fac_t)}).attr("opacity",function(t){return s(t.properties.sent_fac_t)?1:0}).attr("class","exportPoints");var w=["Destination type"],k=["Landfill","Incinerator"],_=10,v=10,T=10,A=o?l-.3*l:l-.2*l,b=.6*c,S=(h.selectAll("exportLegendTitle").data(w).enter().append("text").attr("class","map-legend legend-export").attr("id","legend-export-title").attr("x",A).attr("y",b-T).text(function(t,e){return w[e]}).attr("opacity",1),h.selectAll("exportLegend").data(journeyConfigs.mapConfigs.colors.scaleExport).enter().append("g").attr("class","map-legend legend-export").attr("id",function(t,e){return"legend-export-"+e}).attr("opacity",1));S.append("circle").attr("class","legend-export").attr("cx",A+_/2).attr("cy",function(t,e){return b+e*v+e*T+_/2}).attr("r",_/2).style("stroke","#fff").style("stroke-width",1).style("fill",function(t,e){return t}),S.append("text").attr("class","legend-export").attr("x",A+_+T).attr("y",function(t,e){return b+e*v+10+e*T}).text(function(t,e){return k[e]}),journeyConfigs.mapEl.wasteExport.animationPlayed=!1,journeyConfigs.mapEl.wasteExport.transitionCirclesPlayed=!1,journeyConfigs.mapEl.wasteExport.linesOutPlayed=!1,journeyConfigs.mapEl.wasteExport.startAnimation=function(){journeyConfigs.mapEl.wasteExport.animationPlayed||(journeyConfigs.mapEl.wasteExport.animationPlayed=!0,P.selectAll(".exportPoints").each(function(t,e){d3.select(this).attr("r",0)}),E.selectAll(".lineConnect").each(function(t,e){d3.select(this).attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",function(t){return-this.getTotalLength()}).attr("class","lineConnect").transition().duration(1500).attr("stroke-dashoffset",0).each("end",function(){journeyConfigs.mapEl.wasteExport.transitionCircles(),journeyConfigs.mapEl.wasteExport.transitionCirclesPlayed=!0})}))},journeyConfigs.mapEl.wasteExport.transitionCircles=function(){journeyConfigs.mapEl.wasteExport.transitionCirclesPlayed||P.selectAll(".exportPoints").each(function(t,e){d3.select(this).attr("r",0).transition().duration(1500).attr("r",function(t){return journeyConfigs.mapConfigs.scales.circleRadius(t.properties.sent_tons_)}).each("end",function(){journeyConfigs.mapEl.wasteExport.linesOut(),journeyConfigs.mapEl.wasteExport.linesOutPlayed=!0})})},journeyConfigs.mapEl.wasteExport.linesOut=function(){journeyConfigs.mapEl.wasteExport.linesOutPlayed||(E.selectAll(".lineConnect").each(function(t,e){d3.select(this).attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",0).attr("class","lineConnect").transition().duration(1500).attr("stroke-dashoffset",function(t){return this.getTotalLength()})}),setTimeout(function(){journeyConfigs.mapEl.wasteExport.animationPlayed=!1,journeyConfigs.mapEl.wasteExport.transitionCirclesPlayed=!1,journeyConfigs.mapEl.wasteExport.linesOutPlayed=!1},1600))}}var C=o?1:1.5;journeyConfigs.mapConfigs.colors={background:"#edf0ff",land:"#d9d9d9",wasteLines:"#f15a29",wasteCircles:"#f15a29",wasteOpacity:"#e3a793",complementary:"#1485CC",complementaryOpacity:"#8bb8d5",scale:["#8bb8d5","#1485CC","#f15a29"],scaleTS:["#8bb8d5","#fff","#f15a29"],scaleExport:["#e3a793","#f15a29"],scaleDropOff:["#f15a29","#1485CC"]},journeyConfigs.mapConfigs.scales={circleRadius:function(t){return.025*Math.sqrt(t/3.14)*C},lineWidth:function(t){return journeyConfigs.mapConfigs.scales.circleRadius(t)*C}},d3.json(journeyConfigs.mapDataPath,function(t){var e=t.nycd_bcd,n=t.ny_nj_ct_refined,o=(t.od_lines_refuse,t.comm_truck_routes_lines),r=t.comm_truck_routes_points,a=t.all_transfer_stations,s=t.dest_lines,i=t.export_points,l=t.states_east;g(e,n,a),m(e,n,o,r),y(s,i,l)})}var visImageSizes=[{height:600,width:1239,type:"jpg",filename:"600_collection-mobile.jpg"},{height:600,width:1394,type:"jpg",filename:"600_collection.jpg"},{height:600,width:1164,type:"jpg",filename:"600_export-truck.jpg"},{height:600,width:143,type:"jpg",filename:"600_intro-mobile.jpg"},{height:600,width:323,type:"jpg",filename:"600_intro.jpg"},{height:600,width:818,type:"jpg",filename:"600_recyclables.jpg"},{height:600,width:613,type:"jpg",filename:"600_store-mobile.jpg"},{height:600,width:519,type:"jpg",filename:"600_store.jpg"},{height:600,width:1072,type:"jpg",filename:"600_transfer-station.jpg"},{height:600,width:484,type:"jpg",filename:"600_trash-bags-mobile.jpg"},{height:600,width:323,type:"jpg",filename:"600_trash-bags.jpg"},{height:800,width:1652,type:"jpg",filename:"800_collection-mobile.jpg"},{height:800,width:1858,type:"jpg",filename:"800_collection.jpg"},{height:800,width:1552,type:"jpg",filename:"800_export-truck.jpg"},{height:800,width:190,type:"jpg",filename:"800_intro-mobile.jpg"},{height:800,width:430,type:"jpg",filename:"800_intro.jpg"},{height:800,width:1091,type:"jpg",filename:"800_recyclables.jpg"},{height:800,width:817,type:"jpg",filename:"800_store-mobile.jpg"},{height:800,width:692,type:"jpg",filename:"800_store.jpg"},{height:800,width:1429,type:"jpg",filename:"800_transfer-station.jpg"},{height:800,width:645,type:"jpg",filename:"800_trash-bags-mobile.jpg"},{height:800,width:431,type:"jpg",filename:"800_trash-bags.jpg"}],journeyConfigs={};journeyConfigs.meta={name:"Commercial",slug:"commercial",id:1},journeyConfigs.firstPanelId="panel-0-1",journeyConfigs.mapEl={commColl:{id:"3-1"},commTS:{id:"2-2"},wasteExport:{id:"3-50"}},journeyConfigs.mapDataPath="data/commercial.geojson",journeyConfigs.mapConfigs={};