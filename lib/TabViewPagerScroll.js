'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/TabViewPagerScroll.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _Platform=require('react-native-web/dist/exports/Platform');var _Platform2=_interopRequireDefault(_Platform);var _View=require('react-native-web/dist/exports/View');var _View2=_interopRequireDefault(_View);var _ScrollView=require('react-native-web/dist/exports/ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);var _StyleSheet=require('react-native-web/dist/exports/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);

var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





















TabViewPagerScroll=function(_PureComponent){_inherits(TabViewPagerScroll,_PureComponent);











function TabViewPagerScroll(props){_classCallCheck(this,TabViewPagerScroll);var _this=_possibleConstructorReturn(this,(TabViewPagerScroll.__proto__||Object.getPrototypeOf(TabViewPagerScroll)).call(this,
props));_this.









































_nextOffset=0;_this.
_isIdle=true;_this.

_scrollTo=function(x){var animated=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_this.props.animationEnabled!==false;
_this._nextOffset=x;

if(_this._isIdle&&_this._scrollView){
_this._scrollView.scrollTo({
x:x,
animated:animated});

}
};_this.

_handleMomentumScrollEnd=function(e){
var nextIndex=Math.round(
e.nativeEvent.contentOffset.x/_this.props.layout.width);

_this._isIdle=true;
_this.props.jumpToIndex(nextIndex);
};_this.

_handleScroll=function(e){
_this._isIdle=
Math.abs(e.nativeEvent.contentOffset.x-_this._nextOffset)<0.1;
_this.props.position.setValue(
e.nativeEvent.contentOffset.x/_this.props.layout.width);

};_this.

_setRef=function(el){return _this._scrollView=el;};_this.state={initialOffset:{x:_this.props.navigationState.index*_this.props.layout.width,y:0}};return _this;}_createClass(TabViewPagerScroll,[{key:'componentDidMount',value:function componentDidMount(){this._scrollTo(this.props.navigationState.index*this.props.layout.width,false);this._resetListener=this.props.subscribe('reset',this._scrollTo);}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){var _this2=this;var amount=this.props.navigationState.index*this.props.layout.width;if(prevProps.navigationState!==this.props.navigationState||prevProps.layout!==this.props.layout){if(_Platform2.default.OS==='android'||prevProps.navigationState!==this.props.navigationState){global.requestAnimationFrame(function(){return _this2._scrollTo(amount);});}else{this._scrollTo(amount,false);}}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._resetListener.remove();}},{key:'render',value:function render()

{var _props=
this.props,children=_props.children,layout=_props.layout,navigationState=_props.navigationState;
return(
_react2.default.createElement(_ScrollView2.default,{
horizontal:true,
pagingEnabled:true,
directionalLockEnabled:true,
keyboardDismissMode:'on-drag',
keyboardShouldPersistTaps:'always',
scrollEnabled:this.props.swipeEnabled,
automaticallyAdjustContentInsets:false,
bounces:false,
alwaysBounceHorizontal:false,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
scrollEventThrottle:16,
onScroll:this._handleScroll,
onMomentumScrollEnd:this._handleMomentumScrollEnd,
contentOffset:this.state.initialOffset,
style:styles.container,
contentContainerStyle:layout.width?null:styles.container,
ref:this._setRef,__source:{fileName:_jsxFileName,lineNumber:118}},

_react.Children.map(children,function(child,i){return(
_react2.default.createElement(_View2.default,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:
layout.width?
{width:layout.width,overflow:'hidden'}:
i===navigationState.index?styles.page:null,__source:{fileName:_jsxFileName,lineNumber:139}},


i===navigationState.index||layout.width?child:null));})));




}}]);return TabViewPagerScroll;}(_react.PureComponent);TabViewPagerScroll.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{animationEnabled:_propTypes2.default.bool,swipeEnabled:_propTypes2.default.bool,children:_propTypes2.default.node});exports.default=TabViewPagerScroll;


var styles=_StyleSheet2.default.create({
container:{
flex:1},


page:{
flex:1,
overflow:'hidden'}});