const { ipcRenderer } = require('electron')

ipcRenderer.on('shortcut-press', () => {
	alert('Shortcut triggered')
})