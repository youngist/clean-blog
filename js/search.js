// var index_made, data_loaded = false;
// var index;
// var posts = [];
// var search_elem = '#search';
// 
// var docTemplate = _.template(
// 	'<li id="<%= url %>" class="doc">' +
//       	'<span class="doc_date"><%= date %></span>' +
//       	' &raquo; ' +
//       	'<a href="<%= url %>" class="doc_title"><%= title %></a>' +
//     '</li>'
// 	);
// 
// $(document).ready(function () {
// 
// 	//remove these methods from the document ready function, cache the results so the page loads regardless, can I cache the files somewhere and access them when the search button is clicked?
// createIndex();
// loadData();
// 
// 
// $(function() {
// 		// var query = getUrlParams();
// 		// console.log(query);
// 		// if(query.length != 0){
// 		// 	console.log(query);
// 		// 	displayResults(getResults(query));
// 		// }
// 
//   $("#search-button").click(function(e) {
// 	  query = $('#search').val();
// 	  console.log("I clicked the search button" + query);
// 	  e.preventDefault();
// 	  // window.location='/search/';
// 	  // $( window ).load(function() {
//       displayResults(getResults(query));
// 	  // });
//      });
//   $(search_elem).keypress(function(e) {
//     var query = $('#search').val();
// 	console.log("I pressed a key" + query);
//     if(e.which == 13) {
//       e.preventDefault();
// 	  console.log(query);
// 	  // window.location='/search/';
// 	  // $( window ).load(function() {
//       displayResults(getResults(query));
// 	  // });
//     }
//   });
// })
// 
// 
// function getUrlParams() {
//     var params = {};
//     window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
// function (str, key, value) {
//     params[key] = value;
// });
// 	console.log("params" + params);
//     return params;
// }
// 
// function displayResults(docs) {
// 	var li_s = [];
// 	_.each(docs, function(doc) {
// 		li_s.push(docTemplate(doc));
// 	});
// 	$('.posts').empty().append(li_s);
// 	$('.doc').css("display", "block");
// 	console.log("display results function" + docs);
// }
// 
// function getResults(query) {
// 	var docs = [];
// 	var results = index.search(query);
// 	_.each(results, function(result) {
// 		console.log('Result ref: ' + result.ref);
// 		var doc = _.find(posts, function(post) {
// 			return post.url === result.ref;
// 		});
// 		if (doc) docs.push(doc);
// 		
// 	});
// 	console.log("get results function" + query );
// 	return docs;
// }
// 
// function createIndex() {
// 	if(index_made == false){
// 	index = lunr(function () {
// 	    this.field('title', {boost: 10})
// 	    this.field('content')
// 	    this.field('date')
// 	    this.ref('url')
//   });
//   	index_made = true;
// 	}
// }
// 
// function loadData() {
// 	if(data_loaded == false){
// 	$('.doc').each(function(doc_index) {
// 		var doc = {};
// 		doc.date = $(this).find('.doc_date').text();
// 		doc.content = $(this).find('.doc_content').text();
// 		doc.title = $(this).find('.doc_title').text();
// 		doc.url = $(this).find('.doc_title').attr('href');
// 
// 		index.add(doc);
// 		posts.push(doc);
// 	});
// 	data_loaded == true;
// 	}
// }
// 
// 
// 
// });