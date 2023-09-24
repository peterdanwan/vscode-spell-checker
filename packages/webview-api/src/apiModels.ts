import type { LogLevel } from 'vscode-webview-rpc';

export interface Todo {
    uuid: number;
    done: boolean;
    text: string;
}

export type TodoList = Todo[];

export interface AppState {
    seq: number;
    todos: TodoList;
    logLevel: LogLevel;
}