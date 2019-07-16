/* oss.sheetjs.com (C) 2014-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */

/** drop target **/
var _target = document.getElementById('drop');
var _file = document.getElementById('file');
var _grid = document.getElementById('grid');

var cdg = canvasDatagrid({
  parentNode: _grid
});
cdg.style.height = '100%';
cdg.style.width = '100%';

function _resize() {
  _grid.style.height = (window.innerHeight - 200) + "px";
  _grid.style.width = (window.innerWidth - 200) + "px";
}
window.addEventListener('resize', _resize);

var _onsheet = function(json, sheetnames, select_sheet_cb) {


  /* show grid */
  _grid.style.display = "block";
  _resize();

  /* set up table headers */
  var L = 0;
  json.forEach(function(r) { if(L < r.length) L = r.length; });
  console.log(L);
  for(var i = json[0].length; i < L; ++i) {
    json[0][i] = "";
  }

  /* load data */
  cdg.data = json;
};

/** Drop it like it's hot **/
DropSheet({
  file: _file,
  drop: _target,
  on: {
    sheet: _onsheet,
    foo: 'bar'
  }
})
