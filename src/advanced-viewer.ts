import { CancellationToken, CustomDocument, CustomDocumentBackup, CustomDocumentBackupContext, CustomDocumentContentChangeEvent, CustomDocumentEditEvent, CustomDocumentOpenContext, CustomEditorProvider, CustomReadonlyEditorProvider, Event, Uri, WebviewPanel } from "vscode";
import * as vscode from 'vscode';
import { Client } from "./douglasie-client/client";

export class ParquetDocument implements CustomDocument {
    uri: Uri;

    constructor(uri: Uri) {
        this.uri = uri;
    }

    dispose(): void {
        
    }

    getContent(): string {
        return 'Hello World';
    }

}

export class AdvancedViewer implements CustomReadonlyEditorProvider<ParquetDocument> {

    outputChannel;

    constructor() {
        this.outputChannel = vscode.window.createOutputChannel('douglasie');
        this.outputChannel.show(true);
        this.outputChannel.appendLine('Loading advanced DouglasieViewer');
        
        
    }

    openCustomDocument(uri: Uri, openContext: CustomDocumentOpenContext, token: CancellationToken): ParquetDocument | Thenable<ParquetDocument> {
        return new ParquetDocument(uri);
    }

    async resolveCustomEditor(document: ParquetDocument, webviewPanel: WebviewPanel, token: CancellationToken): Promise<void> {
        const fileUri = document.uri;
        this.outputChannel.appendLine(`Trying to open file ${fileUri.fsPath}`);
        
        const client = new Client();
        const res = await client.getFileList('http://localhost/content/Users/martinsteinhauer/Desktop/Code/douglasie-server/sample/flat.parquet');
        this.outputChannel.appendLine(`Response: ${JSON.stringify(res.data.items)}`);


        webviewPanel.title = 'DouglasieViewer';
        webviewPanel.webview.html = JSON.stringify(res.data.items);
    }



}