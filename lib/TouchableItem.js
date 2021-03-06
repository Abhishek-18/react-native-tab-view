'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/TouchableItem.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







var LOLLIPOP=21;var















TouchableItem=function(_PureComponent){_inherits(TouchableItem,_PureComponent);function TouchableItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TouchableItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TouchableItem.__proto__||Object.getPrototypeOf(TouchableItem)).call.apply(_ref,[this].concat(args))),_this),_this.

















_handlePress=function(){
global.requestAnimationFrame(_this.props.onPress);
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TouchableItem,[{key:'render',value:function render()

{var _props=

this.props,style=_props.style,pressOpacity=_props.pressOpacity,pressColor=_props.pressColor,borderless=_props.borderless,rest=_objectWithoutProperties(_props,['style','pressOpacity','pressColor','borderless']);

if(_reactNative.Platform.OS==='android'&&_reactNative.Platform.Version>=LOLLIPOP){
return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({},
rest,{
onPress:this._handlePress,
background:_reactNative.TouchableNativeFeedback.Ripple(pressColor,borderless),__source:{fileName:_jsxFileName,lineNumber:57}}),

_react2.default.createElement(_reactNative.View,{style:style,__source:{fileName:_jsxFileName,lineNumber:62}},
_react.Children.only(this.props.children))));



}else{
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({},
rest,{
onPress:this._handlePress,
style:style,
activeOpacity:pressOpacity,__source:{fileName:_jsxFileName,lineNumber:69}}),

this.props.children));


}
}}]);return TouchableItem;}(_react.PureComponent);TouchableItem.propTypes={onPress:_propTypes2.default.func.isRequired,delayPressIn:_propTypes2.default.number,borderless:_propTypes2.default.bool,pressColor:_propTypes2.default.string,pressOpacity:_propTypes2.default.number,children:_propTypes2.default.node.isRequired};TouchableItem.defaultProps={pressColor:'rgba(255, 255, 255, .4)'};exports.default=TouchableItem;