import React from 'react';
import './select-region.css';
class SelectRegion extends React.Component {
 onChangeRegionSelect = (event) => {
  this.props.onChangeSelectedRegion(event.target.value);
 }
 renderRegions = () => {
  return (this.props.regionOptions.map(item => item !== "" ? <option key={item} value={item}>{item}</option> : ""))
 }
 render() {
  return (<div>
  <select className="regions-list" onChange={this.onChangeRegionSelect}>
  <option value="All" key="All">All</option>
  {this.renderRegions()}
  </select>
  </div>);
 }
}
export { SelectRegion };
