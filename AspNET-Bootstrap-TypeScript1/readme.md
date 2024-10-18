
# AspNET-Bootstrap-TypeScript1

ASP.NET 5 + Bootstrap + TypeScript


## Projekt Erstellen

```` c#
dotnet new mvc -n AspNET-Bootstrap-TypeScript1
cd AspNET-Bootstrap-TypeScript1
code .
````


## Ports Anpassen

Die Datei ```` Properties/launchSettings.json ```` öffnen und die Ports anpassen.

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


## HTML-Code anpassen

Die Datei ```` Views/Home/Index.cshtml ```` und folgenden Code hinzufügen

```` html
<div class="container">
    <h1 id="meinElement">Dieser Text wird durch TypeScript ersetzt.</h1>
</div>
````

## JavaScript einbinden

Die Datei ```` Views/Shared/_Layout ````. cshtml einfügen.

```` html
    <!-- jQuery und dein JavaScript -->
    <script src="~/js/app.js"></script>
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

##  /tsconfig.json im Projektordner anlegen

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

## Automatisches Kompilieren von TypeScript-Dateien

Watch-Modus aktivieren. 
Die ts-Dateien werden automatisch bei Änderungen kompiliert. Führe dazu diesen Befehl im Terminal aus:

``` Terminal
tsc --watch
```

Dies wird den TypeScript-Compiler im Hintergrund ausführen und bei jeder Änderung erstellt die Datei app.js im Ordner wwwroot/js/.


WICHTIG! Befehl ````tsc```` dort ausführen, wo sich die tsconfig.json-Datei befindet.



## ASP.NET Core Projekt starten

````` powershell
dotnet run
`````

https://localhost:5001 im Browser öffnen.
der Text auf der Seite sollte durch "Hallo aus TypeScript" ersetzt werden.
