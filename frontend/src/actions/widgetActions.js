export const CREATE_WIDGET = "CREATE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_WIDGETS_FOR_POST = "FIND_WIDGETS_FOR_POST";
export const MOVE_WIDGET = "MOVE_WIDGET";

export const updateWidget = (newWidget) => ({
    type: UPDATE_WIDGET,
    widget: newWidget
})

export const createWidget = (newWidget) => ({
    type: CREATE_WIDGET,
    widget: newWidget
})

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const findWidgetsForPost = (widgets) => ({
    type: FIND_WIDGETS_FOR_POST,
    widgets: widgets
})

export const moveWidget = (from, to) => ({
    type: MOVE_WIDGET,
    from: from,
    to: to
})


