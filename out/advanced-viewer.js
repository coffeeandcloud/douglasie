"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedViewer = exports.ParquetDocument = void 0;
class ParquetDocument {
    constructor(uri) {
        this.uri = uri;
    }
    dispose() {
    }
    getContent() {
        return 'Hello World';
    }
}
exports.ParquetDocument = ParquetDocument;
class AdvancedViewer {
    openCustomDocument(uri, openContext, token) {
        return new ParquetDocument(uri);
    }
    resolveCustomEditor(document, webviewPanel, token) {
        webviewPanel.webview.html = document.getContent();
    }
}
exports.AdvancedViewer = AdvancedViewer;
//# sourceMappingURL=advanced-viewer.js.map