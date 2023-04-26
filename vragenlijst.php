<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <script src="js/vragenlijstOOP.js" defer></script>
  <script src="js/main.js" defer></script>
  <title>Vragenlijst</title>
</head>

<body>
  
</body>

<script>
  function UpdateData() {
    localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), document.getElementById('js--updatedata').value)
  }
</script>

</html>