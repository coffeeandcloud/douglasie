// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { AdvancedViewer } from './advanced-viewer';
import { DouglasieViewer } from './douglasie-viewer';


const EXTENSION_NAME = 'Douglasie';

let editor: vscode.Disposable;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "douglasie" is now active!');


	editor = vscode.window.registerCustomEditorProvider('douglasie.parquet', new AdvancedViewer());

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('douglasie.openParquet', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user


		vscode.window.showInformationMessage('Hello World from Douglasie!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(editor);
}

// this method is called when your extension is deactivated
export function deactivate() {
	//editor.dispose();
}
