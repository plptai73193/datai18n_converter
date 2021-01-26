$(document).ready(function () {
	var json;
	var files;
	$('#files').on('input propertychange', function (event) {
		files = event.target.files;
	})
	$('#convert').on('click', function () {
		$('.copy').text('Copy');
		for (var i = 0, f; f = files[i]; i++) {
			var reader = new FileReader();
			reader.onload = (function (e) {
				return function (e) {
					let ori_json = JSON.parse(e.target.result);
					var fullKeyText = {};
					if (Array.isArray(ori_json)) {
						json = ori_json[0];
					} else {
						json = ori_json;
					}
					for (var key in json) {				//Page Key
						var value = json[key];
						for (var subkey in value) {			//Text Key
							let i18nAttrKey = key + "." + subkey;
							let text = value[subkey];
							fullKeyText[i18nAttrKey] = text;
						}
					}
					var htmlInput = $($('.html textarea').val());
					$("#temp").html(htmlInput);
					$("#temp *").each(function (index, item) {
						for (var key in fullKeyText) {
							let oriText = fullKeyText[key];
							let oriTextUsedCompare = parseCompareTxt(oriText);

							let txtHtml = $(item).html().toString().trim();
							let txtHtmlUsedCompare = parseCompareTxt(txtHtml);
							if ( txtHtmlUsedCompare == oriTextUsedCompare && ($(item).children().length < 1 || $(item).children("br").length > 0)) {
								$(item).attr('data-i18n', key);
							}
						}
					});
					$('.converted_result textarea').val($("#temp").html())
				}
			})(f);
			reader.readAsText(f);
		}
	});
	var clipboard = new ClipboardJS('.copy');
	//success
	clipboard.on('success', function () {
		$('.copy').text('Copied');
	});

	function parseCompareTxt(txt){
		return txt.replace(/\'/g, "").replace(/\<br\>/g, "").replace(/\<br\/>"/g, "").replace(/\’/g, "").replace(/\n/g, "").replace(/\./g, "").replace(/ /g, "").replace(/\,/g, "").replace(/\!/g, "").replace(/\?/g, "").toLowerCase();
	}
});
