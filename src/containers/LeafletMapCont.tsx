import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { LeafletMap } from '../components/LeafletMap/LeafletMap';
import { getInitCoords } from '../store/LeafletMap/mapReducer';
import { RootState } from '../store';

const mapStateToProps = (state: RootState) => {
  return {
    leafletMapInitCoords: state.leafletMapInitCoords,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getInitCoords,
    },
    dispatch,
  );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

// eslint-disable-next-line react/prop-types
const LeafletMapCont: React.FC<Props> = ({ getInitCoords }) => {
  useEffect(() => {
    getInitCoords();
  }, []);
  return <LeafletMap />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapCont);
