import { AfterViewInit, EventEmitter, TemplateRef } from '@angular/core';
import { IqSelect2Item } from './iq-select2-item';
import { IqSelect2ResultsComponent } from '../iq-select2-results/iq-select2-results.component';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Messages } from './messages';
export declare class IqSelect2Component implements AfterViewInit, ControlValueAccessor {
    MORE_RESULTS_MSG: string;
    NO_RESULTS_MSG: string;
    dataSourceProvider: (term: string) => Observable<any[]>;
    selectedProvider: (ids: string[]) => Observable<any[]>;
    iqSelect2ItemAdapter: (entity: any) => IqSelect2Item;
    referenceMode: 'id' | 'entity';
    multiple: boolean;
    searchDelay: number;
    css: string;
    placeholder: string;
    minimumInputLength: number;
    disabled: boolean;
    searchIcon: string;
    deleteIcon: string;
    messages: Messages;
    resultsCount: any;
    clientMode: boolean;
    onSelect: EventEmitter<IqSelect2Item>;
    onRemove: EventEmitter<IqSelect2Item>;
    termInput: any;
    results: IqSelect2ResultsComponent;
    templateRef: TemplateRef<any>;
    term: FormControl;
    resultsVisible: boolean;
    listData: IqSelect2Item[];
    fullDataList: IqSelect2Item[];
    selectedItems: IqSelect2Item[];
    searchFocused: boolean;
    private placeholderSelected;
    onTouchedCallback: () => void;
    onChangeCallback: (_: any) => void;
    constructor();
    ngAfterViewInit(): void;
    private subscribeToChangesAndLoadDataFromObservable();
    private subscribeToResults(observable);
    private loadDataFromObservable(term);
    private fetchAndfilterLocalData(term);
    private filterLocalData(term);
    private containsText(item, term);
    private fetchData(term);
    private adaptItems(items);
    writeValue(selectedValues: any): void;
    private populateItemsFromEntities(selectedValues);
    private handleMultipleWithEntities(selectedValues);
    private populateItemsFromIds(selectedValues);
    private handleMultipleWithIds(selectedValues);
    private handleSingleWithId(id);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private alreadySelected(item);
    onItemSelected(item: IqSelect2Item): void;
    private getSelectedIds();
    private getEntities();
    removeItem(item: IqSelect2Item): void;
    onFocus(): void;
    onBlur(): void;
    getInputWidth(): string;
    onKeyUp(ev: any): void;
    onKeyDown(ev: any): void;
    focusInput(): void;
    focusInputAndShowResults(): void;
    onKeyPress(ev: any): void;
    getCss(): string;
    getMinHeight(): string;
    getPlaceholder(): string;
    isHideable(): boolean;
    focus(): void;
    getCountMessage(): string;
}
