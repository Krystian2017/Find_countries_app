var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalList = $('#capitals');
var areaList = $('#areas');
var populationList = $('#populations');
var languageList = $('#languages');
var currencyList = $('#currencies');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: function showCountriesTable (resp) {
      countriesList.empty();
      capitalList.empty();
      areaList.empty();
      populationList.empty();
      languageList.empty();
      currencyList.empty();
      resp.forEach(function(item) {
        $('<tr>').text(item.name).appendTo(countriesList);
        $('<tr>').text(item.capital).appendTo(capitalList);
        $('<tr>').text(item.area).appendTo(areaList);
        $('<tr>').text(item.population).appendTo(populationList);
        $('<tr>').text(item.languages).appendTo(languageList);
        $('<tr>').text(item.currencies).appendTo(currencyList);
      });
    }
  });
}