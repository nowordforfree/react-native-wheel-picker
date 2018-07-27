import React from 'react';
import { requireNativeComponent } from 'react-native';

const WheelPickerNative = requireNativeComponent('WheelPicker', WheelPicker);

type Props = {
  backgroundColor?: string,
  curtainColor?: string,
  data: Array<string | number>,
  indicatorColor?: string,
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

type State = { selectedItemPosition: number }

export default class WheelPicker extends React.Component<Props, State> {

  state = {
    selectedItemPosition: 0,
  }

  static defaultProps = {
    style: { height: 150, width: 200 },
    itemStyle: { color: "white", fontSize: 26 },
    itemSpace: 20,
  }

  onItemSelected = (item: string | number) => {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(item)
    }
  }

  componentDidMount() {
    this.setState({ selectedItemPosition: this.props.selectedItemPosition || 0 })
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ selectedItemPosition: nextProps.selectedItemPosition || 0 })
  }

  render() {
    return (
      <WheelPickerNative
        {...WheelPicker.defaultProps}
        {...this.props}
        onChange={this.onItemSelected}
        selectedItemPosition={this.state.selectedItemPosition}
      />
    )
  }
}
