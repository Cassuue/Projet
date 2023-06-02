<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        <title> index </title>
    </head>

    <body>
    <div class="container">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Que souhaitez-vous écouter ?" aria-label="search" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Rechercher</button>
        </div>
        
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Checkbox dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
            <a class="dropdown-item" href="#">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Checkme1" />
                    <label class="form-check-label" for="Checkme1">Check me</label>
                </div>
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="#">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Checkme2" checked />
                    <label class="form-check-label" for="Checkme2">Check me</label>
                </div>
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="#">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Checkme3" />
                    <label class="form-check-label" for="Checkme3">Check me</label>
                </div>
            </a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
            <a class="dropdown-item" href="#">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Checkme4" checked />
                    <label class="form-check-label" for="Checkme4">Check me</label>
                </div>
            </a>
        </li>
    </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li>
      <label class="dropdown-item">
        <input type="checkbox" value="action"> Action
      </label>
    </li>
    <li>
      <label class="dropdown-item">
        <input type="checkbox" value="another-action"> Another action
      </label>
    </li>
    <li>
      <label class="dropdown-item">
        <input type="checkbox" value="something-else"> Something else here
      </label>
    </li>
  </ul>
</div>

    </div>
    </body>
</html>