(function(){function e(e,t,r){"use strict";var a=jQuery(t);var l=jQuery(r);if(a.length===0){throw Error("No element selected by the searchSelector")}if(l.length===0){throw Error("No element selected by the resultSelector")}if(l.attr("class").indexOf("list-group-item")===-1){l.html('<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>')}jQuery.ajax({url:e,dataType:"xml",success:function(e){var t=jQuery("entry",e).map((function(){return{title:jQuery("title",this).text(),content:jQuery("content",this).text(),url:jQuery("url",this).text()}})).get();if(l.html().indexOf("list-group-item")===-1){l.html("")}a.on("input",(function(){var e=a.val();var r="";var i=e.trim().toLowerCase().split(/[\s-]+/);l.html("");if(e.trim().length<=0){return a.removeClass("invalid").removeClass("valid")}t.forEach((function(e){var t=true;if(!e.title||e.title.trim()===""){e.title="Untitled"}var a=e.title.trim();var l=a.toLowerCase();var s=e.content.trim().replace(/<[^>]+>/g,"");var n=s.toLowerCase();var o=e.url;var c=-1;var u=-1;var v=-1;if(n!==""){i.forEach((function(e,r){c=l.indexOf(e);u=n.indexOf(e);if(c<0&&u<0){t=false}else{if(u<0){u=0}if(r===0){v=u}}}))}else{t=false}if(t){r+="<a href='"+o+"' class='list-group-item list-group-item-action font-weight-bolder search-list-title'>"+a+"</a>";var h=s;if(v>=0){var f=v-20;var d=v+80;if(f<0){f=0}if(f===0){d=100}if(d>h.length){d=h.length}var m=h.substring(f,d);i.forEach((function(e){var t=new RegExp(e,"gi");m=m.replace(t,'<span class="search-word">'+e+"</span>")}));r+="<p class='search-list-content'>"+m+"...</p>"}}}));if(r.indexOf("list-group-item")===-1){return a.addClass("invalid").removeClass("valid")}a.addClass("valid").removeClass("invalid");l.html(r)}))}})}function t(e,t){"use strict";var r=jQuery(e);var a=jQuery(t);if(r.length===0){throw Error("No element selected by the searchSelector")}if(a.length===0){throw Error("No element selected by the resultSelector")}r.val("").removeClass("invalid").removeClass("valid");a.html("")}var r=jQuery("#modalSearch");var a="#local-search-input";var l="#local-search-result";r.on("show.bs.modal",(function(){var t=CONFIG.search_path||"/local-search.xml";e(t,a,l)}));r.on("shown.bs.modal",(function(){jQuery("#local-search-input").focus()}));r.on("hidden.bs.modal",(function(){t(a,l)}))})();