const React = require('react');
const {View} = require('react-native');

const MapView = React.forwardRef((props, ref) =>
  React.createElement(View, {...props, ref}, props.children),
);

const Marker = props => React.createElement(View, props, props.children);

module.exports = MapView;
module.exports.default = MapView;
module.exports.Marker = Marker;
