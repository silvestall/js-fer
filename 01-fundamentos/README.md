# Curso de JS

## Utilizar el debuger en vscode

1. Crear la carpeta `.vscode`
2. Dentro crear el archivo `launch.json`
3. Como se esta utilizando fnm (para node), se agrega lo siguiente...

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${file}",
      "runtimeExecutable": "C:\\Users\\---\\AppData\\Roaming\\fnm\\node-versions\\v20.14.0\\installation\\node.exe"
    }
  ]
}
```