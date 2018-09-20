const {app, Menu, BrowserWindow} = require('electron')

app.on('ready', () => {
  const template = [
    {
      label: app.getName(),
      submenu: [
        {
          label: 'Broken Shortcut',
          // This command doesn't work in v3, but works in v2
          accelerator: 'CmdOrCtrl+Plus',
          click: (item, window) => {
            window.webContents.send('shortcut-press')
          }
        },
        {role: 'quit'}
      ]
    }
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
  
  const mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile('index.html')
})

app.on('window-all-closed', () => {
    app.quit()
})
