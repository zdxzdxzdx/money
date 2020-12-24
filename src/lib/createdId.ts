let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createdId() {
    id++;
    return id;
}

export default createdId;