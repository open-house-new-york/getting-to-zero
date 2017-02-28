"use strict";function initMaps(){function t(t,e,n){for(var a=.99*$(".map-export").width(),i=viewportHeight,p=d3.geo.mercator().scale(1).translate([0,0]),s=d3.geo.path().projection(p),o=t.features.length;o--;)"Landfill"!==t.features[o].properties.sent_fac_t&&t.features.splice(o,1);for(var l=e.features.length;l--;)null===e.features[l].geometry.coordinates&&e.features.splice(l,1);var r=s.bounds(t),g=.75,h=g/Math.max((r[1][0]-r[0][0])/a,(r[1][1]-r[0][1])/i),f=[(a-h*(r[1][0]+r[0][0]))/2,(i-h*(r[1][1]+r[0][1]))/2];p.scale(h).translate(f),d3.select("#map-export-svg")&&d3.select("#map-export-svg").remove();var c=d3.select(".map-export").append("svg").attr("width",a).attr("height",i).attr("id","map-export-svg");$("#map-export-svg").css({position:"absolute",top:-topVisPadding});var d=(c.append("circle").attr("cx",a/2).attr("cy",i/2).attr("r",a/2).attr("fill",journeyConfigs.mapConfigs.colors.background).attr("stroke-width",0),c.append("clipPath").attr("id","mapClip").append("circle").attr("cx",a/2).attr("cy",i/2).attr("r",a/2),c.append("g").attr("class","mapGroup").attr("clip-path","url(#mapClip)").on("click",function(t){journeyConfigs.mapEl.wasteExport.startAnimation()})),y=d.append("g").attr("class","usStates"),j=d.append("g").attr("class","lineConnect"),u=d.append("g").attr("class","exportPoints");y.selectAll(".usStates").data(n.features).enter().append("path").attr({d:s}).style("stroke","#fff").style("stroke-width",1).style("fill",journeyConfigs.mapConfigs.colors.land),j.selectAll(".lineConnect").data(t.features).enter().append("path").attr({d:s,"stroke-dasharray":"0 5000"}).style("stroke",journeyConfigs.mapConfigs.colors.wasteLines).attr("stroke-width",function(t){return"Landfill"===t.properties.sent_fac_t?journeyConfigs.mapConfigs.scales.lineWidth(t.properties.sent_tons_):0}).style("fill","none").attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",function(t){return-this.getTotalLength()}).attr("class","lineConnect"),u.selectAll(".exportPoints").data(e.features).enter().append("circle").attr("cx",function(t){return p([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("cy",function(t){return p([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("r",0).style("stroke","#fff").style("stroke-width",1).style("fill",journeyConfigs.mapConfigs.colors.wasteCircles).attr("opacity",function(t){return"Landfill"===t.properties.sent_fac_t?1:0}).attr("class","exportPoints"),journeyConfigs.mapEl.wasteExport.animationPlayed=!1,journeyConfigs.mapEl.wasteExport.startAnimation=function(){journeyConfigs.mapEl.wasteExport.animationPlayed||(journeyConfigs.mapEl.wasteExport.animationPlayed=!0,u.selectAll(".exportPoints").each(function(t,e){d3.select(this).attr("r",0)}),j.selectAll(".lineConnect").each(function(t,e){d3.select(this).attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",function(t){return-this.getTotalLength()}).attr("class","lineConnect").transition().duration(1500).attr("stroke-dashoffset",0).each("end",function(){journeyConfigs.mapEl.wasteExport.transitionCircles()})}))},journeyConfigs.mapEl.wasteExport.transitionCircles=function(){u.selectAll(".exportPoints").each(function(t,e){d3.select(this).attr("r",0).transition().duration(1500).attr("r",function(t){return journeyConfigs.mapConfigs.scales.circleRadius(t.properties.sent_tons_)}).each("end",function(){journeyConfigs.mapEl.wasteExport.linesOut()})})},journeyConfigs.mapEl.wasteExport.linesOut=function(){j.selectAll(".lineConnect").each(function(t,e){d3.select(this).attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",0).attr("class","lineConnect").transition().duration(1500).attr("stroke-dashoffset",function(t){return this.getTotalLength()})}),setTimeout(function(){journeyConfigs.mapEl.wasteExport.animationPlayed=!1},1600)}}function e(t,e,n,a){var i=.99*$(".map-nyc").width(),p=viewportHeight,s=d3.geo.albers().scale(1).translate([0,0]),o=d3.geo.path().projection(s),l=o.bounds(t),r=isMobile?.75:.95,g=r/Math.max((l[1][0]-l[0][0])/i,(l[1][1]-l[0][1])/p),h=[(i-g*(l[1][0]+l[0][0]))/2,(p-g*(l[1][1]+l[0][1]))/2];s.scale(g).translate(h),d3.select("#map-nyc-svg")&&d3.select("#map-nyc-svg").remove();var f=d3.select(".map-nyc").append("svg").attr("width",i).attr("height",p).attr("id","map-nyc-svg");$("#map-nyc-svg").css({position:"absolute",top:-topVisPadding});var c=(f.append("circle").attr("cx",i/2).attr("cy",p/2).attr("r",i/2).attr("fill",journeyConfigs.mapConfigs.colors.background).attr("stroke-width",0),f.append("clipPath").attr("id","mapClip").append("circle").attr("cx",i/2).attr("cy",p/2).attr("r",i/2),f.append("g").attr("class","mapGroup").attr("clip-path","url(#mapClip)").on("click",function(t){journeyConfigs.mapEl.nyc.startAnimation()})),d=c.append("g").attr("class","usStates"),y=c.append("g").attr("class","commDist"),j=c.append("g").attr("class","lineConnect"),u=c.append("g").attr("class","destPointsRefuse");d.selectAll(".usStates").data(a.features).enter().append("path").attr({d:o}).style("stroke","black").style("stroke-width",0).style("fill",journeyConfigs.mapConfigs.colors.land).attr("class","usStates"),y.selectAll(".nycd").data(n.features).enter().append("path").attr({d:o}).style("stroke","black").style("stroke-width",0).style("fill",journeyConfigs.mapConfigs.colors.land).attr("class","nycd"),j.selectAll(".lineConnect").data(t.features).enter().append("path").attr({d:o}).style("stroke",journeyConfigs.mapConfigs.colors.wasteLines).attr("stroke-width",function(t){return journeyConfigs.mapConfigs.scales.lineWidth(t.properties.j_tot_rec)}).style("fill","none").attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",function(t){return this.getTotalLength()}).attr("class","lineConnect"),u.selectAll(".destPointsRefuse").data(e.features).enter().append("circle").attr("cx",function(t){return s([t.geometry.coordinates[0],t.geometry.coordinates[1]])[0]}).attr("cy",function(t){return s([t.geometry.coordinates[0],t.geometry.coordinates[1]])[1]}).attr("r",0).style("stroke","#fff").style("stroke-width",1).style("fill",journeyConfigs.mapConfigs.colors.wasteCircles).attr("class","destPointsRefuse"),journeyConfigs.mapEl.nyc.animationPlayed=!1,journeyConfigs.mapEl.nyc.startAnimation=function(){journeyConfigs.mapEl.nyc.animationPlayed||(journeyConfigs.mapEl.nyc.animationPlayed=!0,u.selectAll(".destPointsRefuse").each(function(t,e){d3.select(this).attr("r",0)}),j.selectAll(".lineConnect").each(function(t,e){d3.select(this).attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",function(t){return this.getTotalLength()}).attr("class","lineConnect").transition().duration(1500).attr("stroke-dashoffset",0).each("end",function(){journeyConfigs.mapEl.nyc.transitionCircles()})}))},journeyConfigs.mapEl.nyc.transitionCircles=function(){u.selectAll(".destPointsRefuse").each(function(t,e){d3.select(this).attr("r",0).transition().duration(1500).attr("r",function(t){return journeyConfigs.mapConfigs.scales.circleRadius(t.properties.j_tot_rec)}).each("end",function(){journeyConfigs.mapEl.nyc.linesOut()})})},journeyConfigs.mapEl.nyc.linesOut=function(){j.selectAll(".lineConnect").each(function(t,e){d3.select(this).attr("stroke-dasharray",function(t){return this.getTotalLength()+" "+this.getTotalLength()}).attr("stroke-dashoffset",0).attr("class","lineConnect").transition().duration(1500).attr("stroke-dashoffset",function(t){return-this.getTotalLength()})}),setTimeout(function(){journeyConfigs.mapEl.nyc.animationPlayed=!1},1600)}}journeyConfigs.mapConfigs.colors={background:"#edf0ff",land:"#d9d9d9",wasteLines:"#f15a29",wasteCircles:"#f15a29"},journeyConfigs.mapConfigs.scales={circleRadius:function(t){return.025*Math.sqrt(t/3.14)},lineWidth:function(t){return journeyConfigs.mapConfigs.scales.circleRadius(t)/2}},d3.json(journeyConfigs.mapDataPath,function(n){var a=n.od_lines_refuse,i=n.dest_points_refuse,p=n.nycd,s=n.dest_lines,o=n.export_points,l=n.states_east,r=n.ny_nj_ct;e(a,i,p,r),t(s,o,l)})}var visImageSizes=[{height:500,width:251,type:"jpg",filename:"500_panel-0-1.jpg"},{height:500,width:399,type:"jpg",filename:"500_panel-1-1.jpg"},{height:500,width:1431,type:"jpg",filename:"500_panel-1-2.jpg"},{height:500,width:1543,type:"jpg",filename:"500_panel-2-3.jpg"},{height:500,width:1497,type:"jpg",filename:"500_panel-2-4.jpg"},{height:500,width:1394,type:"jpg",filename:"500_panel-2-5.jpg"},{height:500,width:2813,type:"jpg",filename:"500_panel-2-7.jpg"},{height:500,width:654,type:"jpg",filename:"500_panel-3-1.jpg"},{height:500,width:441,type:"jpg",filename:"500_panel-3-2.jpg"},{height:500,width:1122,type:"jpg",filename:"500_panel-3-3.jpg"},{height:500,width:818,type:"jpg",filename:"500_panel-4-1.jpg"},{height:500,width:993,type:"jpg",filename:"500_panel-4-3.jpg"},{height:500,width:523,type:"jpg",filename:"500_panel-4-4.jpg"},{height:500,width:913,type:"jpg",filename:"500_panel-4-5.jpg"},{height:500,width:788,type:"jpg",filename:"500_panel-4-6-2.jpg"},{height:500,width:788,type:"jpg",filename:"500_panel-4-6.jpg"},{height:600,width:301,type:"jpg",filename:"600_panel-0-1.jpg"},{height:600,width:479,type:"jpg",filename:"600_panel-1-1.jpg"},{height:600,width:1717,type:"jpg",filename:"600_panel-1-2.jpg"},{height:600,width:1851,type:"jpg",filename:"600_panel-2-3.jpg"},{height:600,width:1796,type:"jpg",filename:"600_panel-2-4.jpg"},{height:600,width:1673,type:"jpg",filename:"600_panel-2-5.jpg"},{height:600,width:3376,type:"jpg",filename:"600_panel-2-7.jpg"},{height:600,width:785,type:"jpg",filename:"600_panel-3-1.jpg"},{height:600,width:529,type:"jpg",filename:"600_panel-3-2.jpg"},{height:600,width:1346,type:"jpg",filename:"600_panel-3-3.jpg"},{height:600,width:981,type:"jpg",filename:"600_panel-4-1.jpg"},{height:600,width:1191,type:"jpg",filename:"600_panel-4-3.jpg"},{height:600,width:627,type:"jpg",filename:"600_panel-4-4.jpg"},{height:600,width:1095,type:"jpg",filename:"600_panel-4-5.jpg"},{height:600,width:945,type:"jpg",filename:"600_panel-4-6-2.jpg"},{height:600,width:945,type:"jpg",filename:"600_panel-4-6.jpg"},{height:700,width:351,type:"jpg",filename:"700_panel-0-1.jpg"},{height:700,width:559,type:"jpg",filename:"700_panel-1-1.jpg"},{height:700,width:2003,type:"jpg",filename:"700_panel-1-2.jpg"},{height:700,width:2159,type:"jpg",filename:"700_panel-2-3.jpg"},{height:700,width:2095,type:"jpg",filename:"700_panel-2-4.jpg"},{height:700,width:1952,type:"jpg",filename:"700_panel-2-5.jpg"},{height:700,width:3939,type:"jpg",filename:"700_panel-2-7.jpg"},{height:700,width:916,type:"jpg",filename:"700_panel-3-1.jpg"},{height:700,width:617,type:"jpg",filename:"700_panel-3-2.jpg"},{height:700,width:1570,type:"jpg",filename:"700_panel-3-3.jpg"},{height:700,width:1145,type:"jpg",filename:"700_panel-4-1.jpg"},{height:700,width:1390,type:"jpg",filename:"700_panel-4-3.jpg"},{height:700,width:732,type:"jpg",filename:"700_panel-4-4.jpg"},{height:700,width:1278,type:"jpg",filename:"700_panel-4-5.jpg"},{height:700,width:1103,type:"jpg",filename:"700_panel-4-6-2.jpg"},{height:700,width:1102,type:"jpg",filename:"700_panel-4-6.jpg"},{height:800,width:401,type:"jpg",filename:"800_panel-0-1.jpg"},{height:800,width:639,type:"jpg",filename:"800_panel-1-1.jpg"},{height:800,width:2289,type:"jpg",filename:"800_panel-1-2.jpg"},{height:800,width:2467,type:"jpg",filename:"800_panel-2-3.jpg"},{height:800,width:2394,type:"jpg",filename:"800_panel-2-4.jpg"},{height:800,width:2231,type:"jpg",filename:"800_panel-2-5.jpg"},{height:800,width:1047,type:"jpg",filename:"800_panel-3-1.jpg"},{height:800,width:705,type:"jpg",filename:"800_panel-3-2.jpg"},{height:800,width:1794,type:"jpg",filename:"800_panel-3-3.jpg"},{height:800,width:1308,type:"jpg",filename:"800_panel-4-1.jpg"},{height:800,width:1588,type:"jpg",filename:"800_panel-4-3.jpg"},{height:800,width:837,type:"jpg",filename:"800_panel-4-4.jpg"},{height:800,width:1461,type:"jpg",filename:"800_panel-4-5.jpg"},{height:800,width:1260,type:"jpg",filename:"800_panel-4-6-2.jpg"},{height:800,width:1259,type:"jpg",filename:"800_panel-4-6.jpg"}],journeyConfigs={};journeyConfigs.meta={name:"From Curb to Lanfill",slug:"curb-to-landfill",id:1},journeyConfigs.firstPanelId="panel-0-1",journeyConfigs.visSteps=[{step:1,name:"Collection",id:"1-1"},{step:2,name:"Transfer",id:"2-1"},{step:3,name:"Export",id:"3-1"},{step:4,name:"Disposal",id:"4-1"}],journeyConfigs.mapEl={nyc:{id:"1-4"},wasteExport:{id:"3-4"}},journeyConfigs.mapDataPath="data/curb-to-landfill.geojson",journeyConfigs.mapConfigs={};