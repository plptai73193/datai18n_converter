<!DOCTYPE html>
<html>

<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <title>i18n Converter</title>
   <meta name="author" content="" />
   <link type="text/css" href="assets/css/app.css" rel="stylesheet" />
</head>

<body>
   <div id="result"></div>
   <div id="success">
      <p>Copied</p>
   </div>
   <div id="error">
      <p>Error, please try again</p>
   </div>
   <div id="screenify">
      <div class="flex input_data">
         <div class="html">
            <textarea name="html" id="" cols="30" rows="10"></textarea>
         </div>
         <div class="main">
            <input type="file" id="files" name="files[]" />
            <div class="json"></div>
         </div>
      </div>
      <div id="temp"></div>
      <button id="convert">Convert</button>
      <div class="converted_result">
         <button class="copy" data-clipboard-action="copy" data-clipboard-target="#bar">Copy</button>
         <textarea name="" id="bar" cols="30" rows="10" readonly></textarea>
      </div>
   </div>
   <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
   <script src="assets/js/clipboard.min.js" crossorigin="anonymous"></script>
   <script type="text/javascript" src="assets/js/app.js"></script>
</body>

</html>