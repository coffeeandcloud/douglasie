import * as vscode from 'vscode';
import { Client } from './douglasie-client/client';

export class DouglasieViewer implements vscode.CustomTextEditorProvider {

    outputChannel;

    constructor() {
        this.outputChannel = vscode.window.createOutputChannel('douglasie');
        this.outputChannel.show(true);
        this.outputChannel.appendLine('Loading DouglasieViewer');
    }
    
    async resolveCustomTextEditor(document: vscode.TextDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): Promise<void> {
        const content = document.getText();
        const fileUri = document.uri;
        this.outputChannel.appendLine(`Trying to open file ${fileUri.fsPath}`);
        /*
        const reader = await ParquetReader.openFile(fileUri.fsPath);

        const numOfRows = reader.getRowCount();
        this.outputChannel.appendLine(`Found parquet file with ${numOfRows} rows.`);
        */

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