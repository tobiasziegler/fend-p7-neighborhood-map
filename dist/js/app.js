function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:-33.283333,lng:149.1},zoom:13}),vm.locations().forEach(function(e){new google.maps.Marker({position:e.position,map:map})})}var map,Locations=[{name:"The Hotel Canobolas",address:"248 Summer St",position:{lat:-33.2844163,lng:149.1018213}},{name:"Parkview Hotel Orange",address:"281 Summer St",position:{lat:-33.2836838,lng:149.1020493}},{name:"Eighteen 70",address:"85 March St",position:{lat:-33.2783207,lng:149.0922561}},{name:"Sweet Sour Salt",address:"116 Summer St",position:{lat:-33.283295,lng:149.0936483}},{name:"Bills Beans East Orange",address:"148 McLachlan St",position:{lat:-33.2849981,lng:149.1060653}},{name:"Byng Street Cafe & Local Store",address:"47 Byng St",position:{lat:-33.2800973,lng:149.0893966}}],ViewModel=function(){var e=this;e.locations=ko.observableArray(Locations),e.search=ko.observable(""),e.filteredLocations=ko.computed(function(){if(e.search){var a=e.search().toLowerCase();return ko.utils.arrayFilter(e.locations(),function(e){return-1!==e.name.toLowerCase().indexOf(a)})}return e.locations()})},vm=new ViewModel;ko.applyBindings(vm);