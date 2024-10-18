
# ASP.NET 5 + Bootstrap + TypeScript

## Projekt Erstellen

```` c#
dotnet new mvc -n AspNET-Bootstrap-TypeScript1
cd AspNET-Bootstrap-TypeScript1
code .
````



## Ports Anpassen

Die Datei Properties/launchSettings.json öffnen und die Ports anpassen.

```` json
...
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "http://localhost:5000", // Ändere den Port auf 5000
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "https": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "https://localhost:7059;http://localhost:5001", // Ändere den Port auf 5001
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
...
````


## !NICHT NÖTIG! Bootstrap hinzufügen


Die Datei Views/Shared/_Layout.cshtml öffnen und den Bootstrap-Link im <head>-Bereich hinzufügen

```` html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@ViewData["Title"] - AspNET-Bootstrap-TypeScript1</title>

    <!-- Bootstrap CSS von einem CDN laden -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    
    <link rel="stylesheet" href="~/css/site.css" />
</head>
````

Und Bootstrap JavaScript am Ende der Datei:

```` html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
````


## Initialisiere npm im Projektordner

````
npm init -y
````

## TypeScript und die TypeScript-Typen für jQuery installieren

````
npm install typescript --save-dev
npm install @types/jquery --save-dev
````

##  tsconfig.json im Projektordner anlegen

```` json
{
  "compilerOptions": {
    "outDir": "./wwwroot/js/",
    "rootDir": "./Scripts",
    "target": "es5",
    "module": "es6",
    "strict": true
  },
  "include": ["Scripts/**/*"]
}
````

## /Scripts/app.ts


```` typescript
// Scripts/app.ts

console.log('TypeScript geladen');

$(() => {
    console.log('jQuery und Bootstrap initialisiert');
    $('#meinElement').text('Hallo aus TypeScript');
});
````

## !NICHT NÖTIG! TypeScript kompilieren

````
npx tsc
````

Dies erstellt die Datei app.js im Ordner wwwroot/js/.

## Automatisches Kompilieren von TypeScript-Dateien

Watch-Modus aktivieren. 
Die ts-Dateien werden automatisch bei Änderungen kompiliert. Führe dazu diesen Befehl im Terminal aus:

``` Terminal
tsc --watch
```

Dies wird den TypeScript-Compiler im Hintergrund ausführen und bei jeder Änderung der app.ts-Datei automatisch die JavaScript-Datei im js-Ordner aktualisieren.

WICHTIG! Befehl ````tsc```` dort ausführen, wo sich die tsconfig.json-Datei befindet.


## HTML-Code anpassen

Die Datei Views/Home/Index.cshtml und folgenden Code hinzufügen

```` html
<div class="container">
    <h1 id="meinElement">Dieser Text wird durch TypeScript ersetzt.</h1>
</div>
````

## JavaScript einbinden

Die Datei Views/Shared/_Layout.cshtml einfügen.

```` html
    <!-- jQuery und dein JavaScript -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="~/js/app.js"></script>
````


## ASP.NET Core Projekt starten

````` powershell
dotnet run
`````

https://localhost:5001 im Browser öffnen.
der Text auf der Seite sollte durch "Hallo aus TypeScript" ersetzt werden.
