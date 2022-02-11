import React from 'react';

const List_Group = (props) => {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    return (
        <ul className="list-group">
            {items.map(item => (
                <li key={item[valueProperty]}
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                    onClick={() => onItemSelect(item)}
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};

List_Group.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default List_Group;
