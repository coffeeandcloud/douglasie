"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DouglasieViewer = void 0;
const vscode = require("vscode");
class DouglasieViewer {
    constructor() {
        this.outputChannel = vscode.window.createOutputChannel('douglasie');
        this.outputChannel.show(true);
        this.outputChannel.appendLine('Loading DouglasieViewer');
    }
    resolveCustomTextEditor(document, webviewPanel, token) {
        const content = document.getText();
        webviewPanel.title = 'DouglasieViewer';
        webviewPanel.webview.html = `
            <table>
                <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                </tr>
                <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
                </tr>
                <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                </tr>
            </table> 
        `;
    }
}
exports.DouglasieViewer = DouglasieViewer;
//# sourceMappingURL=douglasie-viewer.js.map