import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ValueMap } from '../components/ValueMap/ValueMap';

const ValueMapCont: React.FC = () => {
  return <ValueMap />;
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

export default ValueMapCont;
