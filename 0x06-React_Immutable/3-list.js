import { List } from 'immutable';

export function getListObject(array) {
    const listObject = List(array);

    return listObject;
}

export function addElementToList(list, element) {
    return list.push(element);
}