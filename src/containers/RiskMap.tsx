import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RiskMap } from '../components/RiskMap/RiskMap';

const RiskMapCont: React.FC = () => {
  return <RiskMap />;
};

// const mapStateToProps = ( state ) => ({
//
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//
// }, dispatch);
//
// export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapCont);

export default RiskMapCont;
