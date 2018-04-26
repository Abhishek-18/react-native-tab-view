'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/TabViewPagerAndroid.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _View=require('react-native-web/dist/exports/View');var _View2=_interopRequireDefault(_View);var _index=require('react-native-web/dist/index');var _StyleSheet=require('react-native-web/dist/exports/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);

var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

















TabViewPagerAndroid=function(_PureComponent){_inherits(TabViewPagerAndroid,_PureComponent);











function TabViewPagerAndroid(props){_classCallCheck(this,TabViewPagerAndroid);var _this=_possibleConstructorReturn(this,(TabViewPagerAndroid.__proto__||Object.getPrototypeOf(TabViewPagerAndroid)).call(this,
props));_this.












































_isRequestingAnimationFrame=false;_this.


_isIdle=true;_this.
_currentIndex=0;_this.

_getPageIndex=function(index){return index;};_this.

_setPage=function(index){
if(_this._viewPager){
_this._animationFrameCallback=null;

var page=_this._getPageIndex(index);
if(_this.props.animationEnabled!==false){
_this._viewPager.setPage(page);
}else{
_this._viewPager.setPageWithoutAnimation(page);
}
}
};_this.

_handlePageChange=function(index){
if(_this._isIdle&&_this._currentIndex!==index){
_this._setPage(index);
_this._currentIndex=index;
}
};_this.

_handlePageScroll=function(e){
_this.props.position.setValue(
_this._getPageIndex(e.nativeEvent.position)+
e.nativeEvent.offset*1);

};_this.

_handlePageScrollStateChanged=function(e){
_this._isIdle=e==='idle';
_this.props.jumpToIndex(_this._currentIndex);
};_this.

_handlePageSelected=function(e){
var index=_this._getPageIndex(e.nativeEvent.position);
_this._currentIndex=index;
};_this.

_setRef=function(el){return _this._viewPager=el;};_this._currentIndex=_this.props.navigationState.index;return _this;}_createClass(TabViewPagerAndroid,[{key:'componentDidMount',value:function componentDidMount(){this._resetListener=this.props.subscribe('reset',this._handlePageChange);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var _this2=this;if(this.props.layout!==nextProps.layout||_react.Children.count(this.props.children)!==_react.Children.count(nextProps.children)){this._animationFrameCallback=function(){if(_this2._viewPager){var navigationState=nextProps.navigationState;var page=navigationState.index;_this2._viewPager.setPageWithoutAnimation(page);}};if(!this._isRequestingAnimationFrame){this._isRequestingAnimationFrame=true;global.requestAnimationFrame(function(){_this2._isRequestingAnimationFrame=false;if(_this2._animationFrameCallback){_this2._animationFrameCallback();}});}}}},{key:'componentDidUpdate',value:function componentDidUpdate(){this._handlePageChange(this.props.navigationState.index);}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._resetListener.remove();}},{key:'render',value:function render()

{var _props=
this.props,children=_props.children,navigationState=_props.navigationState,swipeEnabled=_props.swipeEnabled;
var content=_react.Children.map(children,function(child,i){return(
_react2.default.createElement(_View2.default,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:styles.page,__source:{fileName:_jsxFileName,lineNumber:132}},

child));});



var initialPage=this._getPageIndex(navigationState.index);

return(
_react2.default.createElement(_index.ViewPagerAndroid,{
key:navigationState.routes.length,
keyboardDismissMode:'on-drag',
initialPage:initialPage,
scrollEnabled:swipeEnabled!==false,
onPageScroll:this._handlePageScroll,
onPageScrollStateChanged:this._handlePageScrollStateChanged,
onPageSelected:this._handlePageSelected,
style:styles.container,
ref:this._setRef,__source:{fileName:_jsxFileName,lineNumber:144}},

content));


}}]);return TabViewPagerAndroid;}(_react.PureComponent);TabViewPagerAndroid.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{animationEnabled:_propTypes2.default.bool,swipeEnabled:_propTypes2.default.bool,children:_propTypes2.default.node});exports.default=TabViewPagerAndroid;


var styles=_StyleSheet2.default.create({
container:{
flex:1},


page:{
overflow:'hidden'}});