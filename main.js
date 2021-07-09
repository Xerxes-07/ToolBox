const { app, BrowserWindow} = require('electron');
const electron = require('electron')
const path = require('path');
let mainWindow = null;
//判断命令行脚本的第二参数是否含--debug
const debug = /--debug/.test(process.argv[2]);
function makeSingleInstance () {
    if (process.mas) return;
    app.requestSingleInstanceLock();
    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}
const Menu = electron.Menu
function createWindow () {
    // 隐藏菜单栏
    Menu.setApplicationMenu(null)
    
    const windowOptions = {
        width: 900, 
        height: 650, 
        minWidth: 600, 
        minHeight: 400, 
        backgroundColor: '#f0f0f0',
        // resizable: false, 
        allowRunningInsecureContent: true, 
        experimentalCanvasFeatures: true, 
        icon: './ter_logo.png',
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            preload: path.join(__dirname, 'preload.js')
        },
        Menu: null
    };
    mainWindow = new BrowserWindow(windowOptions);

    /**为你的应用加载index.html
     * loadURL 分为两种情况
     *  1.开发环境，指向 react 的开发环境地址
     *  2.生产环境，指向 react build 后的 index.html
    */
    // const startUrl =
    //     process.env.NODE_ENV === "development"
    //         ? "http://localhost:3001/"
    //         : url.format({
    //             pathname: path.join(__dirname, "../build/index.html"),
    //             protocol: "file:",
    //             slashes: true,
    //         });
    // mainWindow.loadURL(startUrl)
    mainWindow.loadURL("http://localhost:3000/");
    // mainWindow.loadURL(path.join('file://', __dirname, '/build/index.html'));

    //接收渲染进程的信息
    const ipc = require('electron').ipcMain;
    ipc.on('min', function () {
        mainWindow.minimize();
    });
    ipc.on('max', function () {
        mainWindow.maximize();
    });
    ipc.on("login",function () {
        mainWindow.maximize();
    });
    //如果是--debug 打开开发者工具，窗口最大化，
    if (debug) {
        mainWindow.webContents.openDevTools();
        require('devtron').install();
    }

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}


makeSingleInstance();
//app主进程的事件和方法
app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
module.exports = mainWindow;