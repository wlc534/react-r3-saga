import React, {Component} from 'react';
import WiseCharts from './WiseCharts'
import GridLayout from 'react-grid-layout';
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const data={
    week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    '邮件营销': [120, 132, 101, 134, 90, 230, 210],
    '联盟广告': [220, 182, 191, 234, 290, 330, 310],
    '视频广告': [150, 232, 201, 154, 190, 330, 410],
    '直接访问': [320, 332, 301, 334, 390, 330, 320],
    '搜索引擎': [820, 932, 901, 934, 1290, 1330, 1320],
}
function generateLayout() {
    return _.map(_.range(0, 4), function(item, i) {
      var y = Math.ceil(Math.random() * 10) + 1;
      return {
        x: (_.random(0, 5) * 3) % 12,
        y: Math.floor(i / 6) * y,
        w: 3,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05
      };
    });
  }

class GridCharts extends Component{
    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        initialLayout: generateLayout()
      };
    
      state = {
        currentBreakpoint: "lg",
        compactType: "vertical",
        mounted: false,
        layouts: { lg: this.props.initialLayout }
      };
    
      componentDidMount() {
        this.setState({ mounted: true });
      }
    
      generateDOM() {
        return _.map(this.state.layouts.lg, function(l, i) {
          return (
            <div key={i} className={l.static ? "static" : ""} style={{backgroundColor:'#ccc',border:'1px solid black'}}>
              {/* {l.static ? (
                <span
                  className="text"
                  title="This item is static and cannot be removed or resized."
                >
                  Static - {i}
                </span>
              ) : (
                <span className="text">{i}</span>
              )} */}
               <WiseCharts type='line' width='100%' height='100%' title='多曲线图' data={data}/>
            </div>
          );
        });
      }
    
      onBreakpointChange = breakpoint => {
        this.setState({
          currentBreakpoint: breakpoint
        });
      };
    
      onCompactTypeChange = () => {
        const { compactType: oldCompactType } = this.state;
        const compactType =
          oldCompactType === "horizontal"
            ? "vertical"
            : oldCompactType === "vertical" ? null : "horizontal";
        this.setState({ compactType });
      };
    
      onLayoutChange = (layout, layouts) => {
        this.props.onLayoutChange(layout, layouts);
      };
    
      onNewLayout = () => {
        this.setState({
          layouts: { lg: generateLayout() }
        });
      };
    
      render() {
        return (
          <div style={{backgroundColor:'aliceblue',width:'70%',height:'80%'}}>
            {/* <div>
              Current Breakpoint: {this.state.currentBreakpoint} ({
                this.props.cols[this.state.currentBreakpoint]
              }{" "}
              columns)
            </div>
            <div>
              Compaction type:{" "}
              {_.capitalize(this.state.compactType) || "No Compaction"}
            </div> */}
            <button onClick={this.onNewLayout}>Generate New Layout</button>
            <button onClick={this.onCompactTypeChange}>
              Change Compaction Type
            </button>
            <ResponsiveReactGridLayout
              {...this.props}
              layouts={this.state.layouts}
              onBreakpointChange={this.onBreakpointChange}
              onLayoutChange={this.onLayoutChange}
              // WidthProvider option
              measureBeforeMount={false}
              // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
              // and set `measureBeforeMount={true}`.
              useCSSTransforms={this.state.mounted}
              compactType={this.state.compactType}
              preventCollision={!this.state.compactType}
            >
              {this.generateDOM()}
            </ResponsiveReactGridLayout>
          </div>
        );
      }
    }
    // render() {
    //     // layout is an array of objects, see the demo for more complete usage
    //     var layout = [
    //       {i: 'a', x: 0, y: 0, w: 8, h: 2, },
    //       {i: 'b', x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    //       {i: 'c', x: 3, y: 0, w: 5, h: 2},
    //       {i: 'd', x: 3, y: 0, w: 5, h: 2}
    //     ];
    //     var style={background:'#ccc',border:'1px solid black'};
    //     return (
    //         <div style={{backgroundColor:'aliceblue',width:'70%',height:'80%'}}> 
    //              <GridLayout className="layout" layout={layout} cols={12} rowHeight={130} width={1200}>
    //                 <div key="a" style={style}>
    //                     <WiseCharts type='line' width='100%' height='100%' title='多曲线图' data={data}/>
    //                 </div>
    //                 <div key="b" style={style}>
    //                     <WiseCharts type='pie' width='100%' height='100%' title='饼图' data={data}/>
    //                 </div>
    //                 <div key="c" style={style}>
    //                     <WiseCharts type='line' width='100%' height='100%' title='多曲线图' data={data}/>
    //                 </div>
    //                 <div key="d" style={style}>
    //                     <WiseCharts type='line' width='100%' height='100%' title='多曲线图' data={data}/>
    //                 </div>
    //             </GridLayout>
    //         </div>
         
    //     )
    //   }
// }
export default GridCharts;

