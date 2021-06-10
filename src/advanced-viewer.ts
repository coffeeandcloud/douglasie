import { CancellationToken, CustomDocument, CustomDocumentBackup, CustomDocumentBackupContext, CustomDocumentContentChangeEvent, CustomDocumentEditEvent, CustomDocumentOpenContext, CustomEditorProvider, CustomReadonlyEditorProvider, Event, Uri, WebviewPanel } from "vscode";


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
    openCustomDocument(uri: Uri, openContext: CustomDocumentOpenContext, token: CancellationToken): ParquetDocument | Thenable<ParquetDocument> {
        return new ParquetDocument(uri);
    }
    resolveCustomEditor(document: ParquetDocument, webviewPanel: WebviewPanel, token: CancellationToken): void | Thenable<void> {
        webviewPanel.webview.html = document.getContent();
    }



}