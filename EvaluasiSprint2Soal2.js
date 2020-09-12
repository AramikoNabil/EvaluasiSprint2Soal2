var listDesa = [
  "argodadi,sedayu",
  "argomulyo,sedayu",
  "argorejo,sedayu",
  "argosari",
  "bangunjiwo,kasihan",
  "banguntapan,banguntapan",
  "bantul,bantul",
  "baturetno,banguntapan",
  "bawuran,pleret",
  "canden,jetis",
  "caturharjo,pandak",
  "cetan srigandi",
];

var banyakDesa = listDesa.length;

document.write("<ol>");
for (i = 0 ;i < banyakDesa; i++) {
  document.write("<li>" + listDesa[i]  + "</li>");
}
document.write("</ol>");