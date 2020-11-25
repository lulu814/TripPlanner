const postUrl = "";
const widgetUrl = '';

export const findWidgetsForPost = (pid) =>
    fetch(`${postUrl}/${pid}/widgets`)
        .then(response => response.json())

export const createWidgetForPost = (pid, widget) =>
    fetch(`${postUrl}/${pid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const saveAllWidgetsForPost = (pid, widgets) =>
    fetch(`${postUrl}/${pid}/widgets`, {
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${widgetUrl}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${widgetUrl}/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())


export default {
    findWidgetsForPost,
    createWidgetForPost,
    saveAllWidgetsForPost,
    updateWidget,
    deleteWidget
}
