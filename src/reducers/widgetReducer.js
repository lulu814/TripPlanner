const initialState = {
    widgets: [{
        "name": "React Heading",
        "id": 1,
        "type": "HEADING",
        "widgetOrder": 0,
        "text": "React",
        "src": null,
        "size": 1,
    }, {
        "name": "React Paragraph",
        "id": 11,
        "type": "PARAGRAPH",
        "widgetOrder": 1,
        "text": "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        "src": null,
        "size": 1,
    }]
};
const swapOrder = (from, to, widgets) => {
    // need a new array than the original one so the component can refresh
    let newWidgets = [...widgets];
    newWidgets[from] = newWidgets.splice(to, 1, newWidgets[from])[0];
    return newWidgets;
}

export const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_POST":
            return {
                ...state,
                widgets: action.widgets,
                postId: action.postId
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case "MOVE_WIDGET":
            const newWidgets = swapOrder(action.from, action.to, state.widgets);
            return {
                ...state,
                widgets: newWidgets
            }
        default:
            return state
    }
}

export default widgetReducer;
