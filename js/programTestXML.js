var fs = require('fs')
var xmlString = fs.readFileSync(process.argv[2], 'utf8')
var xmlArray = xmlString.split('<')

var xmlArray2 = []
for (var i = 0; i < xmlArray.length; i++) {
    if ((xmlArray[i].indexOf('latitude') > -1) && !(xmlArray[i].indexOf('/latitude') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('longitude') > -1) && !(xmlArray[i].indexOf('/longitude') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('salonNo') > -1) && !(xmlArray[i].indexOf('/salonNo') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('storeName') > -1) && !(xmlArray[i].indexOf('/storeName') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('street') > -1) && !(xmlArray[i].indexOf('/street') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('city') > -1) && !(xmlArray[i].indexOf('/city') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('state') > -1) && !(xmlArray[i].indexOf('/state') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('zip') > -1) && !(xmlArray[i].indexOf('/zip') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('phone') > -1) && !(xmlArray[i].indexOf('/phone') > -1)){
      xmlArray2.push(xmlArray[i])
    }

}

//{"type":"Feature","properties":{"id":"Central","status":"0"},"geometry":{"type":"Point","coordinates":[-66.182171,-17.372757]}}

var geoJsonArray = [];
for (var i = 0; i < xmlArray2.length; i = i + 9 ) {
  var geoJsonObject = ''
  geoJsonObject = geoJsonObject + "['"+xmlArray2[i].replace('salonNo>','')
  geoJsonObject = geoJsonObject + "','"+xmlArray2[i+1].replace('storeName>','')
  geoJsonObject = geoJsonObject + "','"+xmlArray2[i+2].replace('street>','')
  geoJsonObject = geoJsonObject + "','"+xmlArray2[i+3].replace('city>','')
  geoJsonObject = geoJsonObject + "','"+xmlArray2[i+4].replace('state>','')
  geoJsonObject = geoJsonObject + "','"+xmlArray2[i+5].replace('zip>','')
  geoJsonObject = geoJsonObject + "','"+xmlArray2[i+6].replace('phone>','')
  geoJsonObject = geoJsonObject + "',"+xmlArray2[i+7].replace('latitude>','')
  geoJsonObject = geoJsonObject + ","+xmlArray2[i+8].replace('longitude>','')+']'
  geoJsonArray.push(geoJsonObject)
}
//console.log(geoJsonArray.length)
console.log('var beaches = [')

for (var i = 0; i < geoJsonArray.length; i++ ) {
  var printFeature = geoJsonArray[i]
  if ((i+1)<geoJsonArray.length) {
    printFeature = printFeature+','
  }
  console.log(printFeature)
}
console.log('];')
