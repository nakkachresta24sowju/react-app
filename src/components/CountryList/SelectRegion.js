import React from 'react';
import './SelectRegion.css';
function SelectRegion(props){
 const onChangeRegionSelect = (event) => {
  this.props.onChangeSelectedRegion(event.target.value);
 }
 const renderRegions = () => {
  return (props.regionOptions.map(item => item !== "" ? <option key={item} value={item}>{item}</option> : ""))
 }
  return (<div>
  <select className="regions-list" onChange={onChangeRegionSelect}>
  <option value="All" key="All">All</option>
  {renderRegions()}
  </select>
  </div>);
}
export { SelectRegion };
