// client-side js
// run by the browser each time your view template is loaded

//$(function() {
    
  fetch('/search-track').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    //var trackName = $('<h3><a href="' + data.external_urls.spotify + '" target="blank">' + data.name + '</a></h3>'
      //<h3><a href="${data.external_urls.spotify}">${data.name}</a></h3>`
      
      var trackName = document.createElement("h3");
      var trackNameLink = document.createElement("a") ;
      trackName.appendChild(trackNameLink);
            trackNameLink.setattribute('href', data.external_urls.spotify + data.name ) ;
            trackNameLink.setattribute('target', "blank") ;
      
      document.getElementById("search-track-container").appendChild(trackName);
    
    //);
    //trackName.appendTo('#search-track-container');
    
    // Display the artist name
    var artists = '';
    
    data.artists.forEach(function(item) {
      artists = artists + item.name + ' ';
    });
    
    let h5 = document.createElement('h5');
    h5.innerText = artists;
    document.getElementById('search-track-container').append(h5);
    
    // Display the album art
    var img = $('<img/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#search-track-container');
  });
  
  fetch ('/category-playlists'). then(resp => resp.json ()). then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the covers of the playlists
    data
      .forEach((c) => {
      document.getElementbyId("category-playlists-container").appendChild();
        //`<br><h1>${c.name}</h1><br>`)
      c.data.playlists.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
    })
  });
  
  fetch('/audio-features').then(resp => resp.json()).then((data)=> {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "speechiness", "loudness"]
    
    // Display the audio features
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        var feature = $('<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>');
        feature.appendTo('#audio-features-container');
      }
    });
  });
  
  fetch('/artist').then(resp => resp.json()).then((data)=> {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the artist's image
    var img = $('<img class="circle-image" />');
    img.attr('src', data.images[0].url);
    img.appendTo('#artist-container');
    
    // Display the artist name
    var trackName = $('<h3>' + data.name + '</h3>');
    trackName.appendTo('#artist-container');
    
    // Display the artist's genres
    data.genres.map(function(genre, i) {
      var genreItem = $('<p>' + genre + '</p>');
      genreItem.appendTo('#artist-container');
    });
  });
  
  fetch('/artist-top-tracks').then(resp => resp.json()).then((data)=> {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the audio features
    data.map(function(track, i) {
      //var trackName = $('<li>' + track.name + '</li>');
      //trackName.appendTo('#top-tracks-container');
      var trackNameAudioFeatures = document.createElement('li');
      li.innerText = track.name;
      document.getElementById('top-tracks-container').append(li);
    });
  });

//});
