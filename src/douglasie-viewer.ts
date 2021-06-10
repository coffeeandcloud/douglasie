import * as vscode from 'vscode';

export class DouglasieViewer implements vscode.CustomTextEditorProvider {

    outputChannel;

    constructor() {
        this.outputChannel = vscode.window.createOutputChannel('douglasie');
        this.outputChannel.show(true);
        this.outputChannel.appendLine('Loading DouglasieViewer');
    }
    resolveCustomTextEditor(document: vscode.TextDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): void | Thenable<void> {
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