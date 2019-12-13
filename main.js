var source = $('#entry-template').html();
var template = Handlebars.compile(source);

$.ajax({
  'url': 'https://flynn.boolean.careers/exercises/api/array/music',
  'method': 'GET',
  'success': function (data) {
    console.log(data);
    var disco = data.response
    for (var i = 0; i < disco.length; i++) {
      var context = {
        copertina : disco[i].poster,
        titolo : disco[i].title,
        artista : disco[i].author,
        anno : disco[i].year,
        genere_disco : disco[i].genre
      };
      var html = template(context);
      $('.container').append(html);
    }
  },
  'error': function () {
    alert('errore')
  }
})

$('#genere').change(function () {
  var genere_scelto = $(this).val();
  if (genere_scelto == "") {
    $('.container-disco').show();
  }
  else {
    $('.container-disco').each(function () {
      if ($(this).attr('data-genere').toLowerCase() == genere_scelto.toLowerCase()) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    })
  }
})
