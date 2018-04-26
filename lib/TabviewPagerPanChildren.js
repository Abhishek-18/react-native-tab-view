'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/TabviewPagerPanChildren.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _View=require('react-native-web/dist/exports/View');var _View2=_interopRequireDefault(_View);var _StyleSheet=require('react-native-web/dist/exports/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





TabviewPagerPanChildren=function(_React$Component){_inherits(TabviewPagerPanChildren,_React$Component);function TabviewPagerPanChildren(){_classCallCheck(this,TabviewPagerPanChildren);return _possibleConstructorReturn(this,(TabviewPagerPanChildren.__proto__||Object.getPrototypeOf(TabviewPagerPanChildren)).apply(this,arguments));}_createClass(TabviewPagerPanChildren,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(

newProps){
return true;
}},{key:'render',value:function render()

{
var width=this.props.width;
var i=this.props.i;
var view=_react2.default.createElement(_View2.default,{
style:
width?
{width:width}:
this.props.i===this.props.navigationState.index?_StyleSheet2.default.absoluteFill:null,__source:{fileName:_jsxFileName,lineNumber:16}},


i===this.props.navigationState.index||width?this.props.child:null);

return view;
}}]);return TabviewPagerPanChildren;}(_react2.default.Component);exports.default=TabviewPagerPanChildren;


var styles=_StyleSheet2.default.create({
tab:{
height:49,
alignItems:'center',
justifyContent:'center',
paddingLeft:20,
paddingRight:20},

container:{
height:50,
borderWidth:1,
borderTopWidth:0,
borderLeftWidth:0,
borderRightWidth:0,
borderColor:'#ccc'},

tabs:{
flexDirection:'row',
justifyContent:'space-around'}});