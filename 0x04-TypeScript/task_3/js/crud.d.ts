import { RowID, RowElement } from "./interface";

export declare const insertRow: (row: RowElement) => RowID;
export declare const deleteRow: (rowId: RowID) => void;
export declare const updateRow: (rowId: RowID, row: RowElement) => RowID;