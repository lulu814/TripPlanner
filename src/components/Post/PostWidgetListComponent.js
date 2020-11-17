import React, {useState} from "react";
import widgetService from "../../services/WidgetService";
import {connect} from "react-redux";
import {createWidget} from "../../actions/widgetActions";
import WidgetHeadingComponent from "./PostWidgets/WidgetHeadingComponent";
import WidgetParagraphComponent from "./PostWidgets/WidgetParagraphComponent";
import WidgetImageComponent from "./PostWidgets/WidgetImageComponent";

const WidgetListComponent = ({widgets, postId, createWidgetForPost}) => {
    const [preview, setPreview] = useState(false);

    const saveAllWidgets = (postId, widgets) =>
        widgetService.saveAllWidgetsForPost(postId, widgets)

    const togglePreview = () => {
        setPreview(!preview)
    }

    return <div>
        <div className="w-100">
            <div className="ml-auto text-right">
                <button className="btn btn-success"
                        onClick={() => saveAllWidgets(postId, widgets)}>Save
                </button>
                <div className="custom-control custom-switch d-inline-block">
                    <input type="checkbox" className="custom-control-input"
                           id="customSwitches" onClick={() => togglePreview()}/>
                    <label className="custom-control-label"
                           htmlFor="customSwitches"><strong>Preview</strong></label>
                </div>
            </div>
        </div>

        {widgets &&
         widgets.map((widget, index) => {
             switch (widget.type) {
                 case "HEADING":
                     return <WidgetHeadingComponent key={widget.id} widget={widget}
                                                    preview={preview} index={index}
                                                    length={widgets.length}/>
                 case "PARAGRAPH":
                     return <WidgetParagraphComponent key={widget.id} widget={widget}
                                                      preview={preview} index={index}
                                                      length={widgets.length}/>

                 case "IMAGE":
                     return <WidgetImageComponent key={widget.id} widget={widget}
                                                  preview={preview} index={index}
                                                  length={widgets.length}/>
                 default:
                     break;
             }
         })}

        {!preview &&
         <button className="ml-auto btn btn-success wbdv-add-widget-fixed"
                 title="add new widget"
                 onClick={() => createWidgetForPost(postId)}>
             <i className="fas fa-plus fa-2x"/>
         </button>
        }
    </div>

}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    postId: state.widgetReducer.postId
})

const dispatchToPropertyMapper = (dispatch) => ({
    createWidgetForTopic: (topicId) =>
        widgetService.createWidgetForTopic(
            topicId, {
                type: 'HEADING',
                size: 1,
            })
            .then(actualWidget => dispatch(createWidget(actualWidget)))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(WidgetListComponent)
