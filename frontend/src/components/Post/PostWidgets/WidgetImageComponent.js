import React from "react";
import {deleteWidget, moveWidget, updateWidget} from "../../../actions/widgetActions";
import {connect} from "react-redux";
import WidgetService from "../../../services/WidgetService";
import {FaArrowDown, FaArrowUp, FaTimes} from "react-icons/all";

export const WidgetImageComponent = ({widget, preview, index, updateWidget, deleteWidget, moveWidget, length}) =>
    <div className="my-4">
        {preview === false &&
         <div>
             <div className="row mx-1 my-2">
                 <div className="col-md-6 pl-2">
                     <h5 className="mt-2">Image Widget</h5>
                 </div>
                 <div className="col-md-6 d-flex ml-auto pr-0">
                     {index > 0 &&
                      <div className="btn btn-warning m-1"
                           onClick={() => moveWidget(index, index - 1)}>
                          <FaArrowUp/>
                      </div>
                     }
                     {index < length - 1 &&
                      <div className="btn btn-warning m-1"
                           onClick={() => moveWidget(index, index + 1)}>
                          <FaArrowDown/>
                      </div>
                     }
                     <select className="custom-select m-1" value={widget.type} onChange={event => {
                         updateWidget({
                                          ...widget,
                                          type: event.target.value
                                      })
                     }}>
                         <option value="HEADING">Heading</option>
                         <option value="PARAGRAPH">Paragraph</option>
                         <option value="IMAGE">Image</option>
                     </select>
                     <div className="btn btn-danger m-1" onClick={() => deleteWidget(widget.id)}>
                         <FaTimes/>
                     </div>
                 </div>
             </div>
             <div className="row mx-1 my-2">
                 <div className="col p-2">
                     <label htmlFor={`image-widget-text-${widget.id}`}>Image URL</label>
                     <input type="text" className="form-control" value={widget.src || ""}
                               id={`image-widget-text-${widget.id}`}
                               onChange={event => {
                                   updateWidget({
                                                    ...widget,
                                                    src: event.target.value
                                                })
                               }}/>
                 </div>
             </div>
         </div>
        }

        {preview === false &&
         <div className="row mx-1 my-2">
             <div className="col p-2">
                 <h5>Preview</h5>
             </div>
         </div>
        }

        {widget.src &&
         <div className="row mx-1 my-2">
             <div className="col p-2">
                 <img src={widget.src}
                      alt="react-img" className="react-img"/>
             </div>
         </div>
        }
    </div>

const stateToPropertyMapper = (state) => ({})

const dispatchToPropertyMapper = (dispatch) => ({
    //only update to redux
    updateWidget: (widget) =>
        dispatch(updateWidget(widget)),
    deleteWidget: (widgetId) =>
        WidgetService.deleteWidget(widgetId).then(
            dispatch(deleteWidget(widgetId))),
    moveWidget: (from, to) =>
        dispatch(moveWidget(from, to))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(WidgetImageComponent)
