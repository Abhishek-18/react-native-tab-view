Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/TabBar.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _Animated=require('react-native-web/dist/exports/Animated');var _Animated2=_interopRequireDefault(_Animated);var _StyleSheet=require('react-native-web/dist/exports/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);var _View=require('react-native-web/dist/exports/View');var _View2=_interopRequireDefault(_View);var _Text=require('react-native-web/dist/exports/Text');var _Text2=_interopRequireDefault(_Text);var _ScrollView=require('react-native-web/dist/exports/ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);var _Platform=require('react-native-web/dist/exports/Platform');var _Platform2=_interopRequireDefault(_Platform);








var _TouchableItem=require('./TouchableItem');var _TouchableItem2=_interopRequireDefault(_TouchableItem);
var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var













































TabBar=function(_PureComponent){_inherits(TabBar,_PureComponent);























function TabBar(props){_classCallCheck(this,TabBar);var _this=_possibleConstructorReturn(this,(TabBar.__proto__||Object.getPrototypeOf(TabBar)).call(this,
props));_initialiseProps.call(_this);

var initialVisibility=0;

if(_this.props.scrollEnabled===true){
var tabWidth=_this._getTabWidthFromStyle(_this.props.tabStyle);
if(_this.props.layout.width||tabWidth){
initialVisibility=1;
}
}else{
initialVisibility=1;
}

_this.state={
offset:new _Animated2.default.Value(0),
visibility:new _Animated2.default.Value(initialVisibility),
initialOffset:{
x:_this._getScrollAmount(_this.props,_this.props.navigationState.index),
y:0}};return _this;


}_createClass(TabBar,[{key:'componentDidMount',value:function componentDidMount()



{
this._adjustScroll(this.props.navigationState.index);
this._positionListener=this.props.subscribe(
'position',
this._adjustScroll);

}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(this.props.navigationState!==nextProps.navigationState){
this._resetScrollOffset(nextProps);
}

var nextTabWidth=this._getTabWidthFromStyle(nextProps.tabStyle);

if(
this.props.tabStyle!==nextProps.tabStyle&&nextTabWidth||
this.props.layout.width!==nextProps.layout.width&&
nextProps.layout.width)
{
this.state.visibility.setValue(1);
}
}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps){var _this2=this;
if(
this.props.scrollEnabled&&(
prevProps.layout!==this.props.layout||
prevProps.tabStyle!==this.props.tabStyle))
{
global.requestAnimationFrame(function(){return(
_this2._adjustScroll(_this2.props.navigationState.index));});

}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._positionListener.remove();
}},{key:'render',value:function render()




























































































































































































{var _this3=this;var _props=
this.props,position=_props.position,navigationState=_props.navigationState,scrollEnabled=_props.scrollEnabled;var
routes=navigationState.routes,index=navigationState.index;
var maxDistance=this._getMaxScrollableDistance(this.props);
var finalTabWidth=this._getFinalTabWidth(this.props);
var tabBarWidth=finalTabWidth*routes.length;


var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
var translateOutputRange=inputRange.map(
function(i){return _this3._getScrollAmount(_this3.props,i)*-1;});


var translateX=_Animated2.default.add(
position.interpolate({
inputRange:inputRange,
outputRange:translateOutputRange}),

this.state.offset).
interpolate({
inputRange:[-maxDistance,0],
outputRange:[-maxDistance,0],
extrapolate:'clamp'});


return(
_react2.default.createElement(_Animated2.default.View,{style:[styles.tabBar,this.props.style],__source:{fileName:_jsxFileName,lineNumber:363}},
_react2.default.createElement(_Animated2.default.View,{
pointerEvents:'none',
style:[
styles.indicatorContainer,
scrollEnabled?
{width:tabBarWidth,transform:[{translateX:translateX}]}:
null],__source:{fileName:_jsxFileName,lineNumber:364}},


this._renderIndicator(_extends({},
this.props,{
width:new _Animated2.default.Value(finalTabWidth)}))),


_react2.default.createElement(_View2.default,{style:styles.scroll,__source:{fileName:_jsxFileName,lineNumber:378}},
_react2.default.createElement(_ScrollView2.default,{
horizontal:true,
scrollEnabled:scrollEnabled,
bounces:false,
alwaysBounceHorizontal:false,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
automaticallyAdjustContentInsets:false,
overScrollMode:'never',
contentContainerStyle:[
styles.tabContent,
scrollEnabled?null:styles.container],

scrollEventThrottle:16,
onScroll:this._handleScroll,
onScrollBeginDrag:this._handleBeginDrag,
onScrollEndDrag:this._handleEndDrag,
onMomentumScrollBegin:this._handleMomentumScrollBegin,
onMomentumScrollEnd:this._handleMomentumScrollEnd,
contentOffset:this.state.initialOffset,
ref:this._setRef,__source:{fileName:_jsxFileName,lineNumber:379}},

routes.map(function(route,i){
var focused=index===i;
var outputRange=inputRange.map(
function(inputIndex){return inputIndex===i?1:0.7;});

var opacity=_Animated2.default.multiply(
_this3.state.visibility,
position.interpolate({
inputRange:inputRange,
outputRange:outputRange}));


var scene={
route:route,
focused:focused,
index:i};

var label=_this3._renderLabel(scene);
var icon=_this3.props.renderIcon?
_this3.props.renderIcon(scene):
null;
var badge=_this3.props.renderBadge?
_this3.props.renderBadge(scene):
null;

var tabStyle={};

tabStyle.opacity=opacity;

if(icon){
if(label){
tabStyle.paddingTop=8;
}else{
tabStyle.padding=12;
}
}

var passedTabStyle=_StyleSheet2.default.flatten(_this3.props.tabStyle);
var isWidthSet=
passedTabStyle&&
typeof passedTabStyle.width!=='undefined'||
scrollEnabled===true;
var tabContainerStyle={};

if(isWidthSet){
tabStyle.width=finalTabWidth;
}

if(passedTabStyle&&typeof passedTabStyle.flex==='number'){
tabContainerStyle.flex=passedTabStyle.flex;
}else if(!isWidthSet){
tabContainerStyle.flex=1;
}

var accessibilityLabel=
route.accessibilityLabel||route.title;

return(
_react2.default.createElement(_TouchableItem2.default,{
borderless:true,
key:route.key,
testID:route.testID,
accessible:route.accessible,
accessibilityLabel:accessibilityLabel,
accessibilityTraits:'button',
pressColor:_this3.props.pressColor,
pressOpacity:_this3.props.pressOpacity,
delayPressIn:0,
onPress:function onPress(){var _props2=

_this3.props,onTabPress=_props2.onTabPress,jumpToIndex=_props2.jumpToIndex;
jumpToIndex(i);
if(onTabPress){
onTabPress(scene);
}
},
style:tabContainerStyle,__source:{fileName:_jsxFileName,lineNumber:459}},

_react2.default.createElement(_View2.default,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:479}},
_react2.default.createElement(_Animated2.default.View,{
style:[
styles.tabItem,
tabStyle,
passedTabStyle,
styles.container],__source:{fileName:_jsxFileName,lineNumber:480}},


icon,
label),

badge?
_react2.default.createElement(_Animated2.default.View,{
style:[
styles.badge,
{opacity:_this3.state.visibility}],__source:{fileName:_jsxFileName,lineNumber:492}},


badge):

null)));



})))));




}}]);return TabBar;}(_react.PureComponent);TabBar.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{scrollEnabled:_propTypes2.default.bool,pressColor:_TouchableItem2.default.propTypes.pressColor,pressOpacity:_TouchableItem2.default.propTypes.pressOpacity,getLabelText:_propTypes2.default.func,renderIcon:_propTypes2.default.func,renderLabel:_propTypes2.default.func,renderIndicator:_propTypes2.default.func,onTabPress:_propTypes2.default.func,labelStyle:_Text2.default.propTypes.style,style:_propTypes2.default.any});TabBar.defaultProps={getLabelText:function getLabelText(_ref){var route=_ref.route;return route.title?route.title.toUpperCase():null;}};var _initialiseProps=function _initialiseProps(){var _this4=this;this._isManualScroll=false;this._isMomentumScroll=false;this._renderLabel=function(scene){if(typeof _this4.props.renderLabel!=='undefined'){return _this4.props.renderLabel(scene);}var label=_this4.props.getLabelText(scene);if(typeof label!=='string'){return null;}var isFocused=scene.focused;if(isFocused){return _react2.default.createElement(_Text2.default,{numberOfLines:1,style:[styles.tabLabel,_this4.props.labelStyle],__source:{fileName:_jsxFileName,lineNumber:167}},label);}else{return _react2.default.createElement(_Text2.default,{numberOfLines:1,style:[styles.tabLabel],__source:{fileName:_jsxFileName,lineNumber:171}},label);}};this._renderIndicator=function(props){if(typeof _this4.props.renderIndicator!=='undefined'){return _this4.props.renderIndicator(props);}var width=props.width,position=props.position;var translateX=_Animated2.default.multiply(_Animated2.default.multiply(position,width),1);return _react2.default.createElement(_Animated2.default.View,{style:[styles.indicator,{width:width,transform:[{translateX:translateX}]},_this4.props.indicatorStyle],__source:{fileName:_jsxFileName,lineNumber:185}});};this._getTabWidthFromStyle=function(style){if(_this4._tabWidthCache&&_this4._tabWidthCache.style===style){return _this4._tabWidthCache.width;}var passedTabStyle=_StyleSheet2.default.flatten(_this4.props.tabStyle);var cache={style:style,width:passedTabStyle?passedTabStyle.width:null};_this4._tabWidthCache=cache;return cache;};this._getFinalTabWidth=function(props){var layout=props.layout,navigationState=props.navigationState;var tabWidth=_this4._getTabWidthFromStyle(props.tabStyle);if(typeof tabWidth==='number'){return tabWidth;}if(typeof tabWidth==='string'&&tabWidth.endsWith('%')){return layout.width*(parseFloat(tabWidth)/100);}if(props.scrollEnabled){return layout.width/5*2;}return layout.width/navigationState.routes.length;};this._getMaxScrollableDistance=function(props){var layout=props.layout,navigationState=props.navigationState;if(layout.width===0){return 0;}var finalTabWidth=_this4._getFinalTabWidth(props);var tabBarWidth=finalTabWidth*navigationState.routes.length;var maxDistance=tabBarWidth-layout.width;return Math.max(maxDistance,0);};this._normalizeScrollValue=function(props,value){var maxDistance=_this4._getMaxScrollableDistance(props);return Math.max(Math.min(value,maxDistance),0);};this._getScrollAmount=function(props,i){var layout=props.layout;var finalTabWidth=_this4._getFinalTabWidth(props);var centerDistance=finalTabWidth*i+finalTabWidth/2;var scrollAmount=centerDistance-layout.width/2;return _this4._normalizeScrollValue(props,scrollAmount);};this._resetScrollOffset=function(props){if(!props.scrollEnabled||!_this4._scrollView){return;}var scrollAmount=_this4._getScrollAmount(props,props.navigationState.index);_this4._scrollView.scrollTo({x:scrollAmount,animated:true});_Animated2.default.timing(_this4.state.offset,{toValue:0,duration:150}).start();};this._adjustScroll=function(index){if(!_this4.props.scrollEnabled||!_this4._scrollView){return;}var scrollAmount=_this4._getScrollAmount(_this4.props,index);_this4._scrollView.scrollTo({x:scrollAmount,animated:false});};this._adjustOffset=function(value){if(!_this4._isManualScroll||!_this4.props.scrollEnabled){return;}var scrollAmount=_this4._getScrollAmount(_this4.props,_this4.props.navigationState.index);var scrollOffset=value-scrollAmount;if(_this4._isMomentumScroll){_Animated2.default.spring(_this4.state.offset,{toValue:-scrollOffset,tension:300,friction:35}).start();}else{_this4.state.offset.setValue(-scrollOffset);}};this._handleScroll=function(e){_this4._adjustOffset(e.nativeEvent.contentOffset.x);};this._handleBeginDrag=function(){_this4._isManualScroll=true;_this4._isMomentumScroll=false;};this._handleEndDrag=function(){global.requestAnimationFrame(function(){if(_this4._isMomentumScroll){return;}_this4._isManualScroll=false;});};this._handleMomentumScrollBegin=function(){_this4._isMomentumScroll=true;};this._handleMomentumScrollEnd=function(){_this4._isMomentumScroll=false;_this4._isManualScroll=false;};this._setRef=function(el){return _this4._scrollView=el;};};exports.default=TabBar;


var styles=_StyleSheet2.default.create({
container:{
flex:1},

scroll:{},

tabBar:{
backgroundColor:'#2196f3',
elevation:4,
shadowColor:'black',
shadowOpacity:0.1,
shadowRadius:_StyleSheet2.default.hairlineWidth,
shadowOffset:{
height:_StyleSheet2.default.hairlineWidth},


zIndex:_Platform2.default.OS==='android'?0:1},

tabContent:{
flexDirection:'row',
flexWrap:'nowrap'},

tabLabel:{
backgroundColor:'transparent',
color:'black',
marginTop:6,marginBottom:6,marginLeft:3,marginRight:3,fontSize:14,fontWeight:'500'},

tabItem:{
flex:1,
padding:8,
alignItems:'center',
justifyContent:'center'},

badge:{
position:'absolute',
top:0,
right:0},

indicatorContainer:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},

indicator:{
backgroundColor:'#ffeb3b',
position:'absolute',
left:0,
bottom:0,
right:0,
height:2}});