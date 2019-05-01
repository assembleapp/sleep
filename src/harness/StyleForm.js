import React from "react"
import { observer } from "mobx-react"
import ColorPicker from "./ColorPicker"

import {
  mdiFormatAlignLeft,
  mdiFormatAlignCenter,
  mdiFormatAlignRight,
  mdiFormatAlignJustify,
  mdiFormatColorFill,
  mdiFormatColorText,
} from "@mdi/js"
import { Icon } from "@mdi/react"

/*
 * In addition to standard React style properties,
 * this form works with a few custom ones:
 *
 * gridRowCount (used to calculate `grid-template-rows`)
 * gridColumnCount (used to calculate `grid-template-columns`)
 */
@observer
class StyleForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Text alignment</h3>

          <button onClick={() => this.props.onChange({ textAlign: "left" })}>
            <Icon size={1} path={mdiFormatAlignLeft} />
          </button>

          <button onClick={() => this.props.onChange({ textAlign: "center" })}>
            <Icon size={1} path={mdiFormatAlignCenter} />
          </button>

          <button onClick={() => this.props.onChange({ textAlign: "right" })}>
            <Icon size={1} path={mdiFormatAlignRight} />
          </button>

          <button onClick={() => this.props.onChange({ textAlign: "justify" })}>
            <Icon size={1} path={mdiFormatAlignJustify} />
          </button>
        </div>

        <div>
          <h3>Colors</h3>

          <ColorPicker
            icon={mdiFormatColorFill}
            color={this.props.styles.backgroundColor}
            onChange={color => this.props.onChange({ backgroundColor: color.hex })}
          />

          <ColorPicker
            icon={mdiFormatColorText}
            color={this.props.styles.color}
            onChange={color => this.props.onChange({ color: color.hex })}
          />
        </div>

        <div>
          <h3>Grid Settings</h3>

          <div>
            <label># Columns</label>
            <input
              type="number"
              value={this.props.gridColumnCount || 1}
              onChange={e => this.props.onChange({
                display: "grid",
                gridColumnCount: e.target.value,
                gridTemplateColumns: `repeat(${e.target.value}, 1fr)`,
              })}
            />
          </div>

          <div>
            <label># Rows</label>
            <input
              type="number"
              value={this.props.gridRowCount || 1}
              onChange={e => this.props.onChange({
                display: "grid",
                gridRowCount: e.target.value,
                gridTemplateRows: `repeat(${e.target.value}, 1fr)`,
              })}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default StyleForm
