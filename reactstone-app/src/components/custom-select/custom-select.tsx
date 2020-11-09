import React, { useEffect, useState } from 'react';

interface CallbackFunc {
    (selected: IItem): void;
}

interface Props {
    nonSelectedLabel?: string;
    options: IItem[];
    label?: string;
    selected?: IItem | null;
    onSelect?: CallbackFunc;
}

const CustomSelect: React.FC<Props> = ({
    label,
    nonSelectedLabel,
    options,
    selected,
    onSelect,
}: Props) => {

    const [selectedOption, setOption] = useState<IItem | null>(selected ? selected : null);
    const [isOpen, togglePortal] = useState<boolean>(false);

    useEffect(() => {
        setOption(selected ? selected : null);
    }, [selected]);

    const selectOption = (item:ICard):void => {
        setOption(item);
        if (onSelect !== undefined)
            onSelect(item);
        togglePortal(false);
    }

    const resetSelection = (e:any):void => {
        e.stopPropagation(); 
        setOption(null);
        if (onSelect !== undefined)
            onSelect(null);
    }
    
    return (
        <div className="custom-select">
            <button type="button" className="select-button" onClick={():void => togglePortal(true)}>
                <span>{selectedOption ? selectedOption.name : nonSelectedLabel ? nonSelectedLabel : 'Select...'}</span>
                { selectedOption !== null &&
                <div className="select-reset" onClick={resetSelection}>
                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                </div>
                }
                <svg className="select-arrow" height="20" width="20" viewBox="0 0 20 20"  aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
            </button>
            <div className={`select-portal${isOpen ? ' show' : ''}`} onClick={():void => togglePortal(false)}>
                <div className="select-dialog" onClick={(e):void => e.stopPropagation()}>
                    <div className="select-dialog-label">
                        <span>{label}</span>
                        <button type="button" className="close-dialog" onClick={():void => togglePortal(false)}>
                            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                        </button>
                    </div>
                    {options.length > 0 && 
                    <ul className="select-portal-options">
                        {options.map((item:ICard, key:number) => (
                            <li key={key} className={selectedOption && item.name == selectedOption.name ? 'selected' : ''} onClick={():void => selectOption(item)}>{item.name}</li>
                        ))}
                    </ul>
                    }
                    {options.length === 0 && 
                    <div className="no-options">No options available...</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CustomSelect;