declare module "react-native-wheel-picker" {
  import * as React from "react"

  export interface WheelPickerProps {
    curtainColor?: string,
    data: Array<string | number>,
    indicatorColor?: string,
    indicatorSize?: number,
    isAtmospheric?: boolean,
    isCurtain?: boolean,
    isCurved?: boolean,
    isCyclic?: boolean,
    itemSpace?: number,
    itemTextColor?: string,
    itemTextFontFamily?: string,
    itemTextSize?: number,
    onItemSelected?: (arg: string | number) => void,
    renderIndicator?: boolean,
    selectedItemPosition?: number,
    selectedItemTextColor?: string,
    visibleItemCount?: number,
  }

  export type State = {
    selectedItemPosition: number
  }

  export default class WheelPicker extends React.Component<WheelPickerProps, State> {}

}
